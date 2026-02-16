---
type: spec
subtype: database-schema
title: Schema Registry
version: 1.0.0
---

This document provides a detailed specification for all database tables, columns, data types, and constraints, derived from the core content model.

---

### Table: `services`

Stores detailed information about services offered. Powers the `/services/[slug]` pages.

| Column Name            | Data Type          | Constraints                      | Description                                                  |
| ---------------------- | ------------------ | -------------------------------- | ------------------------------------------------------------ |
| `id`                   | `INT` / `BIGINT`   | `PRIMARY KEY`, `AUTO_INCREMENT`  | Unique identifier for each service.                          |
| `title`                | `VARCHAR(255)`     | `NOT NULL`                       | The public-facing name of the service.                       |
| `slug`                 | `VARCHAR(255)`     | `NOT NULL`, `UNIQUE`             | URL-friendly identifier for the service.                     |
| `language`             | `ENUM('DE', 'EN')` | `NOT NULL`                       | Language of the content entry (German or English).           |
| `summary`              | `TEXT`             | `NOT NULL`                       | Short description used on overview/hub pages.                |
| `icon`                 | `VARCHAR(100)`     | `NULLABLE`                       | Name of the SVG icon associated with the service.            |
| `introduction`         | `TEXT`             | `NULLABLE`                       | Benefit-oriented introductory content for the detail page.   |
| `seo_title`            | `VARCHAR(255)`     | `NULLABLE`                       | Custom SEO title for search engine results.                  |
| `seo_description`      | `TEXT`             | `NULLABLE`                       | Custom meta description for search engine results.           |
| `created_at`           | `TIMESTAMP`        | `NOT NULL`, `DEFAULT NOW()`      | Timestamp of when the record was created.                    |
| `updated_at`           | `TIMESTAMP`        | `NOT NULL`, `DEFAULT NOW()`      | Timestamp of when the record was last updated.               |

---

### Table: `service_problems`

Represents the "Problem Checklist" for a service, establishing a one-to-many relationship with the `services` table.

| Column Name    | Data Type        | Constraints                     | Description                                          |
| -------------- | ---------------- | ------------------------------- | ---------------------------------------------------- |
| `id`           | `INT` / `BIGINT` | `PRIMARY KEY`, `AUTO_INCREMENT` | Unique identifier for the checklist item.            |
| `service_id`   | `INT` / `BIGINT` | `NOT NULL`, `FOREIGN KEY`       | References `services(id)`.                           |
| `problem_text` | `TEXT`           | `NOT NULL`                      | The text of a single problem this service solves.    |
| `sort_order`   | `INT`            | `NOT NULL`, `DEFAULT 0`         | Defines the display order of the problem statements. |

---

### Table: `service_process_steps`

Represents the "Process Steps" for a service, establishing a one-to-many relationship with the `services` table.

| Column Name       | Data Type        | Constraints                     | Description                                       |
| ----------------- | ---------------- | ------------------------------- | ------------------------------------------------- |
| `id`              | `INT` / `BIGINT` | `PRIMARY KEY`, `AUTO_INCREMENT` | Unique identifier for the process step.           |
| `service_id`      | `INT` / `BIGINT` | `NOT NULL`, `FOREIGN KEY`       | References `services(id)`.                        |
| `step_title`      | `VARCHAR(255)`   | `NOT NULL`                      | The title of the process step (e.g., "1. Discovery"). |
| `step_description`| `TEXT`           | `NOT NULL`                      | A detailed explanation of the process step.       |
| `sort_order`      | `INT`            | `NOT NULL`, `DEFAULT 0`         | Defines the display order of the steps.           |

---

### Table: `case_studies`

Stores project showcases. Powers the `/work/[slug]` pages.

