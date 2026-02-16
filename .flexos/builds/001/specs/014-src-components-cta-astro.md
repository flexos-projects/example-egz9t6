---
type: spec
subtype: build-spec
title: src/components/CTA.astro
phase: 3
priority: 6
---

## Files to Create/Modify
- `src/components/CTA.astro`

## Implementation Details
Create a reusable call-to-action banner component based on pattern `3.5. CTA Banner`. It should be a high-impact section designed to drive conversions. The component will use the `Section` wrapper with the `prominent` or `accent` variant. Content like the headline, subtext, and button link/text will be passed in via props or slots.

## Dependencies
- `src/components/Section.astro`

## Acceptance Criteria
- [ ] File exists at `src/components/CTA.astro`.
- [ ] It renders a `Section` component with a distinct background color (`accent-500` or `primary-700`).
- [ ] It accepts `headline`, `subtext`, `buttonText`, and `buttonHref` as props.
- [ ] The styling of the text and button matches the design pattern exactly.

## Code Patterns
```astro
---
import Section from './Section.astro';
import { Icon } from 'astro-icon/components';

interface Props {
    headline: string;
    subtext: string;
    buttonText: string;
    buttonHref: string;
}

const { headline, subtext, buttonText, buttonHref } = Astro.props;
---
<Section variant="prominent" padding="loose" className="text-center">
    <div class="max-w-4xl mx-auto">
      <h2 class="font-inter text-3xl md:text-4xl font-semibold leading-tight mb-4">
        {headline}
      </h2>
      <p class="font-lora text-lg md:text-xl mb-8 opacity-90">
        {subtext}
      </p>
      <a href={buttonHref} class="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5">
        {buttonText}
        <Icon name="mdi:arrow-right" class="ml-2 w-5 h-5" />
      </a>
    </div>
</Section>
```