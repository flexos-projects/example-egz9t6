```typescript
import { defineCollection, reference, z } from 'astro:content';

/**
 * Collection: Services
 * Defines the schema for each service offered by the company.
 * Corresponds to content in `src/content/services/`
 */
const servicesCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    language: z.enum(['de', 'en']),
    summary: z.string(),
    icon: z.string(),
    problem_checklist: z.array(z.string()),
    process_steps: z.array(z.object({
      step_title: z.string(),
      step_description: z.string(),
    })),
    related_case_studies: z.array(reference('case-studies')).optional(),
    // SEO Fields
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

/**
 * Collection: Case Studies
 * Defines the schema for project showcases.
 * Corresponds to content in `src/content/case-studies/`
 */
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    client_name: z.string(),
    language: z.enum(['de', 'en']),
    featured_image: image(),
    client_logo: image().optional(),
    project_summary: z.string(),
    impact_statistic: z.string().optional(),
    industry: z.string().optional(),
    challenge: z.string(),
    solution: z.string(),
    impact: z.string(),
    services_used: z.array(reference('services')),
    testimonial: reference('testimonials').optional(),
    gallery: z.array(image()).optional(),
    // SEO Fields
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

/**
 * Collection: Team Members
 * Defines the schema for team member profiles.
 * Corresponds to content in `src/content/team-members/`
 */
const teamMembersCollection = defineCollection({
  type: 'content', // The main bio will be the entry's body.
  schema: ({ image }) => z.object({
    name: z.string(),
    title: z.string(),
    photo: image(),
    linkedin_url: z.string().url().optional(),
  }),
});

/**
 * Collection: Testimonials
 * Defines the schema for reusable client testimonials.
 * Corresponds to data in `src/content/testimonials/`
 */
const testimonialsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    quote: z.string(),
    author_name: z.string(),
    author_title: z.string(),
    client_company: z.string().optional(),
    client_logo: image().optional(),
  }),
});

/**
 * Collection: Posts (Insights Hub)
 * Defines the schema for blog articles.
 * Corresponds to content in `src/content/posts/`
 */
const postsCollection = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    language: z.enum(['de', 'en']),
    publish_date: z.date(),
    author: reference('team-members'),
    summary: z.string(),
    // SEO Fields
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

export const collections = {
  'services': servicesCollection,
  'case-studies': caseStudiesCollection,
  'team-members': teamMembersCollection,
  'testimonials': testimonialsCollection,
  'posts': postsCollection,
};
```