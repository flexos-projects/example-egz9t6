---
type: doc
subtype: core
title: 004-database.md — Content Model
---

This content model defines the structured data required to power the website. It is designed for clarity and reusability, suitable for a Git-based CMS or a headless CMS.

### **Collection: `Services`**
*Used for the /services/[slug] pages.*

*   `title` (Text, required): e.g., "Custom Web Application Development"
*   `slug` (Slug, required): e.g., `custom-web-applications`
*   `language` (Select: DE, EN): To manage bilingual content.
*   `summary` (Text, required): Short description for service hub cards.
*   `icon` (Text): Name of an SVG icon for display.
*   `introduction` (Markdown): Benefit-oriented intro for the detail page.
*   `problem_checklist` (List of Text): Common client problems this service solves.
*   `process_steps` (List of Objects):
    *   `step_title` (Text): e.g., "1. Discovery & Strategy"
    *   `step_description` (Text): Explanation of the step.
*   `related_case_studies` (Relation): Many-to-many relationship with `CaseStudies`.
*   `seo_title` (Text): For overriding default SEO title.
*   `seo_description` (Text): For overriding default meta description.

### **Collection: `CaseStudies`**
*Used for the /work/[slug] pages.*

*   `client_name` (Text, required): e.g., "Bavarian Precision Mechanics GmbH"
*   `slug` (Slug, required): e.g., `bavarian-precision-mechanics`
*   `language` (Select: DE, EN)
*   `featured_image` (Image, required): The main hero image for the case study.
*   `client_logo` (Image)
*   `project_summary` (Text, required): One-sentence summary for the /work grid.
*   `impact_statistic` (Text): A key result, e.g., "+40% Operational Efficiency"
*   `industry` (Text): e.g., "Manufacturing"
*   `challenge` (Markdown, required): The business problem.
*   `solution` (Markdown, required): The solution delivered by InnovationHub.
*   `impact` (Markdown, required): The results and business outcomes.
*   `services_used` (Relation): Many-to-many relationship with `Services`.
*   `testimonial` (Relation): One-to-one relationship with `Testimonials`.
*   `gallery` (List of Images): Optional additional screenshots or visuals.

### **Collection: `TeamMembers`**
*Used on the /about page.*

*   `name` (Text, required): e.g., "Dr. Anna Müller"
*   `title` (Text, required): e.g., "CEO & Founder"
*   `photo` (Image, required): Professional headshot.
*   `bio` (Markdown, required): Detailed professional biography.
*   `linkedin_url` (URL): Link to their LinkedIn profile.

### **Collection: `Testimonials`**
*Reusable content for embedding throughout the site.*

*   `quote` (Textarea, required): The client's quote.
*   `author_name` (Text, required): e.g., "Hans Weber"
*   `author_title` (Text, required): e.g., "Managing Director, Bavarian Precision Mechanics GmbH"
*   `client_company` (Text)
*   `client_logo` (Image)

### **Collection: `Posts`**
*Used for the /insights/[slug] pages.*

*   `title` (Text, required): The article headline.
*   `slug` (Slug, required)
*   `language` (Select: DE, EN)
*   `publish_date` (Date, required)
*   `author` (Relation): One-to-one relationship with `TeamMembers`.
*   `summary` (Text, required): For the /insights listing page.
*   `content` (Markdown, required): The full body of the article.

### **Global Settings**
*A single entry for site-wide data.*

*   `company_name` (Text): InnovationHub Solutions GmbH
*   `contact_email` (Email)
*   `contact_phone` (Text)
*   `address` (Textarea)
*   `linkedin_url` (URL)
*   `xing_url` (URL)