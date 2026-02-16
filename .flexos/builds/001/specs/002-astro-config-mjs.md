---
type: spec
subtype: build-spec
title: astro.config.mjs
phase: 1
priority: 2
---

## Files to Create/Modify
- `astro.config.mjs`

## Implementation Details
Create the main Astro configuration file. This file will import the necessary integrations (Tailwind, Sitemap, Vercel adapter) and configure them. The most critical part is setting up the i18n functionality for German and English locales, ensuring German is the default and that the language code is prefixed to all routes.

## Dependencies
- `package.json`

## Acceptance Criteria
- [ ] `astro.config.mjs` file is created at the project root.
- [ ] The file imports `defineConfig` from `astro/config`.
- [ ] It correctly configures and includes `tailwind`, `sitemap`, and `vercel` integrations.
- [ ] The `site` property is set to the production URL (e.g., `https://innovationhub.example.com`).
- [ ] The `i18n` object is configured with `de` as `defaultLocale` and `prefixDefaultLocale: true`.

## Code Patterns
```javascript
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://innovationhub.example.com', // Replace with actual production domain
  integrations: [
    tailwind(), 
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
    }), 
    vercel()
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});
```