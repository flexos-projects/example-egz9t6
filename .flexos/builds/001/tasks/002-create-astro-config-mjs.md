---
id: builds.001.tasks:002-create-astro-config-mjs
title: Create astro.config.mjs
description: Configure the Astro project with necessary integrations like Tailwind, sitemap, and i18n.
sequence: 2
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
The `astro.config.mjs` file is the central configuration for an Astro project. This task sets up the site's URL, integrations (Tailwind CSS, sitemap), and the crucial internationalization (i18n) settings for German and English languages, as specified in `docs/core/007-technical.md`.

## Instructions
1.  Create a new file named `astro.config.mjs` in the project root.
2.  Copy the code from the Code Templates section below into the file.
3.  Ensure the `site` URL is set correctly for the production environment.
4.  Verify that the `i18n` configuration includes `de` as the default locale and `en` as the other locale, with appropriate routing strategies.

## Files to Create/Modify
*   `astro.config.mjs` (Create)

## Code Templates
```javascript
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://innovationhub.flexos.site', // Replace with actual production domain
  integrations: [
    tailwind(), 
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de',
          en: 'en',
        },
      },
    })
  ],
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: false,
      strategy: "pathname"
    }
  }
});
```

## Acceptance Criteria
*   The `astro.config.mjs` file exists in the project root.
*   The configuration correctly imports and uses the `@astrojs/tailwind` and `@astrojs/sitemap` integrations.
*   The `i18n` object is configured for 'de' and 'en' locales.
*   Running `npm run dev` starts the Astro dev server without configuration errors.

## Rollback
*   Delete the `astro.config.mjs` file.