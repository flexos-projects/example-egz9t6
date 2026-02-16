---
type: spec
subtype: build-spec
title: Service Detail Page (DE & EN)
phase: 4
priority: 4
---

## Files to Create/Modify
- `src/pages/de/leistungen/[slug].astro`
- `src/pages/en/services/[slug].astro`

## Implementation Details
Build the dynamic service detail page using `getStaticPaths` to generate a page for each service in the collection. The page structure must follow `specs/003-page_003-page-service-detail-md-ser.md`, displaying the service's introduction, problem checklist, process steps, and dynamically linking to related case studies.

## Dependencies
- `BaseLayout.astro`, `Section.astro`
- `src/content/services/` and `src/content/case-studies/` content files.

## Acceptance Criteria
- [ ] Dynamic pages are generated for every service in both locales.
- [ ] All content fields for a given service (checklist, process steps) are rendered correctly.
- [ ] The "Related Case Studies" section correctly queries and displays case studies that reference the current service.