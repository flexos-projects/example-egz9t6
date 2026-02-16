---
id: builds.001:queue
title: Task Queue
description: Task execution order for build 001
sequence: 2
status: active
type: build
subtype: queue
relatesTo:
  - builds.001:plan
tags:
  - build
  - queue
createdAt: "2026-02-16T05:41:02.052Z"
updatedAt: "2026-02-16T05:41:02.052Z"
---

| # | Task | Phase | Dependencies | Spec | Status | Complexity |
|---|------|-------|-------------|------|--------|------------|
| 01 | Create `package.json` | 1 | - | `docs/core/007-technical.md` | pending | simple |
| 02 | Create `astro.config.mjs` | 1 | 01 | `docs/core/007-technical.md` | pending | simple |
| 03 | Create `tailwind.config.mjs` | 1 | 01 | `design/design-system.md` | pending | simple |
| 04 | Create `src/styles/global.css` | 1 | 03 | `design/patterns.md` | pending | simple |
| 05 | Create `public/favicon.svg` | 1 | - | `design/design-system.md` | pending | simple |
| 06 | Define Content Schemas (`src/content/config.ts`) | 2 | 01 | `docs/core/004-database.md` | pending | medium |
| 07 | Build SEO Component (`src/components/SEO.astro`) | 2 | 02 | `docs/core/007-technical.md` | pending | simple |
| 08 | Build Header Component (`src/components/Header.astro`) | 2 | 04 | `design/patterns.md` | pending | medium |
| 09 | Build Footer Component (`src/components/Footer.astro`) | 2 | 04 | `design/patterns.md` | pending | medium |
| 10 | Build Base Layout (`src/layouts/BaseLayout.astro`) | 2 | 04, 07, 08, 09 | `design/patterns.md` | pending | medium |
| 11 | Build Section Wrapper (`src/components/Section.astro`) | 3 | 04 | `design/patterns.md` | pending | simple |
| 12 | Build Hero Component (`src/components/Hero.astro`) | 3 | 11 | `design/patterns.md` | pending | medium |
| 13 | Build Card Component (`src/components/Card.astro`) | 3 | 04 | `design/patterns.md` | pending | simple |
| 14 | Build CTA Component (`src/components/CTA.astro`) | 3 | 11 | `design/patterns.md` | pending | simple |
| 15 | Create Homepage (`index.astro` DE/EN) | 4 | 10, 12, 13, 14 | `specs/001-page_...` | pending | medium |
| 16 | Create About Page (`about.astro` DE/EN) | 4 | 10, 06 | `specs/006-page_...` | pending | medium |
| 17 | Create Services Hub (`services/index.astro` DE/EN) | 4 | 10, 06, 13 | `specs/002-page_...` | pending | medium |
| 18 | Create Service Detail Page (`services/[slug].astro` DE/EN) | 4 | 10, 06 | `specs/003-page_...` | pending | complex |
| 19 | Create Work Hub (`work/index.astro` DE/EN) | 4 | 10, 06, 13 | `specs/004-page_...` | pending | medium |
| 20 | Create Case Study Detail Page (`work/[slug].astro` DE/EN) | 4 | 10, 06 | `specs/005-page_...` | pending | complex |
| 21 | Create Insights Hub (`insights/index.astro` DE/EN) | 4 | 10, 06, 13 | `specs/007-page_...` | pending | medium |
| 22 | Create Insight Detail Page (`insights/[slug].astro` DE/EN) | 4 | 10, 06 | `specs/007-page_...` | pending | complex |
| 23 | Create Contact Page (`contact.astro` DE/EN) | 4 | 10 | `specs/008-page_...` | pending | medium |
| 24 | Create Imprint Page (`impressum.astro` DE/EN) | 4 | 10 | `prototype/sitemap.md` | pending | simple |
| 25 | Create Privacy Page (`privacy.astro` DE/EN) | 4 | 10 | `prototype/sitemap.md` | pending | simple |
| 26 | Create Contact API Route (`api/contact.ts`) | 5 | 23 | `docs/core/007-technical.md` | pending | medium |
| 27 | Create `public/robots.txt` | 5 | 02 | `docs/core/007-technical.md` | pending | simple |
| 28 | Verify Sitemap Generation | 5 | All Pages | `docs/core/007-technical.md` | pending | simple |