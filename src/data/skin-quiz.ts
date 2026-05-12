export interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  type: 'single' | 'multiple';
  options: { label: string; value: string; tags: string[] }[];
}

export interface QuizRecommendation {
  treatmentName: string;
  reason: string;
  tags: string[];
  price: number;
  duration: string;
  href: string;
}

export const questions: QuizQuestion[] = [
  {
    id: 'concern',
    question: 'What is your primary skin concern?',
    subtitle: 'Choose the one that matters most to you right now.',
    type: 'single',
    options: [
      { label: 'Dullness & uneven tone', value: 'dullness', tags: ['brightening', 'glow', 'facial'] },
      { label: 'Fine lines & ageing', value: 'ageing', tags: ['anti-ageing', 'collagen', 'facial'] },
      { label: 'Acne & breakouts', value: 'acne', tags: ['clarifying', 'peel', 'facial'] },
      { label: 'Dryness & dehydration', value: 'dryness', tags: ['hydration', 'nourishing', 'facial'] },
      { label: 'Stress & tension', value: 'stress', tags: ['relaxation', 'massage', 'wellness'] },
      { label: 'General maintenance', value: 'maintenance', tags: ['glow', 'relaxation', 'facial'] },
    ],
  },
  {
    id: 'experience',
    question: 'How would you describe your spa experience?',
    subtitle: 'There are no wrong answers — we tailor everything to you.',
    type: 'single',
    options: [
      { label: 'First time — I\'m new to this', value: 'beginner', tags: ['gentle', 'relaxation', 'introductory'] },
      { label: 'Occasional treat — a few times a year', value: 'occasional', tags: ['signature', 'glow'] },
      { label: 'Regular self-care — I know what I like', value: 'regular', tags: ['advanced', 'clinical', 'collagen'] },
    ],
  },
  {
    id: 'time',
    question: 'How much time do you have?',
    subtitle: 'We\'ll match treatments to your schedule.',
    type: 'single',
    options: [
      { label: 'A quick refresh (under 1 hour)', value: 'short', tags: ['express', 'introductory'] },
      { label: 'A proper session (1–2 hours)', value: 'medium', tags: ['signature', 'facial', 'massage'] },
      { label: 'A full escape (half day or more)', value: 'long', tags: ['experience', 'luxury', 'retreat'] },
    ],
  },
  {
    id: 'extras',
    question: 'Anything else you\'re drawn to?',
    subtitle: 'Select all that apply.',
    type: 'multiple',
    options: [
      { label: 'Massage & bodywork', value: 'massage', tags: ['massage', 'relaxation'] },
      { label: 'Hair & scalp health', value: 'hair', tags: ['scalp', 'hair'] },
      { label: 'Holistic & sound healing', value: 'holistic', tags: ['wellness', 'sound', 'meditation'] },
      { label: 'Nails & grooming', value: 'nails', tags: ['nails', 'grooming'] },
    ],
  },
];

export const recommendations: QuizRecommendation[] = [
  {
    treatmentName: 'The AUREA Facial',
    reason: 'Our signature deep-cleansing facial addresses dullness and dehydration with enzyme exfoliation and a hydrating mask.',
    tags: ['facial', 'glow', 'signature', 'hydration', 'brightening', 'nourishing', 'gentle', 'introductory'],
    price: 135,
    duration: '75 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Hydra-Glow Infusion',
    reason: 'A multi-step hydration treatment with hyaluronic acid and vitamin C for an instant, dewy glow.',
    tags: ['facial', 'glow', 'brightening', 'hydration', 'express', 'signature'],
    price: 155,
    duration: '60 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Microneedling Collagen Boost',
    reason: 'Clinical-grade microneedling stimulates collagen production — ideal for fine lines and texture refinement.',
    tags: ['facial', 'anti-ageing', 'collagen', 'clinical', 'advanced'],
    price: 195,
    duration: '60 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Chemical Peel',
    reason: 'A medical-grade peel to resurface and brighten, with acid concentration tailored to your skin.',
    tags: ['facial', 'peel', 'clarifying', 'brightening', 'advanced', 'clinical'],
    price: 120,
    duration: '45 min',
    href: '/booking/',
  },
  {
    treatmentName: 'LED Light Therapy',
    reason: 'Non-invasive LED therapy targets acne and pigmentation without downtime — perfect for sensitive skin.',
    tags: ['facial', 'clarifying', 'gentle', 'introductory', 'express'],
    price: 85,
    duration: '45 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Hot Stone Massage',
    reason: 'Heated basalt stones melt tension and restore balance — deeply relaxing for mind and body.',
    tags: ['massage', 'relaxation', 'signature'],
    price: 145,
    duration: '90 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Deep Tissue Massage',
    reason: 'Firm-pressure massage targeting chronic tension and muscular pain for those who prefer deeper work.',
    tags: ['massage', 'relaxation', 'advanced'],
    price: 110,
    duration: '60 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Sound Bath Meditation',
    reason: 'Guided meditation with Tibetan singing bowls and crystal sound healing for deep mental restoration.',
    tags: ['wellness', 'sound', 'meditation', 'relaxation', 'gentle'],
    price: 55,
    duration: '60 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Infrared Sauna Session',
    reason: 'Private infrared sauna to detoxify, relieve pain and boost circulation — a perfect wellness reset.',
    tags: ['wellness', 'express', 'introductory', 'relaxation'],
    price: 45,
    duration: '40 min',
    href: '/booking/',
  },
  {
    treatmentName: 'Scalp Therapy & Ritual',
    reason: 'Deep scalp analysis, exfoliation and nourishing oil treatment — bliss for hair and mind.',
    tags: ['scalp', 'hair', 'relaxation', 'nourishing'],
    price: 75,
    duration: '45 min',
    href: '/booking/',
  },
  {
    treatmentName: 'The Full AUREA Experience',
    reason: 'Our half-day spa journey: sauna, full-body massage, facial, manicure and afternoon tea.',
    tags: ['experience', 'luxury', 'retreat', 'signature', 'massage', 'facial'],
    price: 495,
    duration: '4 hours',
    href: '/booking/',
  },
  {
    treatmentName: 'Couples Retreat',
    reason: 'Side-by-side massage, facial and champagne in our private couples suite — perfect for sharing.',
    tags: ['retreat', 'luxury', 'massage', 'relaxation'],
    price: 450,
    duration: '150 min',
    href: '/booking/',
  },
];
