export interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: number;
  category: TreatmentCategory;
  featured?: boolean;
  image?: string;
}

export type TreatmentCategory = 'hair' | 'face' | 'body' | 'nails' | 'wellness';

export const categoryLabels: Record<TreatmentCategory, string> = {
  hair: 'Hair',
  face: 'Face',
  body: 'Body',
  nails: 'Nails',
  wellness: 'Wellness',
};

export const treatments: Treatment[] = [
  // Hair
  {
    name: 'Signature Cut & Style',
    description: 'Consultation, precision cut and blow-dry tailored to your hair type and lifestyle.',
    duration: '60 min',
    price: 95,
    category: 'hair',
    featured: true,
  },
  {
    name: 'Colour Artistry',
    description: 'Full-head colour with bespoke shade blending using ammonia-free formulas.',
    duration: '120 min',
    price: 180,
    category: 'hair',
  },
  {
    name: 'Balayage & Highlights',
    description: 'Hand-painted balayage or foil highlights for natural, sun-kissed dimension.',
    duration: '150 min',
    price: 240,
    category: 'hair',
    featured: true,
  },
  {
    name: 'Keratin Smoothing',
    description: 'Deep keratin treatment to eliminate frizz and restore mirror-like shine for up to 12 weeks.',
    duration: '120 min',
    price: 280,
    category: 'hair',
  },
  {
    name: 'Bridal Hair Styling',
    description: 'Trial session and wedding-day styling including updos, waves, and accessories.',
    duration: '90 min',
    price: 350,
    category: 'hair',
  },

  // Face
  {
    name: 'The AUREA Facial',
    description: 'Our signature deep-cleansing facial with enzyme exfoliation, extraction, and hydrating mask.',
    duration: '75 min',
    price: 135,
    category: 'face',
    featured: true,
  },
  {
    name: 'Microneedling Collagen Boost',
    description: 'Clinical-grade microneedling to stimulate collagen production and refine skin texture.',
    duration: '60 min',
    price: 195,
    category: 'face',
  },
  {
    name: 'LED Light Therapy',
    description: 'Non-invasive LED therapy targeting acne, pigmentation, and signs of ageing.',
    duration: '45 min',
    price: 85,
    category: 'face',
  },
  {
    name: 'Chemical Peel',
    description: 'Medical-grade peel to resurface and brighten, with tailored acid concentration.',
    duration: '45 min',
    price: 120,
    category: 'face',
  },
  {
    name: 'Hydra-Glow Infusion',
    description: 'Multi-step hydration treatment with hyaluronic acid, vitamin C serum, and cryo-globe massage.',
    duration: '60 min',
    price: 155,
    category: 'face',
  },

  // Body
  {
    name: 'Hot Stone Massage',
    description: 'Heated basalt stones placed along meridian points to melt tension and restore balance.',
    duration: '90 min',
    price: 145,
    category: 'body',
    featured: true,
  },
  {
    name: 'Deep Tissue Massage',
    description: 'Firm-pressure massage targeting chronic tension, knots, and muscular pain.',
    duration: '60 min',
    price: 110,
    category: 'body',
  },
  {
    name: 'Aromatherapy Journey',
    description: 'Full-body massage using bespoke essential oil blends chosen for your mood and needs.',
    duration: '75 min',
    price: 125,
    category: 'body',
  },
  {
    name: 'Body Sculpting Wrap',
    description: 'Detoxifying seaweed wrap with lymphatic drainage massage to tone and firm.',
    duration: '90 min',
    price: 165,
    category: 'body',
  },
  {
    name: 'Pregnancy Massage',
    description: 'Gentle, nurturing massage designed for expectant mothers, focusing on comfort and relaxation.',
    duration: '60 min',
    price: 100,
    category: 'body',
  },

  // Nails
  {
    name: 'Luxury Manicure',
    description: 'Soak, shape, cuticle care, hand massage, and polish with premium lacquer.',
    duration: '45 min',
    price: 55,
    category: 'nails',
  },
  {
    name: 'Gel Manicure',
    description: 'Long-lasting gel colour application with nail prep, cuticle work, and hand massage.',
    duration: '50 min',
    price: 45,
    category: 'nails',
  },
  {
    name: 'Spa Pedicure',
    description: 'Foot soak, exfoliation, callus treatment, massage, and polish in our throne chairs.',
    duration: '60 min',
    price: 65,
    category: 'nails',
  },
  {
    name: 'Nail Art',
    description: 'Bespoke hand-painted nail art designs, from minimal to editorial.',
    duration: '30 min',
    price: 25,
    category: 'nails',
  },
  {
    name: 'BIAB Overlay',
    description: 'Builder-in-a-bottle overlay for natural nail strength and a flawless finish.',
    duration: '60 min',
    price: 55,
    category: 'nails',
  },

  // Wellness
  {
    name: 'Infrared Sauna Session',
    description: 'Private infrared sauna to detoxify, relieve pain, and boost circulation.',
    duration: '40 min',
    price: 45,
    category: 'wellness',
  },
  {
    name: 'Sound Bath Meditation',
    description: 'Guided meditation with Tibetan singing bowls and crystal sound healing.',
    duration: '60 min',
    price: 55,
    category: 'wellness',
  },
  {
    name: 'Scalp Therapy & Ritual',
    description: 'Deep scalp analysis, exfoliation, massage, and nourishing oil treatment.',
    duration: '45 min',
    price: 75,
    category: 'wellness',
  },
  {
    name: 'The Full AUREA Experience',
    description: 'Half-day spa journey: sauna, full-body massage, facial, manicure, and afternoon tea.',
    duration: '4 hours',
    price: 495,
    category: 'wellness',
    featured: true,
  },
  {
    name: 'Couples Retreat',
    description: 'Side-by-side massage, facial, and champagne in our private couples suite.',
    duration: '150 min',
    price: 450,
    category: 'wellness',
  },
];

export const featuredTreatments = treatments.filter((t) => t.featured);
