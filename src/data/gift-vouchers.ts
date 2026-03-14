export interface Voucher {
  name: string;
  price: number;
  description: string;
  includes: string[];
  popular?: boolean;
}

export const vouchers: Voucher[] = [
  {
    name: 'Petal',
    price: 50,
    description: 'A thoughtful gift for a single treatment of their choice.',
    includes: [
      '£50 credit towards any treatment',
      'Presented in AUREA gift box',
      'Valid for 12 months',
    ],
  },
  {
    name: 'Bloom',
    price: 125,
    description: 'Enough for a luxurious facial or massage experience.',
    includes: [
      '£125 credit towards any treatment',
      'Presented in AUREA gift box with ribbon',
      'Complimentary herbal tea on arrival',
      'Valid for 12 months',
    ],
    popular: true,
  },
  {
    name: 'Radiance',
    price: 250,
    description: 'A generous gift covering a full spa experience or multiple treatments.',
    includes: [
      '£250 credit towards any treatment',
      'Luxury AUREA gift box with candle',
      'Complimentary glass of champagne',
      'Priority booking',
      'Valid for 12 months',
    ],
  },
  {
    name: 'Golden',
    price: 500,
    description: 'The ultimate gift — a full day of indulgence and transformation.',
    includes: [
      '£500 credit towards any treatment',
      'Premium AUREA gift box with candle & robe',
      'Full-day spa access',
      'Afternoon tea included',
      'Dedicated concierge booking',
      'Valid for 18 months',
    ],
  },
];
