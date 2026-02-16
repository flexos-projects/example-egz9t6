```markdown
---
type: spec
subtype: build-spec
title: src/styles/global.css
phase: 1
priority: 4
---

## Files to Create/Modify
- `src/styles/global.css`

## Implementation Details
Create the global stylesheet. This file will define `@font-face` rules to load the self-hosted 'Inter' and 'Lora' fonts. It will also include the three essential Tailwind CSS `@layer` directives. A base layer will be defined to apply the default body font (`Lora`) and heading font (`Inter`). Finally, the keyframe animations for page transitions and scroll-reveal effects must be defined.

## Dependencies
- `tailwind.config.mjs`
- `design/design-system.md`
- `design/patterns.md`

## Acceptance Criteria
- [ ] File exists at `src/styles/global.css`.
- [ ] `@font-face` rules for 'Inter' and 'Lora' are present, pointing to local files in `/fonts/`.
- [ ] `@tailwind base`, `@tailwind components`, and `@tailwind utilities` directives are included.
- [ ] A `@layer base` rule sets the default `font-family` for `body` to `font-lora` and `h1,h2,h3,h4,h5,h6` to `font-inter`.
- [ ] `@keyframes` for `fade-in` and `fade-in-up` are defined as specified in `design/patterns.md`.

## Code Patterns
```css
/* Self-hosted Font Definitions */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-VariableFont_slnt,wght.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: 'Lora';
  src: url('/fonts/Lora-VariableFont_wght.woff2') format('woff2-variations');
  font-weight: 400 700;
  font-display: swap;
}

/* Tailwind Directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }
  body {
    @apply bg-surface-50 antialiased font-lora text-surface-900;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-inter font-semibold text-primary-700;
  }
}

/* Animation Keyframes from design/patterns.md */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```
```