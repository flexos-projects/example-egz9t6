```markdown
---
type: doc
subtype: core
title: 003-pages.md — Page Architecture
---

This sitemap is designed for a logical user experience and is optimized for search engines from the ground up, reflecting the bilingual (German/English) architecture.

### Core Pages

1.  **Homepage**
    *   **Route (EN):** `/en/`
    *   **Route (DE):** `/de/`
    *   **Purpose:** To communicate the core value proposition in seconds and guide users to key areas of the site.
    *   **SEO Title (EN):** `Your Digital Transformation Partner in Bavaria | InnovationHub Solutions`
    *   **SEO Title (DE):** `Ihr Partner für Digitale Transformation in Bayern | InnovationHub Solutions`
    *   **Key Content Sections:** Hero, Services Overview, "Why Us?", Featured Work, Meet the Experts, Primary CTA.

2.  **Services Hub**
    *   **Route (EN):** `/en/services`
    *   **Route (DE):** `/de/leistungen`
    *   **Purpose:** To provide a clear overview of all service offerings.
    *   **SEO Title (EN):** `Our Services: Custom Apps, Strategy, Cloud | InnovationHub Solutions`
    *   **Key Content Sections:** Introductory paragraph, Detailed cards for each core service.

3.  **Service Detail Page (Template)**
    *   **Route (EN):** `/en/services/[service-slug]`
    *   **Route (DE):** `/de/leistungen/[service-slug]`
    *   **Purpose:** To educate a potential client on the value and process of a specific service.
    *   **SEO Title (EN):** `[Service Name] for SMEs | InnovationHub Solutions`
    *   **Key Content Sections:** Benefit-Oriented Intro, "Is This For You?" checklist, "Our Approach" steps, Related Case Study link, Featured Testimonial.

4.  **Our Work (Case Study Hub)**
    *   **Route (EN):** `/en/work`
    *   **Route (DE):** `/de/projekte`
    *   **Purpose:** To showcase the breadth and quality of their work.
    *   **SEO Title (EN):** `Our Work: Proven Results for Bavarian Businesses | InnovationHub Solutions`
    *   **Key Content Sections:** Headline, Filterable grid of case study cards.

5.  **Case Study Detail Page (Template)**
    *   **Route (EN):** `/en/work/[project-slug]`
    *   **Route (DE):** `/de/projekte/[project-slug]`
    *   **Purpose:** To tell a compelling story of client success that builds immense trust.
    *   **SEO Title (EN):** `[Client Name] Case Study: [Achieved Result] | InnovationHub Solutions`
    *   **Key Content Sections:** Hero with impact statistic, Client Overview, The Challenge, The Solution (with visuals), The Impact (with metrics and testimonial).

6.  **About Us**
    *   **Route (EN):** `/en/about`
    *   **Route (DE):** `/de/ueber-uns`
    *   **Purpose:** To build a human connection and establish the founders' credibility.
    *   **SEO Title (EN):** `About Us: The Experts Behind InnovationHub Solutions`
    *   **Key Content Sections:** Our Story, Meet Our Leadership (photos and bios), Our Values.

7.  **Insights (Blog Hub)**
    *   **Route (EN):** `/en/insights`
    *   **Route (DE):** `/de/einblicke`
    *   **Purpose:** To host thought leadership content, drive SEO, and build authority.
    *   **SEO Title (EN):** `Digital Strategy Insights for SMEs | InnovationHub Solutions Blog`
    *   **Key Content Sections:** Featured article, Chronological grid of all other articles.

8.  **Contact**
    *   **Route (EN):** `/en/contact`
    *   **Route (DE):** `/de/kontakt`
    *   **Purpose:** The primary conversion page for initiating a project discussion.
    *   **SEO Title (EN):** `Contact Us | Schedule a Consultation | InnovationHub Solutions`
    *   **Key Content Sections:** "Schedule a Consultation" form, Direct contact info (Email, Phone, Address), Embedded map.

### Internal Linking Strategy
*   All links must respect the current locale. A link on `/en/services` to a case study should point to `/en/work/[slug]`.
*   The language switcher in the header is responsible for linking between corresponding pages in different languages.
*   **Services** will link to relevant **Case Studies** and **Insights** articles within the same locale.
*   **Case Studies** will link back to the **Services** used in the project within the same locale.
*   **Insights** articles will link to **Services** when a specific technology or strategy is discussed.
```