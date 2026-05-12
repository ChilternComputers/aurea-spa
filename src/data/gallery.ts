import { unsplash } from '@/data/images';

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

const GALLERY_BASES = {
  balayage: '/images/unsplash/1522337360788-8b13dee7a37e.webp',
  blowDry: '/images/unsplash/1560066984-138dadb4c035.webp',
  brunette: '/images/unsplash/1519699047748-de8e457a634e.webp',
  bridalUpdo: '/images/unsplash/1492106087820-71f1a00d2b11.webp',
  facial: '/images/unsplash/1570172619644-dfd03ed5d881.webp',
  hydraGlow: '/images/unsplash/1487412720507-e7ab37603c6f.webp',
  serum: '/images/unsplash/1616394584738-fc6e612e71b9.webp',
  gelManicure: '/images/unsplash/1604654894610-df63bc536371.webp',
  frenchTip: '/images/unsplash/1632345031435-8727f6897d53.webp',
  nailArt: '/images/unsplash/1610992015732-2449b76344bc.webp',
  hotStone: '/images/unsplash/1544161515-4ab6ce6db874.webp',
  aromatherapy: '/images/unsplash/1515377905703-c4788e51af15.webp',
  bodyWrap: '/images/unsplash/1600334089648-b0d9d3028eb2.webp',
  deepTissue: '/images/unsplash/1519823551278-64ac92734fb1.webp',
  treatmentRoom: '/images/unsplash/1596178065887-1198b6148b2b.webp',
  relaxationLounge: '/images/unsplash/1600334129128-685c5582fd35.webp',
  wellnessAtmosphere: '/images/unsplash/1507652313519-d4e9174996dd.webp',
  copperRed: '/images/unsplash/1605497788044-5a32c7078486.webp',
} as const;

export const galleryImages: GalleryImage[] = [
  { src: unsplash(GALLERY_BASES.balayage, 800), alt: 'Hand-painted balayage creating sun-kissed blonde waves — AUREA colour studio, Marylebone', category: 'hair', width: 600, height: 800 },
  { src: unsplash(GALLERY_BASES.blowDry, 800), alt: 'Precision blow-dry and styling at AUREA salon', category: 'hair', width: 600, height: 600 },
  { src: unsplash(GALLERY_BASES.brunette, 800), alt: 'Rich glossy brunette colour by AUREA senior colourist James Whitfield', category: 'hair', width: 600, height: 900 },
  { src: unsplash(GALLERY_BASES.bridalUpdo, 800), alt: 'Elegant bridal updo with soft waves — AUREA wedding hair styling', category: 'hair', width: 600, height: 800 },
  { src: unsplash(GALLERY_BASES.facial, 800), alt: 'Luminous skin after the signature AUREA deep-cleansing facial', category: 'skin', width: 600, height: 600 },
  { src: unsplash(GALLERY_BASES.hydraGlow, 800), alt: 'Radiant complexion following AUREA Hydra-Glow vitamin C infusion treatment', category: 'skin', width: 600, height: 800 },
  { src: unsplash(GALLERY_BASES.serum, 800), alt: 'Premium hyaluronic acid serum application during AUREA facial treatment', category: 'skin', width: 600, height: 900 },
  { src: unsplash(GALLERY_BASES.gelManicure, 800), alt: 'Flawless gel manicure with nude polish — AUREA luxury nail studio', category: 'nails', width: 600, height: 600 },
  { src: unsplash(GALLERY_BASES.frenchTip, 800), alt: 'Classic French tip nail art by AUREA nail artist Amara Osei', category: 'nails', width: 600, height: 600 },
  { src: unsplash(GALLERY_BASES.nailArt, 800), alt: 'Bespoke hand-painted editorial nail design at AUREA Marylebone', category: 'nails', width: 600, height: 800 },
  { src: unsplash(GALLERY_BASES.hotStone, 800), alt: 'Hot basalt stone massage for deep muscle relief — AUREA spa', category: 'body', width: 600, height: 800 },
  { src: unsplash(GALLERY_BASES.aromatherapy, 800), alt: 'Aromatherapy full-body massage with bespoke essential oil blend at AUREA', category: 'body', width: 600, height: 900 },
  { src: unsplash(GALLERY_BASES.bodyWrap, 800), alt: 'Detoxifying seaweed body wrap with lymphatic drainage — AUREA wellness', category: 'body', width: 600, height: 600 },
  { src: unsplash(GALLERY_BASES.deepTissue, 800), alt: 'Deep tissue shoulder and neck massage at AUREA spa, Marylebone', category: 'body', width: 600, height: 800 },
  { src: unsplash(GALLERY_BASES.treatmentRoom, 800), alt: 'AUREA private treatment room with calming sage and cream interiors', category: 'interior', width: 900, height: 600 },
  { src: unsplash(GALLERY_BASES.relaxationLounge, 800), alt: 'AUREA relaxation lounge with botanical accents and natural light', category: 'interior', width: 900, height: 600 },
  { src: unsplash(GALLERY_BASES.wellnessAtmosphere, 800), alt: 'Nature-inspired wellness atmosphere inside AUREA spa, Marylebone London', category: 'interior', width: 600, height: 600 },
  { src: unsplash(GALLERY_BASES.copperRed, 800), alt: 'Vibrant copper-red colour transformation using ammonia-free formula at AUREA', category: 'hair', width: 600, height: 800 },
];
