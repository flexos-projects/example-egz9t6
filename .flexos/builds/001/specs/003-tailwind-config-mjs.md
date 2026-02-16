---
type: spec
subtype: build-spec
title: tailwind.config.mjs
phase: 1
priority: 3
---

## Files to Create/Modify
- `tailwind.config.mjs`

## Implementation Details
Create the Tailwind CSS configuration file. This file is the bridge between the design system and the actual CSS classes. It must translate all color, font, and spacing tokens from `design/design-system.md` into the `theme.extend` object. Pay close attention to the font family setup for 'Inter' (sans-serif) and 'Lora' (serif).

## Dependencies
- `package.json`
- `design/design-system.md`

## Acceptance Criteria
- [ ] `tailwind.config.mjs` is created at the project root.
- [ ] The `content` array is configured to scan all `.astro`, `.js`, `.ts`, `.md`, and `.mdx` files in the `src` directory.
- [ ] The `theme.extend.colors` object contains `primary`, `accent`, `surface`, `success`, `warning`, and `error` keys with their full palettes as defined in the design system.
- [ ] The `theme.extend.fontFamily` object defines `inter` and `lora` font stacks.
- [ ] All other design system values (line-height, etc.) are correctly configured.

## Code Patterns
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lora': ['Lora', 'serif'],
      },
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
        error: '#BE123C',
      },
      lineHeight: {
        'extra-loose': '1.75'
      }
    },
  },
  plugins: [],
}
```