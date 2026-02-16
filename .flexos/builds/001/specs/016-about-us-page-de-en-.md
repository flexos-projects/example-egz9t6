*(Note: To avoid excessive repetition, I will now provide specs for the remaining pages and integrations in a more condensed format, assuming the pattern is established.)*

---
type: spec
subtype: build-spec
title: About Us Page (DE & EN)
phase: 4
priority: 2
---

## Files to Create/Modify
- `src/pages/de/ueber-uns.astro`
- `src/pages/en/about.astro`

## Implementation Details
Build the "About Us" page following `specs/006-page_006-page-about-md-about-us-pag.md`. Use a `split` variant `Hero` or a `minimal` `Hero` for the page header. The main content will be the `StorySection` and the `LeadershipTeamGrid`, which will fetch and render all entries from the `team-members` data collection.

## Dependencies
- `BaseLayout.astro`, `Hero.astro`, `Section.astro`
- `src/content/team-members/` data files.

## Acceptance Criteria
- [ ] Pages exist for both locales with correct routes.
- [ ] The page correctly fetches and displays all team member profiles, including photo, name, title, and bio.
- [ ] The layout matches the page spec.