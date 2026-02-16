---
id: builds.001.tasks:004-create-src-styles-global-css
title: Create src/styles/global.css
description: Set up the global stylesheet with base styles, font imports, and keyframe animations.
sequence: 4
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
The `global.css` file is where base styles, font imports, and global animations are defined. This task implements the base typography from `design/design-system.md` and the animation keyframes specified in `design/patterns.md`. These styles will apply to the entire site and provide the foundation for all other components.

## Instructions
1.  Create a new directory `src/styles`.
2.  Inside `src/styles`, create a new file named `global.css`.
3.  Copy the CSS code from the Code Templates section below into `global.css`.
4.  The `@tailwind` directives are necessary to inject Tailwind's base, components, and utility styles.
5.  The `@layer base` section sets the default fonts for headings and body text.
6.  The `@layer utilities` section defines the `fade-in` and `fade-in-up` animations required by multiple components in the design patterns.

## Files to Create/Modify
*   `src/styles/global.css` (Create)

## Code Templates
```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  body {
    @apply bg-surface-50 antialiased text-surface-900;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-inter font-semibold text-primary-700;
  }
  p, blockquote, address, ul, ol, dl {
    @apply font-lora text-base leading-[1.75];
  }
}

@layer utilities {
  /* Page load animation */
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fade-in 500ms ease-in-out forwards;
  }

  /* Scroll-reveal animation */
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Custom class for Intersection Observer to trigger the animation */
  .fade-in-up {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 600ms ease-out, transform 600ms ease-out;
  }
  .fade-in-up.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* For native details/summary icon animation */
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
  details[open] .details-icon {
    transform: rotate(45deg);
  }
}
```

## Acceptance Criteria
*   The file `src/styles/global.css` exists and contains the specified code.
*   The Inter and Lora fonts are imported correctly.
*   Base typographic styles are applied to HTML elements without needing explicit utility classes.
*   The `animate-fade-in` and `fade-in-up` animations are available as utility classes.

## Rollback
*   Delete the `src/styles/global.css` file and the `src/styles` directory.