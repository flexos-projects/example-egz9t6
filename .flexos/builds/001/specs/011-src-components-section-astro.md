---
type: spec
subtype: build-spec
title: src/components/Section.astro
phase: 3
priority: 3
---

## Files to Create/Modify
- `src/components/Section.astro`

## Implementation Details
Create a general-purpose section wrapper component. It should implement pattern `1. Section Wrapper` from `design/patterns.md`. The component must accept a `variant` prop (`'default'`, `'alternating'`, `'prominent'`) to control the background color and text color, and a `padding` prop (`'normal'`, `'tight'`, `'loose'`) to control vertical padding. It must contain the mandatory inner `div` that sets the `max-w-7xl`.

## Dependencies
- `src/layouts/BaseLayout.astro`

## Acceptance Criteria
- [ ] File exists at `src/components/Section.astro`.
- [ ] It accepts `variant` and `padding` props.
- [ ] The correct background, text color, and padding classes are applied based on the props.
- [ ] It contains an inner container with `mx-auto max-w-7xl` and responsive horizontal padding.
- [ ] Content passed into the default `<slot />` is rendered correctly inside the container.

## Code Patterns
```astro
---
import { cva, type VariantProps } from "class-variance-authority";

const sectionStyles = cva("w-full", {
  variants: {
    variant: {
      default: "bg-surface-50 text-surface-900",
      alternating: "bg-surface-100 text-surface-900",
      prominent: "bg-primary-700 text-white",
    },
    padding: {
      tight: "py-12 md:py-16",
      normal: "py-16 md:py-24 lg:py-32",
      loose: "py-20 md:py-28 lg:py-36",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "normal",
  },
});

interface Props extends VariantProps<typeof sectionStyles> {
  id?: string;
  className?: string;
}

const { variant, padding, id, className } = Astro.props;
---
<section id={id} class:list={[sectionStyles({ variant, padding }), className]}>
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <slot />
  </div>
</section>
```