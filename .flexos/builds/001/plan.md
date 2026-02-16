---
id: builds.001:plan
title: Build 001 Plan
description: Phased implementation plan for build 001
sequence: 1
status: active
type: build
subtype: plan
relatesTo:
  - builds.001:config
tags:
  - build
  - plan
createdAt: "2026-02-16T05:28:59.899Z"
updatedAt: "2026-02-16T05:28:59.899Z"
---

This plan outlines the sequential creation of every file required to build the InnovationHub Solutions GmbH website. Each step provides the necessary context for an AI developer to generate production-quality code that adheres to the project's design system and technical architecture.

## Phase 1: Project Skeleton & Configuration

These files establish the project's foundation, dependencies, and core configurations.

#### 1. `package.json`
*   **Path**: `package.json`
*   **Purpose**: Defines project metadata and manages all dependencies for Astro, Tailwind CSS, and other integrations.
*   **Depends on**: None
*   **Key context**:
    *   `builds/001/config.md`: Use specified stack (Astro 5, Tailwind CSS, Vercel adapter, Astro Icon, etc.).
    *   `docs/core/007-technical.md`: Note dependencies like `@astrojs/sitemap`.
    *   **Action**: Use exact, latest versions for all packages. Include scripts for `dev`, `build`, and `preview`.

#### 2. `astro.config.mjs`
*   **Path**: `astro.config.mjs`
*   **Purpose**: Configures the Astro framework, including all integrations, the Vercel adapter, and the i18n routing for German/English.
*   **Depends on**: `package.json`
*   **Key context**:
    *   `builds/001/config.md`: Enable integrations listed (Tailwind, Sitemap, Vercel). Set `site` URL.
    *   `docs/core/007-technical.md`: Implement i18n configuration with `defaultLocale: 'de'`, `locales: ['de', 'en']`, and `routing: { prefixDefaultLocale: true }`.

#### 3. `tailwind.config.mjs`
*   **Path**: `tailwind.config.mjs`
*   **Purpose**: Configures Tailwind CSS with the project's specific design tokens for colors, fonts, and spacing.
*   **Depends on**: `package.json`
*   **Key context**:
    *   `design/design-system.md`: **Crucial.** Use this as the single source of truth. Translate the color palette (primary, accent, surface, semantic) and typography (Inter for headings, Lora for body) into the `theme.extend` object.
    *   `design/patterns.md`: Reference component patterns to ensure the config supports all required utilities.

#### 4. `src/styles/global.css`
*   **Path**: `src/styles/global.css`
*   **Purpose**: Imports Google Fonts, sets up Tailwind CSS directives, defines base styles, and contains any custom keyframe animations.
*   **Depends on**: `tailwind.config.mjs`
*   **Key context**:
    *   `design/design-system.md`: Import 'Inter' (weights 500, 600, 700) and 'Lora' (weight 400).
    *   `design/patterns.md`: Define the `fade-in` and `fade-in-up` keyframes for scroll-reveal and page load animations. Apply base font styles in a `@layer base` directive.

#### 5. `public/favicon.svg`
*   **Path**: `public/favicon.svg`
*   **Purpose**: Provides a simple, clean site icon for browser tabs and bookmarks.
*   **Depends on**: None
*   **Key context**:
    *   `design/design-system.md`: The icon should reflect the "Quiet Confidence" vibe. A simple monogram or abstract shape using the primary navy color is appropriate. It can be based on the logo from `prototype/pages/page.html`.

## Phase 2: Content Schema & Layout Foundation

This phase defines the content structure and creates the main layout shell that all pages will use.

#### 1. `src/content/config.ts`
*   **Path**: `src/content/config.ts`
*   **Purpose**: Defines the schemas for all Astro content collections (Services, Case Studies, Team Members, Posts). This enables type-safety and data validation.
*   **Depends on**: `package.json`
*   **Key context**:
    *   `docs/core/004-database.md`: This is the direct source of truth. Translate each collection (Services, CaseStudies, TeamMembers, Posts) into an Astro `defineCollection` schema using `zod`.
    *   `specs/090-database_schema-registry.md`: Use for detailed field types and constraints.

