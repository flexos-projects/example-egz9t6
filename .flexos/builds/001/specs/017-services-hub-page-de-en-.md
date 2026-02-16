---
type: spec
subtype: build-spec
title: Services Hub Page (DE & EN)
phase: 4
priority: 3
---

## Files to Create/Modify
- `src/pages/de/leistungen/index.astro`
- `src/pages/en/services/index.astro`

## Implementation Details
Build the services hub page following `specs/002-page_002-page-services-md-services-.md`. The core of this page is a grid of `Card` components. Fetch all entries from the `services` content collection for the current locale and render each one as a card, linking to its dynamic detail page.

## Dependencies
- `BaseLayout.astro`, `Section.astro`, `Card.astro`
- `src/content/services/` content files.

## Acceptance Criteria
- [ ] Pages exist for both locales.
- [ ] The page fetches all services for the current locale.
- [ ] Each service is rendered as a `Card` with its title, summary, and a link to its detail page.