| Column Name         | Data Type          | Constraints                     | Description                                                  |
| ------------------- | ------------------ | ------------------------------- | ------------------------------------------------------------ |
| `id`                | `INT` / `BIGINT`   | `PRIMARY KEY`, `AUTO_INCREMENT` | Unique identifier for each case study.                       |
| `client_name`       | `VARCHAR(255)`     | `NOT NULL`                      | The name of the client for the project.                      |
| `slug`              | `VARCHAR(255)`     | `NOT NULL`, `UNIQUE`            | URL-friendly identifier for the case study.                  |
| `language`          | `ENUM('DE', 'EN')` | `NOT NULL`                      | Language of the content entry.                               |
| `featured_image`    | `VARCHAR(255)`     | `NOT NULL`                      | URL or path to the main hero image.                          |
| `client_logo`       | `VARCHAR(255)`     | `NULLABLE`                      | URL or path to the client's logo.                            |
| `project_summary`   | `TEXT`             | `NOT NULL`                      | A concise summary for grid views and previews.               |
| `impact_statistic`  | `VARCHAR(255)`     | `NULLABLE`                      | A key, quantifiable result (e.g., "+40% Efficiency").        |
| `industry`          | `VARCHAR(255)`     | `NULLABLE`                      | The client's industry sector.                                |
| `challenge`         | `TEXT`             | `NOT NULL`                      | Markdown content describing the client's problem.            |
| `solution`          | `TEXT`             | `NOT NULL`                      | Markdown content describing the solution provided.           |
| `impact`            | `TEXT`             | `NOT NULL`                      | Markdown content describing the results and business outcomes. |
| `testimonial_id`    | `INT` / `BIGINT`   | `NULLABLE`, `FOREIGN KEY`, `UNIQUE` | One-to-one relationship with a testimonial. References `testimonials(id)`. |
| `created_at`        | `TIMESTAMP`        | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was created.                    |
| `updated_at`        | `TIMESTAMP`        | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was last updated.               |

---

### Table: `case_study_gallery_images`

Stores gallery images for a case study, establishing a one-to-many relationship.

| Column Name     | Data Type        | Constraints                     | Description                                    |
| --------------- | ---------------- | ------------------------------- | ---------------------------------------------- |
| `id`            | `INT` / `BIGINT` | `PRIMARY KEY`, `AUTO_INCREMENT` | Unique identifier for the gallery image entry. |
| `case_study_id` | `INT` / `BIGINT` | `NOT NULL`, `FOREIGN KEY`       | References `case_studies(id)`.                 |
| `image_url`     | `VARCHAR(255)`   | `NOT NULL`                      | URL or path to the gallery image.              |
| `sort_order`    | `INT`            | `NOT NULL`, `DEFAULT 0`         | Defines the display order of the images.       |

---

### Table: `team_members`

Stores information about individual team members.

| Column Name    | Data Type        | Constraints                     | Description                                   |
| -------------- | ---------------- | ------------------------------- | --------------------------------------------- |
| `id`           | `INT` / `BIGINT` | `PRIMARY KEY`, `AUTO_INCREMENT` | Unique identifier for each team member.       |
| `name`         | `VARCHAR(255)`   | `NOT NULL`                      | The full name of the team member.             |
| `title`        | `VARCHAR(255)`   | `NOT NULL`                      | The job title of the team member.             |
| `photo`        | `VARCHAR(255)`   | `NOT NULL`                      | URL or path to the member's headshot.         |
| `bio`          | `TEXT`           | `NOT NULL`                      | Markdown content for the professional biography. |
| `linkedin_url` | `VARCHAR(255)`   | `NULLABLE`                      | Full URL to the member's LinkedIn profile.    |
| `created_at`   | `TIMESTAMP`      | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was created.     |
| `updated_at`   | `TIMESTAMP`      | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was last updated.|

---

### Table: `testimonials`

Stores client quotes and attributions for reuse across the site.

