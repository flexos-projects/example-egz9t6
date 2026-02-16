---
type: doc
subtype: core
title: 003-pages.md — Page Architecture
---

This sitemap is designed for a logical user experience and is optimized for search engines from the ground up. All routes shown with English first, German in parentheses.

### Core Pages

1.  **Homepage**
    *   **Route:** `/` (`/de/`)
    *   **Purpose:** To communicate the core value proposition in seconds and guide users to key areas of the site.
    *   **SEO Title:** `Your Digital Transformation Partner in Bavaria | InnovationHub Solutions` (`Ihr Partner für Digitale Transformation in Bayern | InnovationHub Solutions`)
    *   **Meta Description:** `We build custom web applications and deliver expert digital strategy for Bavarian SMEs. Partner with us to translate complex technology into tangible business growth.`
    *   **Key Content Sections:**
        *   Hero: Compelling headline ("Your Local Digital Transformation Partner for the Bavarian Mittelstand") and a clear sub-headline.
        *   Services Overview: Icon-driven grid linking to the four core services.
        *   Why Us?: Differentiator section focusing on local expertise, reliability, and partnership.
        *   Featured Work: A visually impressive card linking to one key case study.
        *   Meet the Experts: Brief intro to the founders with photos, linking to the About page.
        *   Primary CTA: "Schedule Your Free Consultation".

2.  **Services Hub**
    *   **Route:** `/services` (`/de/leistungen`)
    *   **Purpose:** To provide a clear overview of all service offerings.
    *   **SEO Title:** `Our Services: Custom Apps, Strategy, Cloud | InnovationHub Solutions`
    *   **Meta Description:** `Explore our B2B IT services, including custom web application development, digital strategy consulting, cloud migration, and e-commerce solutions.`
    *   **Key Content Sections:**
        *   Introductory paragraph.
        *   Detailed cards for each of the four main services, linking to their respective detail pages.

3.  **Service Detail Page (Template)**
    *   **Route:** `/services/[service-slug]` (e.g., `/services/custom-web-applications`)
    *   **Purpose:** To educate a potential client on the value and process of a specific service.
    *   **SEO Title:** `[Service Name] for SMEs | InnovationHub Solutions`
    *   **Meta Description:** `Learn about our [Service Name] service, designed to help Bavarian SMEs [achieve key benefit]. See our process and related work.`
    *   **Key Content Sections:**
        *   Page Title & Benefit-Oriented Intro.
        *   "Is This For You?": A checklist of common business problems this service solves.
        *   Our Approach: Step-by-step overview of their methodology (e.g., Discovery, Design, Develop, Deploy).
        *   Related Case Study: A prominent link to a relevant project.
        *   Featured Testimonial.
        *   CTA: "Discuss Your Project".

4.  **Our Work (Case Study Hub)**
    *   **Route:** `/work` (`/de/projekte`)
    *   **Purpose:** To showcase the breadth and quality of their work.
    *   **SEO Title:** `Our Work: Proven Results for Bavarian Businesses | InnovationHub Solutions`
    *   **Meta Description:** `See our portfolio of custom web apps, digital strategy projects, and cloud solutions. Real results for manufacturing, retail, and professional services.`
    *   **Key Content Sections:**
        *   Headline and introductory paragraph.
        *   Filterable grid of case study cards (filterable by Industry or Service). Each card shows the client logo, project title, and a compelling image.

5.  **Case Study Detail Page (Template)**
    *   **Route:** `/work/[project-slug]`
    *   **Purpose:** To tell a compelling story of client success that builds immense trust.
    *   **SEO Title:** `[Client Name] Case Study: [Achieved Result] | InnovationHub Solutions`
    *   **Meta Description:** `See how we helped [Client Name] solve [Business Problem] with our [Service Name], resulting in [Key Metric].`
    *   **Key Content Sections:**
        *   Hero: Project title, client name, and a single, powerful "Impact" statistic.
        *   Client Overview: Brief on who the client is.
        *   The Challenge: Clear description of the business problem.
        *   The Solution: Detailed walk-through of what InnovationHub designed and built, with screenshots and diagrams.
        *   The Impact: Bullet points with clear metrics and a compelling client testimonial.

6.  **About Us**
    *   **Route:** `/about` (`/de/ueber-uns`)
    *   **Purpose:** To build a human connection and establish the founders' credibility.
    *   **SEO Title:** `About Us: The Experts Behind InnovationHub Solutions`
    *   **Meta Description:** `Meet Dr. Anna Müller, Markus Schmidt, and Lena Meyer—the expert team dedicated to helping the Bavarian Mittelstand succeed with technology.`
    *   **Key Content Sections:**
        *   Our Story: The narrative of the company's founding and growth.
        *   Meet Our Leadership: Professional photos and detailed bios for each key person.
        *   Our Values/Philosophy: What guides their work (e.g., Partnership, Rigor, Reliability).

7.  **Insights (Blog Hub)**
    *   **Route:** `/insights` (`/de/einblicke`)
    *   **Purpose:** To host thought leadership content, drive SEO, and build authority.
    *   **SEO Title:** `Digital Strategy Insights for SMEs | InnovationHub Solutions Blog`
    *   **Meta Description:** `Expert articles and guides on custom software, cloud technology, and digital strategy from the team at InnovationHub Solutions.`
    *   **Key Content Sections:**
        *   Featured article.
        *   Chronological grid of all other articles.

8.  **Contact**
    *   **Route:** `/contact` (`/de/kontakt`)
    *   **Purpose:** The primary conversion page for initiating a project discussion.
    *   **SEO Title:** `Contact Us | Schedule a Consultation | InnovationHub Solutions`
    *   **Meta Description:** `Ready to start your digital transformation? Contact our Munich-based team to schedule a free, no-obligation consultation.`
    *   **Key Content Sections:**
        *   Headline: "Let's Build Your Solution".
        *   "Schedule a Consultation" form.
        *   Direct contact info: Email, Phone, Physical Address.
        *   Embedded map of their Munich office.

### Internal Linking Strategy
*   **Services** will link to relevant **Case Studies** and **Insights** articles.
*   **Case Studies** will link back to the **Services** used in the project.
*   **Insights** articles will link to **Services** when a specific technology or strategy is discussed.
*   **Homepage** and **About** page will link to founder bios and core service pages.