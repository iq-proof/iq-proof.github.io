import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Post content schema.
 *
 * Each post lives at src/content/posts/<slug>.(md|mdx) with frontmatter
 * validated against the Zod schema below.
 *
 * Category is a strict enum; tags are free-form kebab-case.
 * Series groups related posts under /series/<series-slug>.
 * Difficulty is displayed as a badge (beginner | intermediate | advanced).
 */
const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(120),
      description: z.string().min(1).max(240),

      // Dates — YAML dates become JS Date objects
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      // Taxonomy
      category: z.enum(['dev', 'ai', 'agent']),
      tags: z.array(z.string()).default([]),

      // Optional series membership
      series: z
        .object({
          slug: z.string(),
          title: z.string(),
          order: z.number().int().positive(),
        })
        .optional(),

      // Reader guidance
      difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),

      // Optional hero image (OG image falls back to auto-generated if absent)
      heroImage: image().optional(),
      heroAlt: z.string().optional(),

      // Publication flags
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }),
});

export const collections = { posts };
