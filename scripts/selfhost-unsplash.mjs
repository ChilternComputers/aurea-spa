import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import https from 'node:https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const localDir = join(root, 'public', 'images', 'unsplash');

await mkdir(localDir, { recursive: true });

// Regex captures: full URL, photoId (without leading "photo-"), width param if any
const urlRe = /https:\/\/images\.unsplash\.com\/photo-([a-zA-Z0-9-]+)(\?[^"'`)\s]*)?/g;

// 1) Scan all source files
const files = await glob(['src/**/*.{ts,tsx,astro,md}', 'src/**/*.{mjs,js,json}'], { cwd: root, absolute: true });
const photoMaxWidth = new Map(); // id -> max requested width
const usages = [];               // { file, match, fullUrl, id, width }

for (const f of files) {
  const text = await readFile(f, 'utf8');
  let m;
  urlRe.lastIndex = 0;
  while ((m = urlRe.exec(text))) {
    const [full, id, query = ''] = m;
    const wMatch = query.match(/[?&]w=(\d+)/);
    const w = wMatch ? parseInt(wMatch[1], 10) : 1920; // when there's no width param the caller is the unsplash() helper which will request various sizes — assume hero scale
    photoMaxWidth.set(id, Math.max(photoMaxWidth.get(id) || 0, w));
    usages.push({ file: f, full, id, width: w });
  }
}

console.log(`Unique photo IDs: ${photoMaxWidth.size}`);
console.log(`Total usages: ${usages.length}`);

// 2) Download each at its max-requested width (clamped to 2048)
function fetchBuf(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchBuf(res.headers.location).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`${res.statusCode} ${url}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

let downloaded = 0;
for (const [id, w] of photoMaxWidth) {
  const out = join(localDir, `${id}.webp`);
  if (existsSync(out)) {
    downloaded++;
    continue;
  }
  const dlW = Math.min(w, 2048);
  const u = `https://images.unsplash.com/photo-${id}?w=${dlW}&q=85&fit=crop&auto=format&fm=webp`;
  try {
    const buf = await fetchBuf(u);
    await writeFile(out, buf);
    console.log(`  ✓ ${id}.webp (${dlW}w, ${(buf.length / 1024).toFixed(0)}KB)`);
    downloaded++;
  } catch (e) {
    console.error(`  ✗ ${id}: ${e.message}`);
  }
}
console.log(`Downloaded: ${downloaded}/${photoMaxWidth.size}`);

// 3) Rewrite all source files
let filesChanged = 0;
const fileTexts = new Map();
for (const u of usages) {
  if (!fileTexts.has(u.file)) fileTexts.set(u.file, await readFile(u.file, 'utf8'));
}

for (const [file, text] of fileTexts) {
  const newText = text.replace(urlRe, (full, id, query) => `/images/unsplash/${id}.webp`);
  if (newText !== text) {
    await writeFile(file, newText);
    filesChanged++;
    console.log(`  rewrote ${relative(root, file)}`);
  }
}
console.log(`Files rewritten: ${filesChanged}`);
