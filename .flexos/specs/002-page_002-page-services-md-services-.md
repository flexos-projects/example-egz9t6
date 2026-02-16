```markdown
---
type: spec
subtype: page
title: 002-page_services.md — Services Hub Spec
route: /services
layout: default
---

### Purpose

To provide a clear, scannable overview of all service offerings, acting as a gateway for users to dive deeper into the solutions that meet their specific needs.

### Components

1.  **Header**
    *   Standard site header with navigation and language toggle.

2.  **PageHeader**
    *   Displays the H1 for the page: "Our Services".
    *   Includes a brief introductory paragraph explaining the company's approach to service delivery.

3.  **ServiceCardGrid**
    *   A grid layout displaying a card for each of the four main services.
    *   Each card is more detailed than on the homepage, containing:
        *   A representative image or icon.
        *   Service Title (e.g., "Custom Web Applications").
        *   A paragraph describing the service and its primary benefits.
        *   A "Learn More" link/button that navigates to the specific Service Detail Page.

4.  **CTASection**
    *   A call-to-action section, possibly repurposed from the homepage, encouraging users to get in touch. E.g., "Have a project in mind? Let's talk."

5.  **Footer**
    *   Standard site footer.

### Data Requirements

*   **Page Metadata:** SEO Title, Meta Description (EN/DE).
*   **PageHeader:** `page_title`, `intro_paragraph`.
*   **ServiceCardGrid:** A collection of services, each with `image`, `title`, `description`, and `link_url` (to the detail page).
*   **CTASection:** `headline`, `button_text`, `button_url`.

### User Interactions

*   **Drill-Down:** The primary interaction is for the user to click on a "Learn More" button on a service card to navigate to the detailed page for that service.
*   **Contact:** User can click the CTA button to navigate to the contact page.

### States

*   This page is largely static and is unlikely to have unique states beyond standard link `:hover` effects.
```