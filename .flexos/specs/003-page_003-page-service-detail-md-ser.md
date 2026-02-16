```markdown
---
type: spec
subtype: page
title: 003-page_service-detail.md — Service Detail Page Spec (Template)
route: /services/[service-slug]
layout: default
---

### Purpose

To educate a potential client on the value, process, and outcomes of a specific service, building confidence and persuading them that this service is the right solution for their problem.

### Components

1.  **Header**
    *   Standard site header.

2.  **PageHeader**
    *   Displays the Service Name as the H1.
    *   Includes a benefit-oriented introductory paragraph that speaks directly to the client's potential gains.

3.  **ProblemChecklist (Is This For You?)**
    *   A visually distinct section with a checklist format.
    *   Lists common business problems or symptoms that this service is designed to solve (e.g., "Are you struggling with outdated internal software?").

4.  **ProcessStepper (Our Approach)**
    *   A visual representation (e.g., numbered steps, timeline) of the service delivery process.
    *   Each step (e.g., 1. Discovery, 2. Design, 3. Develop, 4. Deploy) has a title and a brief description.

5.  **FeaturedCard (Related Case Study)**
    *   A prominent card or section linking to a relevant case study.
    *   Shows the case study's image, title, and a compelling snippet.
    *   Links directly to the Case Study Detail Page.

6.  **TestimonialBlock (P2 Feature)**
    *   A block featuring a compelling quote from a client who used this service.
    *   Includes the client's name, title, and company.

7.  **CTASection**
    *   A highly relevant call-to-action.
    *   Headline: "Ready to Discuss Your [Service Name] Project?".
    *   Button: "Discuss Your Project", linking to the Contact page.

8.  **Footer**
    *   Standard site footer.

### Data Requirements

*   **Page Metadata:** Dynamic SEO Title and Meta Description based on the service.
*   **Content:** All data for this page is specific to one service.
    *   `service_name` (for H1 and SEO title).
    *   `benefit_intro_paragraph`.
    *   `problem_checklist`: A list of strings (the problems).
    *   `process_steps`: A collection of steps, each with `step_number`, `title`, and `description`.
    *   `related_case_study`: Data for a single case study: `image`, `title`, `snippet`, `link_url`.
    *   `testimonial`: A single testimonial object with `quote`, `author_name`, `author_title`, `author_company`.
    *   `cta_headline` (dynamically includes service name).

### User Interactions

*   **View Proof:** User can click on the related case study to see real-world application of the service.
*   **Initiate Contact:** User can click the "Discuss Your Project" CTA to navigate to the contact page.

### States

*   This page is largely static. If a service has no related case study or testimonial, those components should not render.
```