export const SITE = {
  name: 'AUREA',
  tagline: 'Luxury Spa & Salon',
  description: 'AUREA is a luxury full-service spa and salon offering expert hair, beauty, nails, facials, massage and wellness treatments in an intimate, nature-inspired setting.',
  url: 'https://aurea-spa.pages.dev',
  phone: '020 7946 0321',
  email: 'hello@aureaspa.co.uk',
  address: {
    street: '14 Blossom Lane',
    area: 'Marylebone',
    city: 'London',
    postcode: 'W1U 3AP',
    full: '14 Blossom Lane, Marylebone, London W1U 3AP',
  },
  hours: {
    weekday: { open: '09:00', close: '20:00', label: 'Monday – Friday' },
    saturday: { open: '09:00', close: '18:00', label: 'Saturday' },
    sunday: { open: '10:00', close: '17:00', label: 'Sunday' },
  },
  social: {
    instagram: 'https://instagram.com/aureaspa',
    facebook: 'https://facebook.com/aureaspa',
    tiktok: 'https://tiktok.com/@aureaspa',
  },
} as const;

export const UI = {
  carouselInterval: 8000,
  navScrollThreshold: 60,
  navHideThreshold: 300,
} as const;
