---
id: builds.001.tasks:006-define-content-schemas
title: Define Content Schemas (src/content/config.ts)
description: Implement the Astro content collection schemas based on the content model.
sequence: 6
status: pending
type: build
subtype: task
relatesTo:
  - builds.001:queue
tags:
  - task
createdAt: "2026-02-16T05:42:05.985Z"
updatedAt: "2026-02-16T05:42:05.986Z"
---

## Context
Astro's Content Collections provide type-safety and a powerful query API for content stored in Markdown files. This task involves translating the abstract content model defined in `docs/core/004-database.md` into concrete Zod schemas within the `src/content/config.ts` file. This is a critical step for ensuring all content is structured correctly and can be reliably queried by the Astro pages.

## Instructions
1.  Create a new directory `src/content`.
2.  Inside `src/content`, create a new file named `config.ts`.
3.  Copy the TypeScript code from the Code Templates section below into this new file.
4.  Review each schema (`services`, `caseStudies`, `teamMembers`, etc.) and verify that its fields and types (`z.string()`, `z.array()`, `reference()`) match the content model specification.
5.  This setup enables relationships, like linking a `post` to a `teamMember` (author) or a `caseStudy` to `services`.

## Files to Create/Modify
*   `src/content/config.ts` (Create)

## Code Templates
```typescript
import { defineCollection, z, reference } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    icon: z.string().optional(),
    problem_checklist: z.array(z.string()),
    process_steps: z.array(z.object({
      step_title: z.string(),
      step_description: z.string(),
    })),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
  }),
});

const testimonialsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        quote: z.string(),
        author_name: z.string(),
        author_title: z.string(),
        client_company: z.string().optional(),
    }),
});

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    featured_image: z.string(),
    client_logo: z.string().optional(),
    project_summary: z.string(),
    impact_statistic: z.string(),
    industry: z.string(),
    challenge: z.string(),
    solution: z.string(),
    impact: z.string(),
    services_used: z.array(reference('services')),
    testimonial: reference('testimonials').optional(),
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
    publish_date: z.date(),
    author: reference('teamMembers'),
    summary: z.string(),
    featured_image: z.string().optional(),
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

## Acceptance Criteria
*   The file `src/content/config.ts` exists and contains the Zod schemas.
*   The schemas accurately reflect the fields and relationships defined in `docs/core/004-database.md`.
*   Running `astro check` or `npm run build` validates the schemas against any content files without errors.

## Rollback
*   Delete the `src/content/config.ts` file and the `src/content` directory.