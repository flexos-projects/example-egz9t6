```markdown
---
type: spec
subtype: page
title: 005-page_work-detail.md — Case Study Detail Page Spec (Template)
route: /work/[project-slug]
layout: default
---

### Purpose

To tell a compelling, evidence-based story of client success that builds immense trust and clearly demonstrates the value of the company's services.

### Components

1.  **Header**
    *   Standard site header.

2.  **CaseStudyHero**
    *   A visually striking hero section.
    *   Contains the `project_title`, `client_name`, and a single, powerful "Impact" statistic (e.g., "+200% Increase in Qualified Leads").

3.  **ClientOverview**
    *   A brief content section with a heading ("The Client") describing who the client is and what they do.

4.  **TheChallenge**
    *   A content section with a heading ("The Challenge") clearly describing the business problem the client was facing before the project.

5.  **TheSolution**
    *   A detailed, rich-text section with a heading ("The Solution").
    *   Walks through what InnovationHub designed and built.
    *   Should support embedded images (screenshots, mockups) and diagrams to visually explain the solution.

6.  **ImpactBlock**
    *   A section with a heading ("The Impact").
    *   Features a bulleted list of clear, quantifiable results and metrics achieved.
    *   Includes a `TestimonialBlock` featuring a powerful quote from the client about the project's success.

7.  **RelatedServices**
    *   A section that lists the core services used in this project (e.g., "Services Used: Custom Web Applications").
    *   Each service listed is a link to its respective Service Detail Page.

8.  **Footer**
    *   Standard site footer.

### Data Requirements

*   **Page Metadata:** Dynamic SEO Title and Meta Description based on the project.
*   **Content:** All data is specific to one case study.
    *   `project_title`.
    *   `client_name`.
    *   `hero_impact_statistic` (e.g., { value: "+200%", label: "Increase in Leads" }).
    *   `client_overview_content` (HTML/Markdown).
    *   `challenge_content` (HTML/Markdown).
    *   `solution_content` (Rich text with support for images).
    *   `impact_metrics`: A list of strings.
    *   `client_testimonial`: A testimonial object with `quote`, `author_name`, `author_title`.
    *   `related_services`: A list of services, each with `name` and `link_url`.

### User Interactions

*   **Cross-Navigation:** User can click on a service in the `RelatedServices` section to learn more about the specific service used in the project.

### States

*   This page is static and has no special states. Components for which data is not provided (e.g., no testimonial) should not be rendered.
```