---
type: doc
subtype: core
title: 007-technical.md — Technical Architecture
---

This document outlines the technical specifications for building a high-performance, secure, and SEO-optimized website for InnovationHub Solutions GmbH.

### Core Stack
*   **Framework:** **Astro**
    *   **Rationale:** Astro's static-first architecture delivers exceptional performance (fast Core Web Vitals) and security by default. Its component-based model is ideal for building a maintainable marketing site, and its integration with UI frameworks (like React or Svelte) can be used for interactive "islands" if needed in the future.
*   **Deployment:** **Vercel**
    *   **Rationale:** Vercel offers a seamless Git-based workflow, automatic deployments, global CDN for fast load times, and serverless functions for handling forms. Its integration with Astro is first-class.

### Performance Targets
*   **Core Web Vitals:** All pages must score "Good" in Google Search Console.
*   **Lighthouse Score:** Target a score of 95+ across Performance, Accessibility, Best Practices, and SEO.
*   **Load Time:** First Contentful Paint (FCP) should be under 1 second for all key pages.

### SEO & Structured Data
*   **Meta Tags:** All pages will have unique, optimized `title` and `meta description` tags, managed through frontmatter. The `astro-seo` component will be used to automate standard tags.
*   **Structured Data (Schema.org):**
    *   `Organization` schema on all pages.
    *   `Service` schema on all service detail pages.
    *   `Article` schema for all posts in the "Insights" section.
    *   `Person` schema for team members on the "About Us" page.
*   **Sitemap:** An XML sitemap will be auto-generated at build time using `@astrojs/sitemap`.
*   **Robots.txt:** A `robots.txt` file will be configured to allow crawling of all necessary assets.
*   **Open Graph & Twitter Cards:** OG tags will be implemented for rich sharing on social media.

### Multilingual (i18n) Setup
*   **Routing:** Astro's built-in i18n routing will be used. Content will be structured in language-specific directories (e.g., `src/pages/de/`, `src/pages/en/`).
*   **`hreflang` Tags:** These will be automatically generated to signal the relationship between German and English page versions to search engines, preventing duplicate content issues.
*   **Content:** **Professional human translation is mandatory.** Machine translation is not acceptable for this project's quality standards.

### Forms & Integrations
*   **Form Handling:** The "Schedule a Consultation" form will submit its data to a **Vercel Serverless Function**. This function will validate the data and then send a formatted email notification to InnovationHub and an auto-response to the user. This avoids reliance on third-party form services.
*   **Analytics:** We will use **Vercel Analytics** for high-level, privacy-respecting traffic data. For more detailed insights, **Plausible Analytics** is recommended as a GDPR-compliant alternative to Google Analytics.
*   **Google Business Profile:** The website address and contact information will be synchronized with the company's Google Business Profile to ensure consistency.

### Asset & Content Management
*   **Image Optimization:** All images will be processed using Astro's built-in `<Image />` component. This will automate resizing, format conversion (WebP/AVIF), and lazy loading for optimal performance.
*   **Content:** Content will be managed directly in Markdown (`.md` or `.mdx`) files within the Git repository. This provides version control, and a simple editing experience, and is ideal for a tech-savvy team. For future ease of use by non-developers, a Git-based CMS like Decap CMS can be integrated.

### Accessibility (a11y)
*   The site will be built to meet WCAG 2.1 AA standards. This includes semantic HTML, proper heading structure, ARIA attributes where necessary, sufficient color contrast, and keyboard navigability. Automated accessibility checks will be part of the development process.