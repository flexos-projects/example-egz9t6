---
id: builds.001.tasks:007-build-seo-component
title: Build SEO Component (src/components/SEO.astro)
description: Create a reusable Astro component for managing all SEO-related meta tags.
sequence: 7
status: pending
type: build
subtype: task
relatesTo:
  - builds.001:queue
tags:
  - task
createdAt: "2026-02-16T05:42:05.985Z"
updatedAt: "2026-02-16T05:42:05.986Z"
---

## Context
A robust SEO component is essential for managing page titles, meta descriptions, canonical URLs, and Open Graph tags consistently across the site. This component will abstract away the complexity of SEO tags and provide a simple interface for page layouts to use, as outlined in `docs/core/007-technical.md`.

## Instructions
1.  Create a new directory `src/components`.
2.  Inside `src/components`, create a new file named `SEO.astro`.
3.  Copy the Astro component code from the Code Templates section below into this file.
4.  The component accepts `title` and `description` as props and constructs the full page title by appending the company name.
5.  It automatically generates canonical URLs, Open Graph tags for social sharing, and Twitter card tags.

## Files to Create/Modify
*   `src/components/SEO.astro` (Create)

## Code Templates
```astro
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
}

const { 
  title, 
  description, 
  ogImage = '/og-image.png' // Default OG image
} = Astro.props;

const companyName = "InnovationHub Solutions GmbH";
const pageTitle = `${title} | ${companyName}`;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
const absoluteOgImageUrl = new URL(ogImage, Astro.site).href;
---
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{pageTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph -->
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:image" content={absoluteOgImageUrl} />
<meta property="og:type" content="website" />
<meta property="og:site_name" content={companyName} />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={pageTitle} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={absoluteOgImageUrl} />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Acceptance Criteria
*   The file `src/components/SEO.astro` exists.
*   The component correctly renders all required meta tags when used in a layout.
*   Props for `title` and `description` are correctly used to populate the tags.
*   Canonical URLs and OG image URLs are absolute.

## Rollback
*   Delete the `src/components/SEO.astro` file.