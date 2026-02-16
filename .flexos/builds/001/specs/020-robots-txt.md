---
type: spec
subtype: build-spec
title: robots.txt
phase: 5
priority: 2
---

## Files to Create/Modify
- `public/robots.txt`

## Implementation Details
Create a `robots.txt` file in the `public` directory. The file should be simple, allowing all user-agents to crawl the entire site and providing the URL to the sitemap index file.

## Dependencies
- `astro.config.mjs` (for site URL)

## Acceptance Criteria
- [ ] `robots.txt` file exists in `public/`.
- [ ] It contains `User-agent: *` and `Allow: /`.
- [ ] It contains a `Sitemap:` directive pointing to the correct `sitemap-index.xml` URL.

## Code Patterns
```
User-agent: *
Allow: /

Sitemap: https://innovationhub.example.com/sitemap-index.xml
```