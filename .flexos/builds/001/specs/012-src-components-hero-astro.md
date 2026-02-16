---
type: spec
subtype: build-spec
title: src/components/Hero.astro
phase: 3
priority: 4
---

## Files to Create/Modify
- `src/components/Hero.astro`

## Implementation Details
Create a flexible `Hero` component capable of rendering the three variants defined in `design/patterns.md`: `impact`, `split`, and `minimal`. It should accept a `variant` prop to control the structure. Use named slots (`<slot name="headline" />`, `<slot name="subtext" />`, `<slot name="actions" />`, `<slot name="image" />`) to allow pages to inject their specific content. All animations and styling must match the design pattern specifications precisely.

## Dependencies
- `src/components/Section.astro`

## Acceptance Criteria
- [ ] File exists at `src/components/Hero.astro`.
- [ ] It accepts a `variant` prop: `'impact'`, `'split'`, `'minimal'`.
- [ ] When `variant='impact'`, it renders a full-screen hero with an image overlay.
- [ ] When `variant='split'`, it renders a two-column grid for an image and text content. An `imagePosition` prop (`'left'` or `'right'`) should control the order.
- [ ] When `variant='minimal'`, it renders a centered text block with generous padding.
- [ ] All content is placed via named slots.
- [ ] The fade-in-up animations from the design patterns are applied to the content.

## Code Patterns
```astro
---
interface Props {
    variant: 'impact' | 'split' | 'minimal';
    imagePosition?: 'left' | 'right';
    backgroundImage?: string;
}
const { variant, imagePosition = 'left', backgroundImage } = Astro.props;
---
{variant === 'impact' && (
    <section class="relative h-screen bg-cover bg-center text-white" style=`background-image: url(${backgroundImage})`>
        <div class="absolute inset-0 bg-primary-700/70"></div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center max-w-4xl mx-auto px-4">
            <h1 class="..."><slot name="headline"/></h1>
            <p class="..."><slot name="subtext"/></p>
            <div class="..."><slot name="actions"/></div>
        </div>
    </section>
)}

{variant === 'split' && (
    <section class="py-20 md:py-28 lg:py-36 bg-surface-50">
        <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 grid md:grid-cols-2 items-center gap-12 md:gap-16">
            <div class:list={[imagePosition === 'right' && 'md:order-last']}>
                <slot name="image"/>
            </div>
            <div>
                <h1 class="..."><slot name="headline"/></h1>
                <p class="..."><slot name="subtext"/></p>
                <div class="..."><slot name="actions"/></div>
            </div>
        </div>
    </section>
)}

{variant === 'minimal' && (
    <section class="py-24 md:py-32 lg:py-48 bg-surface-50 text-center">
        <div class="mx-auto max-w-3xl px-4">
            <h1 class="..."><slot name="headline"/></h1>
            <p class="..."><slot name="subtext"/></p>
            <div class="..."><slot name="actions"/></div>
        </div>
    </section>
)}
```