#### 2. `src/layouts/BaseLayout.astro`
*   **Path**: `src/layouts/BaseLayout.astro`
*   **Purpose**: The main HTML shell for all pages. It includes the `<html>`, `<head>`, and `<body>` tags, imports global styles, preloads fonts, and defines the main page structure with slots for content.
*   **Depends on**: `src/styles/global.css`, `src/components/SEO.astro`, `src/components/Header.astro`, `src/components/Footer.astro`
*   **Key context**:
    *   `docs/core/007-technical.md`: Preload fonts for Inter and Lora to prevent layout shift. Add slots for analytics scripts (Vercel, Plausible). Set `lang` attribute on `<html>` tag dynamically based on the Astro locale.
    *   `design/patterns.md`: Apply the `animate-fade-in` class to the `<main>` tag for page transitions.

#### 3. `src/components/SEO.astro`
*   **Path**: `src/components/SEO.astro`
*   **Purpose**: A reusable component to manage all SEO-related meta tags, including title, description, canonical URL, Open Graph, and Twitter Cards.
*   **Depends on**: `astro.config.mjs` (for site URL)
*   **Key context**:
    *   `docs/core/007-technical.md`: Implement all specified meta tags and structured data hints.
    *   `docs/core/003-pages.md`: Props should accept dynamic title, description, image, and `hreflang` links for i18n.

## Phase 3: Core Components

These are the reusable building blocks for constructing pages, based on the design patterns.

#### 1. `src/components/Header.astro`
*   **Path**: `src/components/Header.astro`
*   **Purpose**: Renders the site's main navigation, logo, and mobile menu. Implements the transparent-to-solid scroll behavior.
*   **Depends on**: `src/layouts/BaseLayout.astro`
*   **Key context**:
    *   `design/patterns.md`: Follow pattern `4.1. Header` and `4.2. Mobile Navigation` precisely. Use Tailwind classes from the spec.
    *   **Action**: Include a script for the scroll behavior and mobile menu toggle. The language switcher logic should generate links to the same page in the other locale.

#### 2. `src/components/Footer.astro`
*   **Path**: `src/components/Footer.astro`
*   **Purpose**: Renders the site footer with its column layout, contact info, links, and newsletter signup form.
*   **Depends on**: `src/layouts/BaseLayout.astro`
*   **Key context**:
    *   `design/patterns.md`: Implement pattern `4.3. Footer` exactly.
    *   `docs/core/004-database.md`: Fetch contact info from a `global_settings` data source (or hardcode for MVP).

#### 3. `src/components/Section.astro`
*   **Path**: `src/components/Section.astro`
*   **Purpose**: A wrapper component to create consistent page sections with correct padding, max-width, and background color variants.
*   **Depends on**: `src/layouts/BaseLayout.astro`
*   **Key context**:
    *   `design/patterns.md`: Implement pattern `1. Section Wrapper` with props for variants (standard, alternating, prominent).

#### 4. `src/components/Hero.astro`
*   **Path**: `src/components/Hero.astro`
*   **Purpose**: A flexible hero component that can render different styles (impact, split, minimal) based on props.
*   **Depends on**: `src/layouts/BaseLayout.astro`, `src/components/Section.astro`
*   **Key context**:
    *   `design/patterns.md`: Implement all three hero variants from pattern `2. Hero Variants`. Use named slots for content.

#### 5. `src/components/Card.astro`
*   **Path**: `src/components/Card.astro`
*   **Purpose**: A versatile card component for services, blog posts, and case studies.
*   **Depends on**: `src/layouts/BaseLayout.astro`
*   **Key context**:
    *   `design/patterns.md`: Implement the base styles from pattern `5. Cards`. Use named slots for image, icon, and content to support all variants.

#### 6. `src/components/CTA.astro`
*   **Path**: `src/components/CTA.astro`
*   **Purpose**: A reusable call-to-action banner to drive user conversions.
*   **Depends on**: `src/layouts/BaseLayout.astro`, `src/components/Section.astro`
*   **Key context**:
    *   `design/patterns.md`: Implement pattern `3.5. CTA Banner`.

