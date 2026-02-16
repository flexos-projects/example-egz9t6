```markdown
---
type: spec
subtype: page
title: 006-page_about.md — About Us Page Spec
route: /about
layout: default
---

### Purpose

To build a human connection, establish the founders' credibility, and communicate the company's core values, differentiating it from faceless competitors.

### Components

1.  **Header**
    *   Standard site header.

2.  **PageHeader**
    *   H1 for the page: "About Us".
    *   May include a short, mission-driven subheading.

3.  **StorySection (Our Story)**
    *   A narrative-driven content block that tells the story of the company's founding, mission, and growth.

4.  **LeadershipTeamGrid (Meet Our Leadership)**
    *   A grid or row-based layout dedicated to the key people.
    *   Each person has a `ProfileCard` containing:
        *   Professional headshot photo.
        *   Name (e.g., "Dr. Anna Müller").
        *   Title/Role.
        *   Detailed bio, including credentials and expertise.

5.  **ValuesSection (Our Values/Philosophy)**
    *   A section that lists and describes the company's core values.
    *   Could be an icon list or a simple 3-column layout (e.g., for Partnership, Rigor, Reliability).

6.  **ClientLogoBar (P2 Feature)**
    *   A simple bar displaying logos of key clients to reinforce experience and trust.

7.  **Footer**
    *   Standard site footer.

### Data Requirements

*   **Page Metadata:** SEO Title, Meta Description (EN/DE).
*   **StorySection:** `story_headline`, `story_content` (HTML/Markdown).
*   **LeadershipTeamGrid:** A collection of team members, each with `photo_url`, `name`, `title`, and `biography`.
*   **ValuesSection:** A collection of values, each with `value_name`, `value_description`, and optionally an `icon`.
*   **ClientLogoBar:** A collection of client logos, each with `logo_image` and `client_name` (alt text).

### User Interactions

*   This is primarily a content consumption page. Interactions are limited to standard navigation via the header and footer.

### States

*   This page is static and has no special states.
```