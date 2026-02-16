---
type: spec
subtype: page
title: 001-page_index.md — Homepage Spec
route: /
layout: default
---

### Purpose

To communicate the core value proposition in seconds and guide users to key areas of the site. It serves as the primary entry point, building immediate trust and establishing expertise.

### Components

1.  **Header**
    *   Contains the company logo, primary navigation (`Services`, `Our Work`, `About`, `Insights`, `Contact`), and the `LanguageToggle` component (EN/DE).

2.  **Hero**
    *   A full-width section with a background image or subtle graphic.
    *   Displays a compelling H1 headline ("Your Local Digital Transformation Partner for the Bavarian Mittelstand").
    *   Includes a clear sub-headline elaborating on the value proposition.

3.  **ServicesOverviewGrid**
    *   An icon-driven grid of 4 cards.
    *   Each card represents a core service, with an icon, service title, and a brief description.
    *   Each card links to its corresponding Service Detail Page.

4.  **DifferentiatorSection (Why Us?)**
    *   A content section with 3 columns or featurettes.
    *   Each featurette focuses on a key differentiator (e.g., Local Expertise, Reliability, Partnership) with a heading and short paragraph.

5.  **FeaturedWorkCard**
    *   A single, visually impressive card.
    *   Displays a project image, client name, and project title for a key case study.
    *   Links directly to the full Case Study Detail Page.

6.  **TeamIntro (Meet the Experts)**
    *   A section with photos of the founders.
    *   Each photo is accompanied by the person's name and title.
    *   A brief introductory paragraph about the team.
    *   A link/button to the full "About Us" page.

7.  **ClientLogoBar (P2 Feature)**
    *   A simple, scrolling or static bar displaying logos of key clients to build social proof.

8.  **CTASection**
    *   A prominent, high-contrast section.
    *   Contains a clear call-to-action headline and a button with the text "Schedule Your Free Consultation".
    *   Links to the Contact page.

9.  **Footer**
    *   Includes contact information, social media links, navigation links, and a `NewsletterSignup` form (P2 Feature).

### Data Requirements

*   **Page Metadata:** SEO Title, Meta Description (for both EN and DE).
*   **Hero:** `headline`, `sub_headline`.
*   **ServicesOverviewGrid:** A collection of 4 services, each with `icon`, `title`, `short_description`, and `link_url`.
*   **DifferentiatorSection:** A collection of 3 differentiators, each with `title` and `description`.
*   **FeaturedWorkCard:** Data for a single case study: `project_image`, `client_name`, `project_title`, `link_url`.
*   **TeamIntro:** A collection of founders, each with `photo`, `name`, `title`. Also needs an `intro_paragraph` and a `link_to_about_page`.
*   **ClientLogoBar:** A collection of client logos, each with `logo_image` and `client_name` (alt text).
*   **CTASection:** `headline`, `button_text`, `button_url`.
*   **NewsletterSignup:** `form_endpoint`, `placeholder_text`, `submit_button_text`.

### User Interactions

*   **Navigation:** User can click on any link in the Header or Footer to navigate the site.
*   **Language Toggle:** User can switch between English and German site versions.
*   **Service Selection:** User can click on any service card to navigate to its detail page.
*   **View Work:** User can click the featured case study to view its details.
*   **View Team:** User can click the link to the About page.
*   **CTA Click:** User can click the primary CTA button to go to the Contact page.
*   **Newsletter Signup:** User can enter their email and submit the form.

### States

*   **Newsletter Form:**
    *   **Default:** Input field is ready for entry.
    *   **Submitting:** An indicator (e.g., spinner) shows the form is processing.
    *   **Success:** A success message is displayed ("Thank you for subscribing!").
    *   **Error:** An error message is displayed if the email is invalid or the submission fails.
```