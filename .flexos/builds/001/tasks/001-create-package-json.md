---
id: builds.001.tasks:001-create-package-json
title: Create package.json
description: Initialize the project's package.json with all necessary dependencies and scripts.
sequence: 1
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
This is the first step in setting up the Astro project. A `package.json` file is required to manage dependencies and define project scripts. The dependencies are selected based on the technical architecture defined in `docs/core/007-technical.md` and the design requirements.

## Instructions
1.  Create a new file named `package.json` in the project root.
2.  Copy the contents from the Code Templates section below into this new file.
3.  Run `npm install` (or `pnpm install`, `yarn install`) in your terminal to install all the defined dependencies. This will create a `node_modules` directory and a lock file.

## Files to Create/Modify
*   `package.json` (Create)

## Code Templates
```json
{
  "name": "innovationhub-solutions",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.7.0",
    "@astrojs/sitemap": "^3.1.5",
    "@astrojs/tailwind": "^5.1.0",
    "astro": "^4.9.2",
    "astro-icon": "^1.1.0",
    "tailwindcss": "^3.4.3",
    "typescript": "^5.4.5"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.13"
  }
}
```

## Acceptance Criteria
*   The `package.json` file exists in the project root.
*   Running `npm install` completes without errors.
*   The `node_modules` directory and a lock file (e.g., `package-lock.json`) are created.

## Rollback
*   Delete the `package.json` file, the `node_modules` directory, and the generated lock file.