// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aurea-spa.pages.dev',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
