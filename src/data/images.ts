export const IMAGES = {
  heroCandle: '/images/unsplash/1600334129128-685c5582fd35.webp',
  aboutOil: '/images/unsplash/1570172619644-dfd03ed5d881.webp',
  treatmentsSkincare: '/images/unsplash/1596178065887-1198b6148b2b.webp',
  testimonialsWater: '/images/unsplash/1507652313519-d4e9174996dd.webp',
} as const;

// Kept for callsite compatibility — images are now self-hosted, so width / quality
// hints are ignored and the local asset path is returned as-is. The browser handles
// scaling via CSS / object-fit, and the WebP encode is fixed at build time.
export function unsplash(id: string, _w?: number, _q?: number) {
  return id;
}
