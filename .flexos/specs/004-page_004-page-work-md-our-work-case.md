```markdown
---
type: spec
subtype: page
title: 004-page_work.md — Our Work (Case Study Hub) Spec
route: /work
layout: default
---

### Purpose

To showcase the breadth, quality, and proven results of their work, allowing potential clients to find projects relevant to their own industry or challenges.

### Components

1.  **Header**
    *   Standard site header.

2.  **PageHeader**
    *   Displays the H1 for the page: "Our Work".
    *   Includes a brief introductory paragraph setting the stage for the portfolio.

3.  **FilterControls**
    *   A set of UI controls (e.g., dropdowns, buttons) allowing users to filter the grid.
    *   Filters available: "By Industry", "By Service".
    *   An "All" or "Reset" option should be present.

4.  **CaseStudyGrid**
    *   A responsive grid that displays all case studies.
    *   Each item in the grid is a `CaseStudyCard` component.
    *   Each card shows the client logo, project title, and a compelling project image.
    *   Each card links to its respective Case Study Detail Page.
    *   The grid's content is updated by the `FilterControls`.

5.  **Footer**
    *   Standard site footer.

### Data Requirements

*   **Page Metadata:** SEO Title, Meta Description (EN/DE).
*   **PageHeader:** `page_title`, `intro_paragraph`.
*   **FilterControls:** Two lists of strings: `industries`, `services`.
*   **CaseStudyGrid:** A collection of all case study projects. Each project needs:
    *   `project_slug` (for the URL).
    *   `project_title`.
    *   `client_logo_url`.
    *   `featured_image_url`.
    *   `associated_industry` (for filtering).
    *   `associated_service` (for filtering).

### User Interactions

*   **Filtering:** User selects an option from one of the filter controls. The `CaseStudyGrid` updates to show only the projects that match the selected criteria.
*   **View Project:** User clicks on a `CaseStudyCard` to navigate to the detail page for that project.
*   **Reset Filter:** User can reset the filter to view all projects again.

### States

*   **Default:** All case studies are visible.
*   **Filtered:** The grid displays a subset of case studies.
*   **Loading:** (Optional, for client-side filtering) A loading spinner or skeleton screen is shown while the grid content is being updated after a filter is applied.
*   **Empty:** A message is displayed if no case studies match the selected filter criteria (e.g., "No projects found for this filter. Please try another.").
```