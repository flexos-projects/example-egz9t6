---
type: spec
subtype: build-spec
title: package.json
phase: 1
priority: 1
---

## Files to Create/Modify
- `package.json`

## Implementation Details
Create the `package.json` file. It must define the project as a private package, set the type to "module", and include scripts for development, building, and previewing the Astro site. All dependencies should be added to `devDependencies` as they are build-time tools. Use the latest stable versions available at the time of creation.

## Dependencies
- None

## Acceptance Criteria
- [ ] `package.json` file is created at the project root.
- [ ] The `name` field is set to `innovationhub-solutions`.
- [ ] The file contains `dev`, `build`, `preview`, and `astro` scripts.
- [ ] All specified Astro, Tailwind, and utility packages are listed in `devDependencies`.
- [ ] Running `npm install` (or equivalent) successfully installs all dependencies without errors.

## Code Patterns
```json
{
  "name": "innovationhub-solutions",
  "type": "module",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "devDependencies": {
    "@astrojs/check": "^0.8.2",
    "@astrojs/sitemap": "^3.1.6",
    "@astrojs/tailwind": "^5.1.0",
    "@astrojs/vercel": "^7.7.2",
    "astro": "^4.12.2",
    "astro-icon": "^1.1.0",
    "tailwindcss": "^3.4.7",
    "typescript": "^5.5.4",
    "zod": "^3.23.8"
  }
}
```