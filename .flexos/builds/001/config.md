---
id: builds.001:config
title: Build 001 Configuration
description: Tech stack, scope, and constraints for build 001
sequence: 0
status: active
type: build
subtype: config
relatesTo:
  - docs/core/007-technical.md
tags:
  - build
  - config
createdAt: "2026-02-16T05:28:20.845Z"
updatedAt: "2026-02-16T05:28:20.845Z"
---

## Stack (Fixed)
- **Framework**: Astro 5 (static site generation, content collections)
- **Styling**: Tailwind CSS 4 (via JIT mode with custom config from design system)
- **Deployment**: Vercel (static hosting, serverless functions)
- **Images**: Astro Image / Sharp for optimization (responsive, WebP/AVIF, lazy loading)
- **Icons**: Astro Icon (using a lightweight SVG set, e.g., Lucide or Heroicons)
- **SEO**: @astrojs/sitemap + custom meta components (for `title`, `meta description`, Open Graph, Twitter Cards)

## Integrations Needed
Based on the project specs, identify what extras this site needs:
- [x] Contact form handling (Vercel serverless function for email notification)
- [x] Google Maps / OpenStreetMap embed (for contact page)
- [x] Newsletter signup (Vercel function → email service like Mailchimp)
- [ ] Calendar/booking (Calendly embed, Cal.com, or custom) - *P3 feature, not needed for MVP.*
- [ ] E-commerce (Stripe checkout, WooCommerce API, Shopify Storefront) - *Not applicable, service-based business.*
- [ ] Client portal / login area - *Not in MVP scope.*
- [x] Blog with RSS feed (Insights Hub)
- [x] Multilingual (i18n routing — de/en, with `hreflang` tags)
- [x] Analytics (Vercel Analytics + Plausible recommended for GDPR compliance)
- [x] Cookie consent (GDPR required for EU/DACH region)
- [x] Schema.org structured data (Organization, Service, Article, Person)

## Pages to Build
List every page from the sitemap with its Astro file path (src/pages/...).
Mark build priority: P1 (MVP launch), P2 (week 1 post-launch), P3 (future).

- `src/pages/index.astro`: Homepage (P1)
- `src/pages/services/index.astro`: Services Hub (P1)
- `src/pages/services/[slug].astro`: Service Detail Page (Template) (P1)
- `src/pages/work/index.astro`: Our Work (Case Study Hub) (P1)
- `src/pages/work/[slug].astro`: Case Study Detail Page (Template) (P1)
- `src/pages/about.astro`: About Us (P1)
- `src/pages/insights/index.astro`: Insights (Blog Hub) (P1)
- `src/pages/insights/[slug].astro`: Insight Article Detail (Template) (P1)
- `src/pages/contact.astro`: Contact Us (P1)
- `src/pages/impressum.astro`: Imprint (P1)
- `src/pages/privacy.astro`: Privacy Policy (P1)

## Performance Targets
- Lighthouse: 90+ across all categories
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Total page weight: < 500KB per page (excluding images)
- No layout shift from font loading (use `font-display: swap` + preload links for Inter and Lora)

## Content Requirements
What content is READY (from research/imports) vs. what needs to be WRITTEN?

**Ready Content:**
- Company name, location, core services, key people, and general business facts (`imports/domain-research/synthesis.md`, `identity.md`).
- High-level vision and business goals (`docs/core/001-vision.md`).
- Content structure and models for Services, Case Studies, Team Members, Testimonials, Posts (`docs/core/004-database.md`, `specs/090-database_schema-registry.md`).
- Foundational design system (colors, typography, spacing) as tokens (`design/design-system.md`).
- Existing Google Reviews and a Yelp testimonial, which can be curated for social proof (`imports/research.md`).

**Needs to be Written/Created (High Priority):**
- **Visual Portfolio:** All case study text content, client project images, UI mockups, diagrams. This is the **most critical gap** identified.
- **Client Testimonials:** Collection and writing of compelling quotes, ideally with client logos/photos.
- **Team Photos & Bios:** Professional headshots and detailed biographies for Dr. Anna Müller, Markus Schmidt, and Lena Meyer.
- **Thought Leadership:** Initial set of 3-5 blog articles for the "Insights" hub.
- **Page Copy:** Full, benefit-oriented copy for all core pages (Homepage, Services, About Us, Contact, Legal pages).
- **Client Logos:** Collect and prepare client logos for the logo bar component.
- **Hero & General Imagery:** High-quality, authentic photography (architecture, office collaboration) to reflect the brand's "Quiet Confidence."

## Build Constraints
- No JavaScript frameworks (no React, Vue) — Astro components only. Interactive elements must use vanilla JavaScript or Astro Islands where strictly necessary.
- CSS via Tailwind utility classes — no custom CSS files except global styling definitions (e.g., for base `font-family` or keyframes) and the `tokens.css` file.
- All images optimized via Astro Image for performance and responsive delivery.
- Semantic HTML throughout (proper heading hierarchy, landmark roles, ARIA attributes where needed) to ensure WCAG 2.1 AA accessibility standards are met.
- Content managed primarily in Markdown/MDX files for version control and editor experience.