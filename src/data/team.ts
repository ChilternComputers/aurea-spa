export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  featured?: boolean;
}

export const team: TeamMember[] = [
  {
    name: 'Isabelle Laurent',
    role: 'Founder & Creative Director',
    specialty: 'Colour & Styling',
    bio: 'With over 18 years in the industry and training at Vidal Sassoon Academy, Isabelle founded AUREA to create a space where artistry meets wellbeing. Her editorial work has been featured in Vogue, Harper\'s Bazaar, and ELLE.',
    image: '/images/team/isabelle.jpg',
    featured: true,
  },
  {
    name: 'Marcus Chen',
    role: 'Senior Stylist',
    specialty: 'Precision Cutting & Balayage',
    bio: 'A master of texture and movement, Marcus trained in Tokyo and brings a minimalist philosophy to every cut. Known for his transformative balayage work and ability to enhance natural beauty.',
    image: '/images/team/marcus.jpg',
    featured: true,
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Lead Aesthetician',
    specialty: 'Advanced Facials & Skin Science',
    bio: 'A qualified dermatology nurse with a passion for skin health, Priya combines clinical expertise with a gentle touch. She specialises in microneedling, peels, and corrective skincare programmes.',
    image: '/images/team/priya.jpg',
    featured: true,
  },
  {
    name: 'Elena Voss',
    role: 'Massage & Wellness Therapist',
    specialty: 'Hot Stone & Deep Tissue',
    bio: 'Trained in Balinese and Swedish massage traditions, Elena has spent a decade perfecting the art of therapeutic bodywork. Her intuitive approach addresses both physical tension and emotional stress.',
    image: '/images/team/elena.jpg',
  },
  {
    name: 'Amara Osei',
    role: 'Nail Artist & Technician',
    specialty: 'Nail Art & BIAB Specialist',
    bio: 'Amara\'s intricate nail art has earned her a loyal following on Instagram. From editorial designs to everyday elegance, she treats every set as a miniature canvas.',
    image: '/images/team/amara.jpg',
  },
  {
    name: 'James Whitfield',
    role: 'Senior Colourist',
    specialty: 'Corrective Colour & Highlights',
    bio: 'James is the colourist other colourists recommend. With an exceptional eye for tone and dimension, he specialises in colour correction and creating bespoke blonde formulas.',
    image: '/images/team/james.jpg',
  },
];

export const featuredTeam = team.filter((m) => m.featured);
