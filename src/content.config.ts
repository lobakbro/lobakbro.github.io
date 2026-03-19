import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    author: z.string().default('Kevin Ong'),
    category: z.enum([
      'ml',
      'research',
      'projects',
      'music',
      'philosophy',
      'life',
      'roundup',
      'cybersecurity',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tech: z.array(z.string()).default([]),
    status: z.enum(['active', 'completed', 'archived', 'in-progress']).default('completed'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    repo: z.string().optional(),
    demo: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { essays, projects };
