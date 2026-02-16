---
id: builds.001.tasks:010-build-base-layout
title: Build Base Layout (src/layouts/BaseLayout.astro)
description: Create the main site layout that wraps all pages, including header, footer, and SEO tags.
sequence: 10
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
The `BaseLayout` is the foundational component for every page on the site. It ensures consistency by wrapping page-specific content with the common `Header` and `Footer`. It also incorporates the `SEO` component to manage meta tags and imports the global stylesheet. This task assembles the previously built components into a cohesive and reusable layout.

## Instructions
1.  Create a new directory `src/layouts`.
2.  Inside `src/layouts`, create a new file named `BaseLayout.astro`.
3.  Copy the code from the Code Templates section below into the file.
4.  The layout accepts `title` and `description` props, which are passed directly to the `SEO` component.
5.  It determines the `currentLocale` from the Astro URL and passes it to the `Header` and `Footer` components for i18n.
6.  The `<slot />` tag is where the content of individual pages will be rendered.
7.  The `main` element has the `opacity-0 animate-fade-in` classes to implement the page transition effect defined in `design/patterns.md`.

## Files to Create/Modify
*   `src/layouts/BaseLayout.astro` (Create)

## Code Templates
```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import SEO from '../components/SEO.astro';
import '../styles/global.css';

interface Props {
	title: string;
  description: string;
}

const { title, description } = Astro.props;
const currentLocale = Astro.currentLocale as 'de' | 'en' ?? 'de';
---

<!doctype html>
<html lang={currentLocale}>
	<head>
		<SEO title={title} description={description} />
	</head>
	<body>
		<Header currentLocale={currentLocale} />
		<main class="opacity-0 animate-fade-in">
			<slot />
		</main>
		<Footer currentLocale={currentLocale} />
	</body>
</html>
```

## Acceptance Criteria
*   The file `src/layouts/BaseLayout.astro` exists.
*   Pages that use this layout correctly render the header, their own content, and the footer.
*   The page's HTML `<head>` is populated with the correct meta tags from the `SEO` component.
*   The global stylesheet is applied to all pages using the layout.
*   The page content fades in on load.

## Rollback
*   Delete the `src/layouts/BaseLayout.astro` file and the `src/layouts` directory.