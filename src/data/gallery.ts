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
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85&fit=crop&auto=format', alt: 'Hand-painted balayage creating sun-kissed blonde waves — AUREA colour studio, Marylebone', category: 'hair', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=85&fit=crop&auto=format', alt: 'Precision blow-dry and styling at AUREA salon', category: 'hair', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=85&fit=crop&auto=format', alt: 'Rich glossy brunette colour by AUREA senior colourist James Whitfield', category: 'hair', width: 600, height: 900 },
  { src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=85&fit=crop&auto=format', alt: 'Elegant bridal updo with soft waves — AUREA wedding hair styling', category: 'hair', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=85&fit=crop&auto=format', alt: 'Luminous skin after the signature AUREA deep-cleansing facial', category: 'skin', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=85&fit=crop&auto=format', alt: 'Radiant complexion following AUREA Hydra-Glow vitamin C infusion treatment', category: 'skin', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=85&fit=crop&auto=format', alt: 'Premium hyaluronic acid serum application during AUREA facial treatment', category: 'skin', width: 600, height: 900 },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=85&fit=crop&auto=format', alt: 'Flawless gel manicure with nude polish — AUREA luxury nail studio', category: 'nails', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=85&fit=crop&auto=format', alt: 'Classic French tip nail art by AUREA nail artist Amara Osei', category: 'nails', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=85&fit=crop&auto=format', alt: 'Bespoke hand-painted editorial nail design at AUREA Marylebone', category: 'nails', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=85&fit=crop&auto=format', alt: 'Hot basalt stone massage for deep muscle relief — AUREA spa', category: 'body', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=85&fit=crop&auto=format', alt: 'Aromatherapy full-body massage with bespoke essential oil blend at AUREA', category: 'body', width: 600, height: 900 },
  { src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85&fit=crop&auto=format', alt: 'Detoxifying seaweed body wrap with lymphatic drainage — AUREA wellness', category: 'body', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=85&fit=crop&auto=format', alt: 'Deep tissue shoulder and neck massage at AUREA spa, Marylebone', category: 'body', width: 600, height: 800 },
  { src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&q=85&fit=crop&auto=format', alt: 'AUREA private treatment room with calming sage and cream interiors', category: 'interior', width: 900, height: 600 },
  { src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=85&fit=crop&auto=format', alt: 'AUREA relaxation lounge with botanical accents and natural light', category: 'interior', width: 900, height: 600 },
  { src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=85&fit=crop&auto=format', alt: 'Nature-inspired wellness atmosphere inside AUREA spa, Marylebone London', category: 'interior', width: 600, height: 600 },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=85&fit=crop&auto=format', alt: 'Vibrant copper-red colour transformation using ammonia-free formula at AUREA', category: 'hair', width: 600, height: 800 },
];
