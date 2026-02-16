---
type: spec
subtype: build-spec
title: Homepage (DE & EN)
phase: 4
priority: 1
---

## Files to Create/Modify
- `src/pages/de/index.astro`
- `src/pages/en/index.astro`
- `src/content/homepage/de.json` (or similar data source)
- `src/content/homepage/en.json`

## Implementation Details
Assemble the homepage by composing the components created in Phase 3 (`Hero`, `Section`, `Card`, `CTA`). The structure must follow the `specs/001-page_001-page-index-md-homepage-spe.md`. Fetch page-specific content from a data file or directly from the relevant content collections (`services`, `case-studies`, etc.) to populate the components. Create separate but structurally identical files for German and English, referencing their respective content sources.

## Dependencies
- All Phase 2 & 3 components
- `src/content/config.ts`

## Acceptance Criteria
- [ ] `index.astro` files exist for both `de` and `en` locales.
- [ ] The pages are wrapped in `BaseLayout` and provide correct SEO props.
- [ ] The pages correctly assemble the `Hero`, `ServicesOverviewGrid`, `FeaturedWorkCard`, `TeamIntro`, and `CTA` sections.
- [ ] All text content is correctly loaded for the respective language.
- [ ] Links within the page (e.g., to service pages) are correctly prefixed with the locale (`/de/...` or `/en/...`).
- [ ] The page is fully responsive and matches the design vision.

## Code Patterns
```astro
// src/pages/en/index.astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Hero from '../../components/Hero.astro';
import Section from '../../components/Section.astro';
// ... other component imports
import { getCollection } from 'astro:content';

// Fetch content for the homepage
const services = await getCollection('services', ({ id }) => id.startsWith('en/'));
const featuredWork = await getCollection('case-studies', ({ id }) => id.startsWith('en/')); // Add a 'featured' flag
const team = await getCollection('team-members');

const seo = {
    title: "Your Digital Transformation Partner in Bavaria",
    description: "We build custom web applications and deliver expert digital strategy for Bavarian SMEs."
}
---
<BaseLayout title={seo.title} description={seo.description}>
    <Hero variant="impact" backgroundImage="/path/to/hero.jpg">
        <span slot="headline">Strategic Clarity.<br>Unwavering Results.</span>
        <span slot="subtext">Empowering leaders...</span>
        <a slot="actions" href="/en/services" class="...">Explore Services</a>
    </Hero>

    <Section id="services">
        <!-- Loop over services to create a grid of Cards -->
    </Section>

    <!-- ... other sections -->

    <CTA headline="Ready to Unlock Potential?" ... />
</BaseLayout>
```