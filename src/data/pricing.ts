export interface PriceItem {
  name: string;
  duration: string;
  price: number;
}

export interface PricingCategory {
  category: string;
  items: PriceItem[];
}

export interface SpaPackage {
  name: string;
  description: string;
  includes: string[];
  duration: string;
  price: number;
}

export const pricingMenu: PricingCategory[] = [
  {
    category: 'Hair',
    items: [
      { name: 'Signature Cut & Style', duration: '60 min', price: 95 },
      { name: 'Blow-Dry & Finish', duration: '40 min', price: 55 },
      { name: 'Full Colour', duration: '120 min', price: 180 },
      { name: 'Balayage & Highlights', duration: '150 min', price: 240 },
      { name: 'Keratin Smoothing', duration: '120 min', price: 280 },
      { name: 'Bridal Hair (incl. trial)', duration: '90 min', price: 350 },
      { name: 'Colour Correction', duration: 'Consultation', price: 300 },
    ],
  },
  {
    category: 'Face',
    items: [
      { name: 'The AUREA Facial', duration: '75 min', price: 135 },
      { name: 'Microneedling', duration: '60 min', price: 195 },
      { name: 'LED Light Therapy', duration: '45 min', price: 85 },
      { name: 'Chemical Peel', duration: '45 min', price: 120 },
      { name: 'Hydra-Glow Infusion', duration: '60 min', price: 155 },
      { name: 'Express Glow Facial', duration: '30 min', price: 75 },
    ],
  },
  {
    category: 'Body',
    items: [
      { name: 'Hot Stone Massage', duration: '90 min', price: 145 },
      { name: 'Deep Tissue Massage', duration: '60 min', price: 110 },
      { name: 'Aromatherapy Journey', duration: '75 min', price: 125 },
      { name: 'Body Sculpting Wrap', duration: '90 min', price: 165 },
      { name: 'Pregnancy Massage', duration: '60 min', price: 100 },
      { name: 'Back, Neck & Shoulders', duration: '30 min', price: 60 },
    ],
  },
  {
    category: 'Nails',
    items: [
      { name: 'Luxury Manicure', duration: '45 min', price: 55 },
      { name: 'Gel Manicure', duration: '50 min', price: 45 },
      { name: 'Spa Pedicure', duration: '60 min', price: 65 },
      { name: 'Gel Pedicure', duration: '55 min', price: 50 },
      { name: 'BIAB Overlay', duration: '60 min', price: 55 },
      { name: 'Nail Art (add-on)', duration: '30 min', price: 25 },
    ],
  },
  {
    category: 'Wellness',
    items: [
      { name: 'Infrared Sauna', duration: '40 min', price: 45 },
      { name: 'Sound Bath Meditation', duration: '60 min', price: 55 },
      { name: 'Scalp Therapy & Ritual', duration: '45 min', price: 75 },
    ],
  },
];

export const spaPackages: SpaPackage[] = [
  {
    name: 'The Golden Hour',
    description: 'An indulgent afternoon of relaxation and renewal.',
    includes: ['Aromatherapy Massage', 'The AUREA Facial', 'Herbal Tea & Petit Fours'],
    duration: '2.5 hours',
    price: 225,
  },
  {
    name: 'The Full AUREA Experience',
    description: 'Our signature half-day journey through every dimension of wellbeing.',
    includes: ['Infrared Sauna', 'Full-Body Massage', 'Signature Facial', 'Luxury Manicure', 'Afternoon Tea'],
    duration: '4 hours',
    price: 495,
  },
  {
    name: 'Couples Retreat',
    description: 'A shared sanctuary for two, in our private suite.',
    includes: ['Side-by-Side Massage', 'Dual Facial', 'Champagne & Chocolates'],
    duration: '2.5 hours',
    price: 450,
  },
  {
    name: 'Bridal Glow Package',
    description: 'Everything you need to look and feel radiant on your big day.',
    includes: ['Bridal Hair Trial + Day', 'The AUREA Facial', 'Gel Manicure & Pedicure', 'LED Therapy Session'],
    duration: 'Multiple visits',
    price: 550,
  },
];
