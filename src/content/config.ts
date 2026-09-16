import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    type: z.enum(['announcement', 'news', 'blog']),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    policyVersion: z.string().optional(),
    effectiveDate: z.coerce.date().optional(),
    lastUpdated: z.coerce.date().optional(),
    status: z.enum(['effective', 'counsel-review']).optional(),
  }),
});

export const collections = { blogs, docs };
