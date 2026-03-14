export interface Testimonial {
  quote: string;
  author: string;
  treatment: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'AUREA is my sanctuary. From the moment you step through the door, everything feels intentional — the scent, the lighting, the warmth. Isabelle transformed my hair and my confidence.',
    author: 'Charlotte H.',
    treatment: 'Balayage & Highlights',
    rating: 5,
  },
  {
    quote: 'I\'ve tried facials across London and nothing comes close to Dr. Priya\'s approach. She actually listens to your skin concerns and the results speak for themselves. My skin has never looked better.',
    author: 'Rebecca M.',
    treatment: 'The AUREA Facial',
    rating: 5,
  },
  {
    quote: 'The couples retreat was the perfect anniversary gift. The private suite, the champagne, Elena\'s massage — every detail was exquisite. We left feeling completely renewed.',
    author: 'David & Sarah K.',
    treatment: 'Couples Retreat',
    rating: 5,
  },
  {
    quote: 'Marcus has a gift. He understood exactly what I wanted before I could explain it. The best haircut I\'ve ever had — I actually look forward to my appointments now.',
    author: 'Nina T.',
    treatment: 'Signature Cut & Style',
    rating: 4,
  },
  {
    quote: 'Amara\'s nail art is on another level. I showed her a vague Pinterest board and she created something even better. I get compliments every single day.',
    author: 'Zara P.',
    treatment: 'Nail Art & Gel Manicure',
    rating: 5,
  },
  {
    quote: 'The Full AUREA Experience was worth every penny. Four hours of pure bliss — sauna, massage, facial, nails, and the most beautiful afternoon tea. An absolute must for anyone who needs to reset.',
    author: 'Emma L.',
    treatment: 'The Full AUREA Experience',
    rating: 4,
  },
];
