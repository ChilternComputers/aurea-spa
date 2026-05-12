export interface Product {
  name: string;
  brand: string;
  description: string;
  price: number;
  category: ShopCategory;
  image: string;
  imageAlt: string;
}

export type ShopCategory = 'skincare' | 'haircare' | 'body' | 'wellness';

export const shopCategoryLabels: Record<ShopCategory, string> = {
  skincare: 'Skincare',
  haircare: 'Haircare',
  body: 'Body & Bath',
  wellness: 'Wellness',
};

export const products: Product[] = [
  // Skincare
  {
    name: 'Radiance Vitamin C Serum',
    brand: 'AUREA Skincare',
    description: 'A potent 15% vitamin C serum with ferulic acid to brighten, protect and even skin tone.',
    price: 68,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Vitamin C serum bottle with dropper',
  },
  {
    name: 'Enzyme Gel Cleanser',
    brand: 'AUREA Skincare',
    description: 'A gentle papaya enzyme cleanser that dissolves impurities without stripping the skin barrier.',
    price: 42,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Gel cleanser in frosted glass bottle',
  },
  {
    name: 'Night Recovery Cream',
    brand: 'AUREA Skincare',
    description: 'Rich overnight cream with retinol, peptides and squalane to repair and renew while you sleep.',
    price: 55,
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Luxurious night cream in amber jar',
  },

  // Haircare
  {
    name: 'Gold Lust Shampoo',
    brand: 'Oribe',
    description: 'Restores hair to its glossiest, most gorgeous state with bio-restorative complex.',
    price: 46,
    category: 'haircare',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Premium shampoo bottle in gold packaging',
  },
  {
    name: 'Heat Shield Protector',
    brand: 'AUREA Haircare',
    description: 'Lightweight thermal spray protecting hair up to 230°C while adding shine and reducing frizz.',
    price: 32,
    category: 'haircare',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Heat protector spray bottle',
  },
  {
    name: 'Deep Repair Hair Mask',
    brand: 'AUREA Haircare',
    description: 'Intensive weekly treatment with keratin and argan oil to restore strength and elasticity.',
    price: 38,
    category: 'haircare',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Hair repair mask in luxury jar',
  },

  // Body & Bath
  {
    name: 'Aromatherapy Bath Oil',
    brand: 'AUREA Body',
    description: 'A blend of lavender, ylang-ylang and jojoba oil to transform your bath into a ritual.',
    price: 34,
    category: 'body',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Bath oil in amber glass bottle with dried flowers',
  },
  {
    name: 'Shea & Honey Body Butter',
    brand: 'AUREA Body',
    description: 'Deeply nourishing whipped body butter with raw shea, manuka honey and vitamin E.',
    price: 28,
    category: 'body',
    image: 'https://images.unsplash.com/photo-1601049676869-702ea24cfd58?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Rich body butter in ceramic pot',
  },
  {
    name: 'Scalp Exfoliating Scrub',
    brand: 'AUREA Haircare',
    description: 'Sea salt and tea tree scalp scrub to remove build-up and stimulate healthy hair growth.',
    price: 24,
    category: 'body',
    image: 'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Scalp exfoliating scrub in jar',
  },

  // Wellness
  {
    name: 'Tibetan Singing Bowl',
    brand: 'Handcrafted',
    description: 'Hand-hammered bronze singing bowl from Nepal — perfect for meditation and sound healing at home.',
    price: 85,
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Tibetan singing bowl on wooden surface',
  },
  {
    name: 'Essential Oil Trio',
    brand: 'AUREA Wellness',
    description: 'Curated set of lavender, eucalyptus and bergamot essential oils in a linen travel pouch.',
    price: 42,
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Essential oil bottles in linen pouch',
  },
  {
    name: 'Mulberry Silk Eye Mask',
    brand: 'AUREA Wellness',
    description: '22-momme mulberry silk eye mask in dusty rose — gentle on skin and lashes for deeper sleep.',
    price: 22,
    category: 'wellness',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800&q=85&fit=crop&auto=format&fm=webp',
    imageAlt: 'Silk eye mask in dusty rose colour',
  },
];
