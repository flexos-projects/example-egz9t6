---
type: spec
subtype: feature
title: Bilingual Architecture (DE/EN)
priority: P1
---

### Description

This feature establishes the core multilingual capability of the website, allowing all content to be managed and displayed in both German (DE) and English (EN). A prominent and intuitive language switcher will be placed in the site's main header, enabling users to seamlessly toggle between the two languages. The architecture will support language-specific URLs (e.g., `/de/` and `/en/`) and ensure all content types, including pages, case studies, and blog posts, can have distinct versions for each language. This is a foundational business requirement to serve the company's entire client base.

### User Stories

*   **As an English-speaking visitor,** I want to easily switch the site's language to English from any page so that I can understand the content and evaluate the company's services.
*   **As a German-speaking visitor,** I want the site to default to German (based on my browser settings) or be easily switchable to German so that I can consume the content in my native language.
*   **As a content editor,** I want a simple interface in the CMS to create, edit, and link the German and English versions of a piece of content so that I can manage the bilingual site efficiently.
*   **As a search engine,** I want to see `hreflang` tags on every page so that I can correctly index the different language versions and show the appropriate one to users in search results.

### Acceptance Criteria

*   **GIVEN** a user is on any page of the site
    *   **WHEN** they look at the header
    *   **THEN** a language switcher showing the current language (e.g., "DE") and the alternative ("EN") is clearly visible.
*   **GIVEN** a user is on the English page `/en/services/custom-web-apps`
    *   **WHEN** they click the language switcher to select "DE"
    *   **THEN** they are redirected to the corresponding German page at `/de/services/individuelle-webanwendungen`.
*   **GIVEN** the German version of a page does not exist
    *   **WHEN** a user tries to switch to it
    *   **THEN** they are redirected to the German homepage (`/de/`) or the switcher for that language is disabled.
*   **GIVEN** a content editor is editing a page in the CMS
    *   **THEN** there is a clear mechanism to switch to, create, or link to the corresponding page in the other language.
*   **GIVEN** any page is rendered
    *   **THEN** the HTML `<head>` contains the correct `<link rel="alternate" hreflang="..." />` tags for both the English and German versions of that page.
*   **GIVEN** a user visits a non-existent URL within a language path (e.g., `/en/non-existent-page`)
    *   **THEN** they are shown a 404 Not Found page in English.

### Technical Notes

*   **CMS:** The CMS must robustly support multi-language content. For example, Craft CMS's multi-site functionality or WordPress with a plugin like WPML would be suitable.
*   **URL Structure:** A subdirectory structure (`/de/` and `/en/`) is required for clarity and SEO benefits.
*   **Routing:** The application must handle routing for the language prefixes. The root URL (`/`) should redirect to the default language, likely based on browser language headers (`Accept-Language`).
*   **SEO:** Correct implementation of `hreflang` tags is critical. This should be automated by the CMS based on the linked content. The `<html>` tag should also have the correct `lang` attribute (e.g., `lang="de"`).
*   **Asset Management:** Consider if any assets (like images with text) need to be localized. The CMS should support swapping assets on a per-language basis.