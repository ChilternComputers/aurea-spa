import { defineCollection, z } from 'astro:content';

const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    category: z.enum(['skincare', 'wellness', 'hair', 'lifestyle', 'guides']),
    image: z.string(),
    imageAlt: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { journal };
