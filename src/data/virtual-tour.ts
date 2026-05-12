export interface TourScene {
  id: string;
  title: string;
  image: string;
  pitch: number;
  yaw: number;
  hfov: number;
}

export interface TourRoom {
  name: string;
  description: string;
  scenes: TourScene[];
}

export const tourRooms: TourRoom[] = [
  {
    name: 'Reception & Lounge',
    description: 'Step into our calming reception area, where warm lighting and natural textures set the tone for your visit. Settle into our lounge with a complimentary herbal tea.',
    scenes: [
      {
        id: 'reception-entrance',
        title: 'Reception',
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=2048&q=85&fit=crop&auto=format',
        pitch: 0,
        yaw: 0,
        hfov: 100,
      },
      {
        id: 'reception-lounge',
        title: 'Guest Lounge',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2048&q=85&fit=crop&auto=format',
        pitch: 0,
        yaw: 0,
        hfov: 100,
      },
    ],
  },
  {
    name: 'Treatment Suite',
    description: 'Our private treatment rooms are sanctuaries of calm — each designed with soft candlelight, heated beds and soundproofing for complete tranquillity.',
    scenes: [
      {
        id: 'treatment-room',
        title: 'Treatment Room',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=2048&q=85&fit=crop&auto=format',
        pitch: 0,
        yaw: 0,
        hfov: 100,
      },
    ],
  },
  {
    name: 'Hair & Colour Studio',
    description: 'Flooded with natural light and equipped with the finest tools, our styling stations are where colour artistry and precision cutting come to life.',
    scenes: [
      {
        id: 'hair-studio',
        title: 'Styling Station',
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=2048&q=85&fit=crop&auto=format',
        pitch: 0,
        yaw: 0,
        hfov: 100,
      },
    ],
  },
  {
    name: 'Wellness Zone',
    description: 'Home to our infrared sauna, sound bath space and meditation room — a dedicated wing for holistic restoration.',
    scenes: [
      {
        id: 'wellness-sauna',
        title: 'Infrared Sauna',
        image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=2048&q=85&fit=crop&auto=format',
        pitch: 0,
        yaw: 0,
        hfov: 100,
      },
      {
        id: 'wellness-meditation',
        title: 'Meditation Room',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=2048&q=85&fit=crop&auto=format',
        pitch: 0,
        yaw: 0,
        hfov: 100,
      },
    ],
  },
];
