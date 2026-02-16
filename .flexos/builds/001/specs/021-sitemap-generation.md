---
type: spec
subtype: build-spec
title: Sitemap Generation
phase: 5
priority: 3
---

## Files to Create/Modify
- None (Configuration check)

## Implementation Details
This task is to verify that the `@astrojs/sitemap` integration is correctly configured in `astro.config.mjs`. The configuration must include the `i18n` block to ensure that `hreflang` links are correctly generated for both the German and English versions of each page in the sitemap. No new files are created in this task; it is a configuration and verification step.

## Dependencies
- `astro.config.mjs`
- All pages must be created.

## Acceptance Criteria
- [ ] The `sitemap` integration in `astro.config.mjs` has the `i18n` configuration.
- [ ] Running `npm run build` generates a `sitemap-index.xml` file in the `dist/` directory.
- [ ] The generated sitemap files correctly list all pages for both `de` and `en` locales.
- [ ] The sitemap entries for a given page include `<xhtml:link>` tags pointing to their alternate language versions.