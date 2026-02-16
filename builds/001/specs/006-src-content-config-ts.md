```markdown
---
type: spec
subtype: build-spec
title: src/content/config.ts
phase: 2
priority: 1
---

## Files to Create/Modify
- `src/content/config.ts`

## Implementation Details
This file defines the data shape for all content collections using Astro's built-in system. Create a schema for each collection specified in `docs/core/004-database.md`: `services`, `caseStudies`, `teamMembers`, `posts`, `testimonials`, and `globalSettings`. Use `zod` to define the type and constraints for each field. Pay special attention to relationship fields (`reference()`) and enums for language.

## Dependencies
- `docs/core/004-database.md`

## Acceptance Criteria
- [ ] File exists at `src/content/config.ts`.
- [ ] It imports `defineCollection` and `z` from `astro:content`.
- [ ] A `servicesCollection` is defined with all fields from the content model.
- [ ] A `caseStudiesCollection` is defined, including a `reference('services')` for the relationship.
- [ ] A `teamMembersCollection` is defined.
- [ ] A `postsCollection` is defined, including a `reference('teamMembers')` for the author.
- [ ] A `testimonialsCollection` is defined as a `data` collection.
- [ ] A `globalSettingsCollection` is defined as a `data` collection.
- [ ] The file exports all collections in the `collections` object.

## Code Patterns
```typescript
import { defineCollection, z, reference } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    language: z.enum(['de', 'en']),
    summary: z.string(),
    icon: z.string(),
    introduction: z.string(),
    problem_checklist: z.array(z.string()),
    process_steps: z.array(z.object({
      step_title: z.string(),
      step_description: z.string(),
    })),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    language: z.enum(['de', 'en']),
    featured_image: z.string(),
    client_logo: z.string().optional(),
    project_summary: z.string(),
    impact_statistic: z.string().optional(),
    industry: z.string(),
    challenge: z.string(),
    solution: z.string(),
    impact: z.string(),
    services_used: z.array(reference('services')),
    testimonial: reference('testimonials').optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const teamMembersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    photo: z.string(),
    bio: z.string(),
    linkedin_url: z.string().url().optional(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    language: z.enum(['de', 'en']),
    publish_date: z.date(),
    author: reference('teamMembers'),
    summary: z.string(),
    featured_image: z.string().optional(),
  }),
});

const testimonialsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        quote: z.string(),
        author_name: z.string(),
        author_title: z.string(),
        client_company: z.string().optional(),
        client_logo: z.string().optional(),
    })
});

const globalSettingsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        company_name: z.string(),
        contact_email: z.string().email(),
        contact_phone: z.string(),
        address: z.string(),
        linkedin_url: z.string().url().optional(),
        xing_url: z.string().url().optional(),
    })
});


export const collections = {
  'services': servicesCollection,
  'case-studies': caseStudiesCollection,
  'team-members': teamMembersCollection,
  'posts': postsCollection,
  'testimonials': testimonialsCollection,
  'global-settings': globalSettingsCollection,
};
```
```