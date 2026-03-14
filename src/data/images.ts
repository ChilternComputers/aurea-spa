export const IMAGES = {
  heroCandle: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35',
  aboutOil: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
  treatmentsSkincare: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b',
  testimonialsWater: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd',
} as const;

export function unsplash(id: string, w: number, q = 85) {
  return `${id}?w=${w}&q=${q}&fit=crop&auto=format&fm=webp`;
}
