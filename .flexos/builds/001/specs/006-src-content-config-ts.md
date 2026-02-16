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
This file defines the data shape for all content collections using Astro's built-in system. Create a schema for each collection specified in `docs/core/004-database.md`: `services`, `caseStudies`, `teamMembers`, and `posts`. Use `zod` to define the type and constraints for each field. Pay special attention to relationship fields (`reference()`) and enums for language.

## Dependencies
- `docs/core/004-database.md`
- `specs/090-database_schema-registry.md`

## Acceptance Criteria
- [ ] File exists at `src/content/config.ts`.
- [ ] It imports `defineCollection` and `z` from `astro:content`.
- [ ] A `servicesCollection` is defined with all fields from the content model.
- [ ] A `caseStudiesCollection` is defined, including a `reference('services')` for the relationship.
- [ ] A `teamMembersCollection` is defined.
- [ ] A `postsCollection` is defined, including a `reference('teamMembers')` for the author.
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
    services_used: z.array(reference('services')),
    // Testimonial can be embedded directly or referenced if a testimonial collection is added
  }),
});

const teamMembersCollection = defineCollection({
  type: 'data', // Use 'data' for YAML/JSON files
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
  }),
});

export const collections = {
  'services': servicesCollection,
  'case-studies': caseStudiesCollection,
  'team-members': teamMembersCollection,
  'posts': postsCollection,
};
```