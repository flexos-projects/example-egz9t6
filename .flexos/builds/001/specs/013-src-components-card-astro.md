---
type: spec
subtype: build-spec
title: src/components/Card.astro
phase: 3
priority: 5
---

## Files to Create/Modify
- `src/components/Card.astro`

## Implementation Details
Create a versatile `Card` component based on pattern `5. Cards` from `design/patterns.md`. It should have a base style with hover effects (shadow and lift). The component should support different content configurations using named slots: `<slot name="image" />`, `<slot name="icon" />`, `<slot name="title" />`, `<slot name="body" />`, and `<slot name="actions" />`. It should also accept a `variant` prop for the `'accent-border'` style.

## Dependencies
- `src/layouts/BaseLayout.astro`

## Acceptance Criteria
- [ ] File exists at `src/components/Card.astro`.
- [ ] The base card has `bg-surface-50`, `rounded-md`, `shadow-md`, and the specified `transition` and `hover` effects.
- [ ] It uses named slots to structure content.
- [ ] When a `variant='accent-border'` prop is passed, it adds a `border-l-4 border-accent-500`.
- [ ] The card is wrapped in an `<a>` tag if an `href` prop is provided, making the entire card clickable.

## Code Patterns
```astro
---
interface Props {
    href?: string;
    variant?: 'default' | 'accent-border';
    className?: string;
}
const { href, variant = 'default', className } = Astro.props;

const Tag = href ? 'a' : 'div';

const cardClasses = [
    'bg-surface-50 rounded-md shadow-md p-6 transition-all duration-300 ease-in-out',
    'hover:shadow-lg hover:-translate-y-1',
    variant === 'accent-border' ? 'border-l-4 border-accent-500 hover:border-accent-600' : '',
    className
];
---
<Tag href={href} class:list={cardClasses}>
    <slot name="image" />
    <div class="flex items-center mb-4">
        <slot name="icon" />
        <h3 class="font-inter text-xl font-semibold text-primary-700">
            <slot name="title" />
        </h3>
    </div>
    <div class="font-lora text-base text-surface-900 mb-4">
        <slot name="body" />
    </div>
    <div class="font-inter text-accent-500 hover:text-accent-600 font-medium text-sm">
        <slot name="actions" />
    </div>
</Tag>
```