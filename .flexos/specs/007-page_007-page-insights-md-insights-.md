```markdown
---
type: spec
subtype: page
title: 007-page_insights.md — Insights (Blog Hub) Spec
route: /insights
layout: default
---

### Purpose

To host thought leadership content that drives organic search traffic, establishes the company's authority, and provides valuable information to potential and existing clients.

### Components

1.  **Header**
    *   Standard site header.

2.  **PageHeader**
    *   H1 for the page: "Insights".
    *   Optional subheading.

3.  **FeaturedArticleCard**
    *   A large, prominent card showcasing the most recent or a specifically chosen featured article.
    *   Includes a large image, title, excerpt, author, and date.
    *   Links to the full article page.

4.  **ArticleGrid**
    *   A chronological grid of all other articles.
    *   Each item is an `ArticleCard` with a smaller image, title, and excerpt.
    *   Links to the full article page.
    *   Should support pagination if the number of articles grows large.

5.  **NewsletterSignup**
    *   A dedicated section or integrated component (likely in the footer) to encourage subscriptions.

6.  **Footer**
    *   Standard site footer.

### Data Requirements

*   **Page Metadata:** SEO Title, Meta Description (EN/DE).
*   **Article Data:** A collection of articles, sorted by date. Each article needs:
    *   `slug` (for URL).
    *   `title`.
    *   `featured_image`.
    *   `excerpt`.
    *   `author_name` (could link to bio on About page).
    *   `publish_date`.
    *   A flag `is_featured` to determine which article goes into the `FeaturedArticleCard`.

### User Interactions

*   **Read Article:** User clicks on any article card (featured or in the grid) to navigate to the full article page.
*   **Pagination:** User can navigate to older pages of articles if pagination is implemented.

### States

*   **Default:** Displays the featured article and the first page of the grid.
*   **Paginated:** Displays a different set of articles in the grid.
*   **Empty:** If no articles have been published, a message should be displayed (e.g., "Insights coming soon!").
```