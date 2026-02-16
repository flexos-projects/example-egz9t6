---
id: builds.001.tasks:003-create-tailwind-config-mjs
title: Create tailwind.config.mjs
description: Configure Tailwind CSS with the project's custom design system tokens.
sequence: 3
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
This task translates the visual identity defined in `design/design-system.md` into a functional Tailwind CSS configuration. It's critical that the colors, fonts, and other tokens are set up precisely to ensure brand consistency across the entire website. This file will be the single source of truth for all styling utilities.

## Instructions
1.  Create a new file named `tailwind.config.mjs` in the project root.
2.  Copy the configuration from the Code Templates section below into this file. This code directly implements the color palette, typography, and spacing defined in the design system.
3.  Note how the `colors` object maps to the `--color-` variables defined in the design system for primary, accent, surface, and semantic colors.
4.  Note how the `fontFamily` object maps the `inter` and `lora` fonts.

## Files to Create/Modify
*   `tailwind.config.mjs` (Create)

## Code Templates
```javascript
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8EAF0',
          100: '#D1D5E1',
          200: '#A3ADC3',
          300: '#7584A5',
          400: '#475C87',
          500: '#193469',
          600: '#172E5D',
          700: '#142851',
          800: '#112245',
          900: '#0F1C3A',
          950: '#0B142A'
        },
        accent: {
          50: '#FBF6EE',
          100: '#F7EDDC',
          200: '#EEDAA0',
          300: '#E5C683',
          400: '#DCB367',
          500: '#D4A056',
          600: '#B78746',
          700: '#9A7039',
          800: '#7D5A2F',
          900: '#604525',
          950: '#4C361D'
        },
        surface: {
          50: '#FFFFFF',
          100: '#F4F5F7',
          200: '#E9ECF0',
          300: '#D8DDE4',
          900: '#101828'
        },
        success: '#057A55',
        warning: '#D4A056',
        error: '#BE123C'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
}
```

## Acceptance Criteria
*   The `tailwind.config.mjs` file exists in the project root.
*   The configuration contains the custom `colors` and `fontFamily` extensions matching the design system.
*   The `@tailwindcss/typography` plugin is included.
*   When used in an Astro component, utility classes like `bg-primary-700` and `font-inter` apply the correct styles.

## Rollback
*   Delete the `tailwind.config.mjs` file.