| Column Name     | Data Type        | Constraints                     | Description                                          |
| --------------- | ---------------- | ------------------------------- | ---------------------------------------------------- |
| `id`            | `INT` / `BIGINT` | `PRIMARY KEY`, `AUTO_INCREMENT` | Unique identifier for each testimonial.              |
| `quote`         | `TEXT`           | `NOT NULL`                      | The full text of the client's quote.                 |
| `author_name`   | `VARCHAR(255)`   | `NOT NULL`                      | The name of the person who gave the quote.           |
| `author_title`  | `VARCHAR(255)`   | `NOT NULL`                      | The job title and company of the author.             |
| `client_company`| `VARCHAR(255)`   | `NULLABLE`                      | The name of the client's company (for filtering).    |
| `client_logo`   | `VARCHAR(255)`   | `NULLABLE`                      | URL or path to the client's logo.                    |
| `created_at`    | `TIMESTAMP`      | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was created.            |
| `updated_at`    | `TIMESTAMP`      | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was last updated.       |

---

### Table: `posts`

Stores blog articles or insights. Powers the `/insights/[slug]` pages.

| Column Name   | Data Type          | Constraints                     | Description                                        |
| ------------- | ------------------ | ------------------------------- | -------------------------------------------------- |
| `id`          | `INT` / `BIGINT`   | `PRIMARY KEY`, `AUTO_INCREMENT` | Unique identifier for each post.                   |
| `title`       | `VARCHAR(255)`     | `NOT NULL`                      | The headline of the article.                       |
| `slug`        | `VARCHAR(255)`     | `NOT NULL`, `UNIQUE`            | URL-friendly identifier for the post.              |
| `language`    | `ENUM('DE', 'EN')` | `NOT NULL`                      | Language of the content entry.                     |
| `publish_date`| `DATE`             | `NOT NULL`                      | The date the article was published.                |
| `author_id`   | `INT` / `BIGINT`   | `NOT NULL`, `FOREIGN KEY`       | The author of the post. References `team_members(id)`. |
| `summary`     | `TEXT`             | `NOT NULL`                      | A short summary for the listing page.              |
| `content`     | `TEXT`             | `NOT NULL`                      | The full markdown body of the article.             |
| `created_at`  | `TIMESTAMP`        | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was created.          |
| `updated_at`  | `TIMESTAMP`        | `NOT NULL`, `DEFAULT NOW()`     | Timestamp of when the record was last updated.     |

---

### Table: `global_settings`

A singleton table to store site-wide configuration and contact details. It should contain only one row.

| Column Name     | Data Type        | Constraints      | Description                               |
| --------------- | ---------------- | ---------------- | ----------------------------------------- |
| `id`            | `INT`            | `PRIMARY KEY`    | Unique identifier, should always be `1`.  |
| `company_name`  | `VARCHAR(255)`   | `NULLABLE`       | The legal name of the company.            |
| `contact_email` | `VARCHAR(255)`   | `NULLABLE`       | The primary contact email address.        |
| `contact_phone` | `VARCHAR(100)`   | `NULLABLE`       | The primary contact phone number.         |
| `address`       | `TEXT`           | `NULLABLE`       | The physical company address.             |
| `linkedin_url`  | `VARCHAR(255)`   | `NULLABLE`       | URL to the company LinkedIn profile.      |
| `xing_url`      | `VARCHAR(255)`   | `NULLABLE`       | URL to the company Xing profile.          |
| `updated_at`    | `TIMESTAMP`      | `NOT NULL`       | Timestamp of when the settings were last updated. |

---

### Join Table: `services_case_studies`

A pivot table to manage the many-to-many relationship between `services` and `case_studies`.

| Column Name     | Data Type        | Constraints               | Description                    |
| --------------- | ---------------- | ------------------------- | ------------------------------ |
| `service_id`    | `INT` / `BIGINT` | `PRIMARY KEY`, `FOREIGN KEY` | References `services(id)`.     |
| `case_study_id` | `INT` / `BIGINT` | `PRIMARY KEY`, `FOREIGN KEY` | References `case_studies(id)`. |