export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export type GalleryCategory = 'hair' | 'skin' | 'body' | 'nails' | 'interior';

export const galleryCategoryLabels: Record<GalleryCategory, string> = {
  hair: 'Hair',
  skin: 'Skin',
  body: 'Spa & Body',
  nails: 'Nails',
  interior: 'Interior',
};

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85&fit=crop&auto=format', alt: 'Balayage blonde with natural waves', category: 'hair', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85&fit=crop&auto=format', alt: 'Precision styling session', category: 'hair', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=85&fit=crop&auto=format', alt: 'Rich brunette colour result', category: 'hair', width: 600, height: 900 },
  { src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=85&fit=crop&auto=format', alt: 'Elegant updo styling', category: 'hair', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85&fit=crop&auto=format', alt: 'Glowing skin after facial treatment', category: 'skin', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=85&fit=crop&auto=format', alt: 'Radiant complexion close-up', category: 'skin', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85&fit=crop&auto=format', alt: 'Skincare serum application', category: 'skin', width: 600, height: 900 },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=85&fit=crop&auto=format', alt: 'Elegant gel manicure', category: 'nails', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=85&fit=crop&auto=format', alt: 'French tip nail art', category: 'nails', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=85&fit=crop&auto=format', alt: 'Detailed nail design', category: 'nails', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85&fit=crop&auto=format', alt: 'Hot stone massage therapy', category: 'body', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=85&fit=crop&auto=format', alt: 'Aromatherapy back massage', category: 'body', width: 600, height: 900 },
  { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85&fit=crop&auto=format', alt: 'Relaxing spa body treatment', category: 'body', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=85&fit=crop&auto=format', alt: 'Deep tissue shoulder massage', category: 'body', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=85&fit=crop&auto=format', alt: 'Spa treatment room interior', category: 'interior', width: 900, height: 600 },
  { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=85&fit=crop&auto=format', alt: 'Relaxation lounge', category: 'interior', width: 900, height: 600 },
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=85&fit=crop&auto=format', alt: 'Wellness atmosphere', category: 'interior', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=85&fit=crop&auto=format', alt: 'Copper red colour transformation', category: 'hair', width: 600, height: 800 },
];
