---
type: spec
subtype: build-spec
title: public/favicon.svg
phase: 1
priority: 5
---

## Files to Create/Modify
- `public/favicon.svg`

## Implementation Details
Create a clean, professional SVG favicon. The design should be inspired by the abstract logo seen in `prototype/pages/page.html`, which uses simple geometric shapes. It should use the primary brand color (`#142851` or `primary-700`) as its fill color to align with the "Quiet Confidence" aesthetic. The SVG should be optimized for size.

## Dependencies
- `design/design-system.md` (for color)

## Acceptance Criteria
- [ ] File `favicon.svg` exists in the `public/` directory.
- [ ] The SVG renders a clean, abstract mark.
- [ ] The fill color of the SVG matches the `primary-700` token (`#142851`).
- [ ] The SVG code is well-formed and does not contain unnecessary metadata.

## Code Patterns
```xml
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="8" fill="#142851"/>
  <path d="M20 20H26V44H20V20Z" fill="white" fill-opacity="0.8"/>
  <path d="M38 20H44V44H38V20Z" fill="white" fill-opacity="0.8"/>
</svg>
```