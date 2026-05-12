export interface ClassItem {
  name: string;
  description: string;
  instructor: string;
  duration: string;
  price: number;
  category: ClassCategory;
  image: string;
  imageAlt: string;
}

export type ClassCategory = 'yoga' | 'pilates' | 'meditation' | 'workshops';

export const classCategoryLabels: Record<ClassCategory, string> = {
  yoga: 'Yoga',
  pilates: 'Pilates',
  meditation: 'Meditation & Sound',
  workshops: 'Workshops',
};

export const classes: ClassItem[] = [
  {
    name: 'Vinyasa Flow',
    description: 'A dynamic, breath-led practice linking movement and breath to build strength, flexibility and focus. Suitable for all levels.',
    instructor: 'Elena Voss',
    duration: '60 min',
    price: 22,
    category: 'yoga',
    image: '/images/unsplash/1544367567-0f2fcb009e0b.webp',
    imageAlt: 'Vinyasa yoga flow class in a calm studio setting',
  },
  {
    name: 'Restorative Yin',
    description: 'A slow, meditative practice holding deep stretches for 3–5 minutes. Perfect for unwinding tension and calming the nervous system.',
    instructor: 'Elena Voss',
    duration: '75 min',
    price: 22,
    category: 'yoga',
    image: '/images/unsplash/1506126613408-eca07ce68773.webp',
    imageAlt: 'Restorative yin yoga with soft lighting and candles',
  },
  {
    name: 'Mat Pilates',
    description: 'Classical mat work focusing on core strength, posture and controlled movement. All equipment provided.',
    instructor: 'Isabelle Laurent',
    duration: '50 min',
    price: 20,
    category: 'pilates',
    image: '/images/unsplash/1518611012118-696072aa579a.webp',
    imageAlt: 'Mat Pilates class with natural light',
  },
  {
    name: 'Sound Bath Journey',
    description: 'Lie back as Tibetan singing bowls, crystal bowls and chimes wash over you. A deeply restorative sonic meditation.',
    instructor: 'Elena Voss',
    duration: '60 min',
    price: 28,
    category: 'meditation',
    image: '/images/unsplash/1591291621164-2c6367723315.webp',
    imageAlt: 'Sound bath meditation with singing bowls and candles',
  },
  {
    name: 'Guided Breathwork',
    description: 'Learn powerful breathing techniques to reduce anxiety, improve sleep and boost energy. Accessible for complete beginners.',
    instructor: 'Elena Voss',
    duration: '45 min',
    price: 18,
    category: 'meditation',
    image: '/images/unsplash/1508672019048-805c876b67e2.webp',
    imageAlt: 'Guided breathwork session in a serene spa environment',
  },
  {
    name: 'Skincare Masterclass',
    description: 'Dr. Priya Sharma reveals professional skincare secrets — from building a routine to understanding ingredients. Includes product samples.',
    instructor: 'Dr. Priya Sharma',
    duration: '90 min',
    price: 45,
    category: 'workshops',
    image: '/images/unsplash/1570172619644-dfd03ed5d881.webp',
    imageAlt: 'Skincare masterclass with professional products',
  },
];

export interface TimetableSlot {
  day: string;
  time: string;
  className: string;
  instructor: string;
  duration: string;
}

export const timetable: TimetableSlot[] = [
  { day: 'Monday', time: '07:00', className: 'Vinyasa Flow', instructor: 'Elena Voss', duration: '60 min' },
  { day: 'Monday', time: '18:30', className: 'Guided Breathwork', instructor: 'Elena Voss', duration: '45 min' },
  { day: 'Tuesday', time: '12:15', className: 'Mat Pilates', instructor: 'Isabelle Laurent', duration: '50 min' },
  { day: 'Tuesday', time: '19:00', className: 'Restorative Yin', instructor: 'Elena Voss', duration: '75 min' },
  { day: 'Wednesday', time: '07:00', className: 'Vinyasa Flow', instructor: 'Elena Voss', duration: '60 min' },
  { day: 'Wednesday', time: '18:30', className: 'Sound Bath Journey', instructor: 'Elena Voss', duration: '60 min' },
  { day: 'Thursday', time: '12:15', className: 'Mat Pilates', instructor: 'Isabelle Laurent', duration: '50 min' },
  { day: 'Thursday', time: '19:00', className: 'Guided Breathwork', instructor: 'Elena Voss', duration: '45 min' },
  { day: 'Friday', time: '07:00', className: 'Vinyasa Flow', instructor: 'Elena Voss', duration: '60 min' },
  { day: 'Friday', time: '18:00', className: 'Restorative Yin', instructor: 'Elena Voss', duration: '75 min' },
  { day: 'Saturday', time: '09:30', className: 'Sound Bath Journey', instructor: 'Elena Voss', duration: '60 min' },
  { day: 'Saturday', time: '11:00', className: 'Skincare Masterclass', instructor: 'Dr. Priya Sharma', duration: '90 min' },
];

export const classPacks = [
  { name: '5 Class Pack', price: 85, saving: 'Save up to £25' },
  { name: '10 Class Pack', price: 160, saving: 'Save up to £60' },
];
