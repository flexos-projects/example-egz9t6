---

```markdown
---
type: config
subtype: design-system
title: Design System
---

This design system establishes the foundational visual and interactive language for the Example Consulting Group website. It is designed to empower the AI builder to create pages that are consistent, professional, and aligned with our core brand personality: **Quiet Confidence**.

The system is divided into two parts:

1.  **Tokens:** These are the non-negotiable, exact values for colors, typography, and spacing. The builder **must** adhere to these to ensure brand consistency.
2.  **Creative Direction:** These are guiding principles for layout, motion, and visual style. They are meant to inspire creative and effective solutions within the established brand framework.

---

# PART 1: TOKENS (The Builder MUST Use These)

## Colors

The color palette is minimalist and professional, designed to build trust and ensure content clarity. The primary navy conveys stability and expertise, while the accent ochre provides a sophisticated, human touch for key interactions.

The Tailwind configuration should be:

```javascript
// tailwind.config.js
module.exports = {
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
          700: '#142851', // Base: #192A51 is very dark, so we use a slightly lighter base for the main tone
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
          500: '#D4A056', // Base
          600: '#B78746',
          700: '#9A7039',
          800: '#7D5A2F',
          900: '#604525',
          950: '#4C361D'
        },
        surface: { // For backgrounds, cards, dividers
          50: '#FFFFFF',    // White
          100: '#F4F5F7',   // Light Gray
          200: '#E9ECF0',
          300: '#D8DDE4',
          // ... up to 900 for dark text on light backgrounds
          900: '#101828'    // Dark text color
        }
      }
    }
  }
}
```

**Semantic Colors:**

*   **Success:** `#057A55` (A deep, confident green)
*   **Warning:** `#D4A056` (Use the base accent color for consistency)
*   **Error:** `#BE123C` (A strong, but not jarring, red)

## Typography

The typography pairs a modern, precise sans-serif for headlines with an elegant, readable serif for body copy, reflecting our brand's blend of modern strategy and established expertise.

*   **Heading Font:** **Inter**
    *   **Reasoning:** Its clean, geometric form provides clarity and authority. It feels modern, confident, and highly legible, perfect for delivering impactful messages.
*   **Body Font:** **Lora**
    *   **Reasoning:** An elegant serif that is exceptionally comfortable for long-form reading in case studies and articles. It adds a touch of gravitas and academic rigor, reinforcing the brand's expertise.

**Font Scale (Tailwind CSS):**

| Class     | Font Size (px) | Font Size (rem) | Line Height |
| :-------- | :------------- | :-------------- | :---------- |
| `text-xs` | 12px           | 0.75rem         | 1rem        |
| `text-sm` | 14px           | 0.875rem        | 1.25rem     |
| `text-base`| 16px           | 1rem            | 1.75rem     |
| `text-lg` | 18px           | 1.125rem        | 1.75rem     |
| `text-xl` | 20px           | 1.25rem         | 1.75rem     |
| `text-2xl`| 24px           | 1.5rem          | 2rem        |
| `text-3xl`| 30px           | 1.875rem        | 2.25rem     |
| `text-4xl`| 36px           | 2.25rem         | 2.5rem      |
| `text-5xl`| 48px           | 3rem            | 1.2         |
| `text-6xl`| 60px           | 3.75rem         | 1.2         |

**Font Weight Usage:**

*   **Normal (400):** Default for all body copy (`Lora`).
*   **Medium (500):** For subheadings or UI elements like buttons and navigation links (`Inter`).
*   **Semibold (600):** Primary weight for most headlines (`Inter`) to strike a balance between boldness and sophistication.
*   **Bold (700):** Use sparingly for the most important hero headlines or for emphasis within body text.

## Spacing

We use a spacious and structured layout to create a calm, focused user experience.