## Phase 4: Page Construction (DE & EN)

Build the primary pages. Each `.astro` file in `src/pages/en/` will have a corresponding file in `src/pages/de/` which uses translated content but the same layout and components.

#### 1. `src/pages/en/index.astro` & `src/pages/de/index.astro`
*   **Path**: `src/pages/en/index.astro`, `src/pages/de/index.astro`
*   **Purpose**: The main homepage of the website.
*   **Depends on**: All Phase 2 & 3 components.
*   **Key context**:
    *   `specs/001-page_001-page-index-md-homepage-spe.md`: Assemble the components listed in this spec (`Hero`, `ServicesOverviewGrid`, `FeaturedWorkCard`, etc.).
    *   `content/` collections: Fetch data for services, featured work, and team intros.

#### 2. `src/pages/en/about.astro` & `src/pages/de/ueber-uns.astro`
*   **Path**: `src/pages/en/about.astro`, `src/pages/de/ueber-uns.astro`
*   **Purpose**: The "About Us" page, showcasing the company story and team.
*   **Depends on**: `src/layouts/BaseLayout.astro`, `src/content/config.ts`
*   **Key context**:
    *   `specs/006-page_006-page-about-md-about-us-pag.md`: Build the page using the specified layout and components.
    *   `content/teamMembers`: Fetch and display all team member profiles.

#### 3. `src/pages/en/services/index.astro` & `src/pages/de/leistungen/index.astro`
*   **Path**: `src/pages/en/services/index.astro`, `src/pages/de/leistungen/index.astro`
*   **Purpose**: The main hub page that lists all available services.
*   **Depends on**: `src/layouts/BaseLayout.astro`, `src/content/config.ts`
*   **Key context**:
    *   `specs/002-page_002-page-services-md-services-.md`: Implement the service card grid.
    *   `content/services`: Fetch all service entries and render them as cards linking to the detail pages.

#### 4. `src/pages/en/services/[slug].astro` & `src/pages/de/leistungen/[slug].astro`
*   **Path**: `src/pages/en/services/[slug].astro`, `src/pages/de/leistungen/[slug].astro`
*   **Purpose**: The dynamic detail page for a single service.
*   **Depends on**: `src/layouts/BaseLayout.astro`, `src/content/config.ts`
*   **Key context**:
    *   `specs/003-page_003-page-service-detail-md-ser.md`: Build the page structure with Process Stepper, Problem Checklist, and Related Case Study components.
    *   `content/services`: Use `getStaticPaths` to generate a page for each service. Fetch and display the content for the specific service.

*(...Continue this pattern for all pages listed in `builds/001/config.md`: `/work`, `/work/[slug]`, `/insights`, `/insights/[slug]`, `/contact`, `/impressum`, and `/privacy`)*

## Phase 5: Integrations & Finalization

Implement server-side logic and final site-wide configuration files.

#### 1. `src/pages/api/contact.ts`
*   **Path**: `src/pages/api/contact.ts`
*   **Purpose**: An Astro API route (Vercel serverless function) to handle contact form submissions securely.
*   **Depends on**: `src/pages/en/contact.astro`
*   **Key context**:
    *   `docs/core/007-technical.md`: The function should validate incoming data, prevent spam, and send a formatted email notification to the client. Use environment variables for email credentials.
    *   `specs/055-feature_high-trust-contact-consultatio.md`: Ensure all form fields are processed.

#### 2. `public/robots.txt`
*   **Path**: `public/robots.txt`
*   **Purpose**: Instructs search engine crawlers on which parts of the site to index.
*   **Depends on**: `astro.config.mjs` (for sitemap URL)
*   **Key context**:
    *   `docs/core/007-technical.md`: Allow all crawlers and point to the `sitemap-index.xml` file.

#### 3. `Sitemap Generation`
*   **Path**: N/A (Generated at build time)
*   **Purpose**: Creates `sitemap-index.xml` for search engines.
*   **Depends on**: All pages being created.
*   **Key context**:
    *   The `@astrojs/sitemap` integration, configured in `astro.config.mjs`, will automatically handle this. Ensure it is correctly configured to include all i18n pages.