*   **Section Vertical Padding:** **Generous**. Use `py-24` (96px) or `py-32` (128px) on desktop. Use `py-16` (64px) or `py-20` (80px) on mobile.
*   **Content Max-Width:** `1280px` (Tailwind's `max-w-7xl`). This provides a comfortable reading line-length without feeling constrained.
*   **Container Horizontal Padding:** `px-6` (24px) or `px-8` (32px) on desktop. Use `px-4` (16px) on mobile.

## Shapes

Shapes should be clean, modern, and purposeful, reflecting a structured and professional aesthetic.

*   **Border Radius:** Use minimal rounding.
    *   `none` or `rounded-sm` (4px): For large containers, images, and page sections.
    *   `rounded-md` (8px): For interactive elements like buttons and input fields to give them a subtle affordance.
    *   **Avoid:** `rounded-xl`, `rounded-full` on anything other than avatars or specific icons. We are not a playful, bubbly brand.
*   **Shadow Style:** Subtle and diffuse. Use shadows to indicate elevation and interactivity, not for decoration.
    *   Example: `shadow-md` or `shadow-lg` on hover for cards and buttons. Avoid hard, dark shadows.

---

# PART 2: CREATIVE DIRECTION (Inspire the Builder)

## Visual Personality

*   **Confident:** Bold typography, strong grid, and direct messaging.
*   **Sophisticated:** Minimalist color palette, high-quality imagery, and refined details.
*   **Structured:** Organized, grid-based layouts with generous, intentional whitespace.
*   **Reassuring:** Calm, deliberate motion and a clear, uncluttered user interface.

## Animation & Motion Language

Motion should be **purposeful and elegant**, enhancing the user experience without causing distraction. It should feel smooth, professional, and reassuring.

*   **Page Transitions:** A subtle, quick cross-fade (`opacity`). No complex sliding or zooming.
*   **Scroll Animations:** A gentle fade-up and slight vertical translation for elements as they enter the viewport.
*   **Hover Effects:** Use subtle transformations to provide feedback. A slight lift (`shadow`), a gentle scale, or a color shift to `accent` are preferred.
*   **Micro-interactions:** Button presses should have a subtle `scale-95` transform. Form fields should get a soft `accent` glow (`ring-2 ring-accent-300`).
*   **Speed:** **Smooth** (`300-500ms`). This feels more deliberate and less frantic.
*   **Easing:** **`ease-in-out`**. This creates an elegant, polished feel for all transitions.

**Examples for the Builder:**
1.  **Card Hover Effect:** `transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1`
2.  **Button / Link Hover:** `transition-colors duration-300 ease-in-out text-accent-500 hover:text-accent-600`
3.  **Scroll-in Animation (using a library):** Target elements with `opacity: 0; transform: translateY(20px);` and transition to `opacity: 1; transform: translateY(0);` over `500ms`.

## Layout Philosophy

Our layout is a direct reflection of our thinking: clear, organized, and focused on the content.

*   **Whitespace:** **Generous and intentional.** It is the most important element for creating a calm, premium, and focused feel. Do not crowd elements.
*   **Grid Rhythm:** A **strict 12-column grid** should be the foundation for all primary page layouts to ensure order and alignment. Asymmetry can be used, but it must feel deliberate and balanced within the grid structure.
*   **Image Treatment:** Images should be treated as high-quality assets. Present them in clean, full-bleed sections, or frame them crisply within the grid. Avoid floating images with text-wrap.
*   **Section Rhythm:** Create visual separation between sections by alternating backgrounds between `surface-50` (white) and `surface-100` (light gray). Use ample vertical padding.
*   **Mobile Approach:** **Simplified and focused.** The experience should not be a direct miniaturization but an adaptation. Prioritize a single-column layout, ensure generous tap targets for links/buttons, and maintain excellent typographic hierarchy.

## Photography & Image Style

Every visual asset must be purposeful and of high quality. **No generic stock photos.**

*   **Style:** A mix of professional photography and clean information design.
*   **Color Treatment:** Photos should have a natural, professional color grade. They should feel authentic, not overly filtered or saturated. Black and white can be used for architectural or abstract shots to add a timeless, sophisticated feel.
*   **Subject Matter:**
    *   **People:** Authentic, professional portraits of the team against consistent backgrounds.
    *   **Architecture:** Clean, abstract shots of modern architectural details, light, and shadow. This builds the sophisticated, "Munich office" vibe.
    *   **Information:** Clean UI mockups, diagrams, and data visualizations to illustrate process and results in case studies.

## Inspiration References

These sites successfully capture elements of the "Quiet Confidence" we aim for.

1.  **`instrument.com`:**
    *   **Borrow:** Their bold, confident typography and strong, unapologetic grid system. Notice how headlines are the primary design element.
2.  **`ustwo.com`:**
    *   **Borrow:** Their masterful use of negative space and the way they present case studies with a mix of high-quality visuals and clear, structured text.
3.  **`bravepeople.co`:**
    *   **Borrow:** The balance between a highly professional aesthetic and subtle, humanizing details. Their motion design is elegant and purposeful.

## Do's and Don'ts

### DO
*   **DO** prioritize typography as a primary design element.
*   **DO** use the grid to create a sense of order and structure on every page.
*   **DO** embrace generous whitespace to let content breathe and guide the user's focus.
*   **DO** use high-quality, purposeful imagery (real people, architecture, diagrams).
*   **DO** ensure every interactive element has clear, subtle feedback on hover and click.

### DON'T
*   **DON'T** use generic stock photos of people in boardrooms.
*   **DON'T** add purely decorative elements, gradients, or busy background patterns.
*   **DON'T** use bright, loud, or playful colors outside the established palette.
*   **DON'T** create jarring or complex animations. Motion should be elegant and subtle.
*   **DON'T** crowd elements. If in doubt, add more space.