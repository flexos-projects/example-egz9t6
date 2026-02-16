---
type: config
subtype: design-patterns
title: Component Patterns
---

This document serves as a **RECIPE BOOK** for building consistent, high-quality pages that embody the "Quiet Confidence" of the Example Consulting Group. For each pattern, you'll find explicit Tailwind/CSS classes derived from our design tokens, brief HTML structure sketches, notes on responsive behavior and animation, and 2-3 variations to ensure flexibility while maintaining brand consistency.

**Guiding Principles for the Builder:**

*   **Consistency is Key:** Always refer to the design system's tokens for colors, typography, spacing, and shapes.
*   **Embrace Whitespace:** Generous spacing is not wasted space; it's a core element of our sophisticated aesthetic.
*   **Purposeful Motion:** Animations should enhance, not distract. They should feel smooth, elegant, and reassuring.
*   **Mobile-First Mindset:** Pages must be fully responsive, prioritizing readability and ease of interaction on smaller screens.
*   **High-Quality Visuals:** Use only approved, high-resolution imagery. No generic stock photos.

---

## 1. Section Wrapper

The fundamental container for all page sections. It defines the overall structure, max-width, horizontal padding, vertical spacing, and background treatment, ensuring every part of a page feels cohesive.

**Core Structure:**

```html
<section class="[SECTION_WRAPPER_CLASSES]">
  <div class="[INNER_CONTAINER_CLASSES]">
    <!-- Section Content Goes Here -->
  </div>
</section>
```

**Inner Container (Mandatory for all variations):**

This `div` ensures content aligns to our `max-w-7xl` and maintains horizontal padding.

```html
<div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
  <!-- Content -->
</div>
```

**Responsive Behavior:**
*   Horizontal padding adjusts from `px-4` (16px) on mobile to `px-8` (32px) on medium screens and `px-12` (48px) on large screens.
*   Vertical padding should be generous and adjust for mobile.

**Animation/Interaction Notes:**
*   Individual elements within a section can use scroll-reveal animations. The section wrapper itself typically doesn't animate, but provides the stage.

---

### **Variations:**

#### **1.1. Standard Content Section**
This is the default for most content blocks. It provides a clean, neutral background and generous vertical spacing.

**Tailwind/CSS Classes:**

```css
/* Section Wrapper */
.py-16.md:py-24.lg:py-32.bg-surface-50
```

**HTML Sketch:**

```html
<section class="py-16 md:py-24 lg:py-32 bg-surface-50">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <!-- Main content area -->
    <h2 class="font-inter text-3xl md:text-4xl font-semibold text-primary-700 mb-8">Section Title</h2>
    <p class="font-lora text-lg text-surface-900">This is a standard content section with a clean white background, perfect for most informational blocks.</p>
  </div>
</section>
```

#### **1.2. Alternating Background Section (Subtle Contrast)**
Use this variation to break up long pages, creating visual rhythm and guiding the user through content.

**Tailwind/CSS Classes:**

```css
/* Section Wrapper */
.py-16.md:py-20.lg:py-28.bg-surface-100
```

**HTML Sketch:**

```html
<section class="py-16 md:py-20 lg:py-28 bg-surface-100">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <!-- Content often placed after a 'Standard' section -->
    <h2 class="font-inter text-3xl md:text-4xl font-semibold text-primary-700 mb-8">Another Section Title</h2>
    <p class="font-lora text-lg text-surface-900">This section uses a subtle light gray background to create visual separation and rhythm on the page, without being distracting.</p>
  </div>
</section>
```

#### **1.3. Prominent Background Section (Accent or Brand Primary)**
Ideal for highly impactful sections, such as a strong CTA, a key testimonial, or a hero-like secondary section. Text color should adapt for contrast.

**Tailwind/CSS Classes:**

```css
/* Section Wrapper */
.py-20.md:py-28.lg:py-36.bg-primary-700.text-white
```

**HTML Sketch:**

```html
<section class="py-20 md:py-28 lg:py-36 bg-primary-700 text-white">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 text-center">
    <h2 class="font-inter text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
    <p class="font-lora text-xl mb-10 opacity-90">Let's discuss how our expertise can drive your next success story.</p>
    <a href="/contact" class="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5">
      Get in Touch
      <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </a>
  </div>
</section>
```

---

## 2. Hero Variants

Hero sections are the first impression. They must be impactful, clearly communicating the brand's quiet confidence.

**Global Animation Note:** All hero content should typically animate in gently on page load. A common approach is a subtle fade-up.

```css
/* Example custom utility for Astro component's content */
/* Define in your global CSS or create an animation utility */
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-hero-content {
  animation: fade-in-up 700ms ease-out forwards;
  opacity: 0; /* Ensure it starts hidden */
  animation-delay: var(--delay, 0ms); /* Allow staggered animations */
}
```

---

### **Variations:**

#### **2.1. Impact Hero (Full-Viewport, Bold Typography)**
Best for pages needing an immediate, strong statement. Features a large headline and a compelling background.

**Tailwind/CSS Classes:**

```css
.relative.h-screen.bg-cover.bg-center.bg-[url('/path/to/hero-bg.jpg')].text-white
.absolute.inset-0.bg-primary-700/70 /* Overlay for text readability */
.flex.flex-col.justify-center.items-center.text-center.max-w-4xl.mx-auto.px-4.md:px-8.z-10
.font-inter.text-5xl.md:text-6xl.lg:text-7xl.font-bold.leading-tight.mb-4.animate-hero-content /* Headline */
.font-lora.text-xl.md:text-2xl.mb-8.opacity-90.animate-hero-content /* Subtext, with delay */
.animate-hero-content.delay-300 /* Button, with delay */
```

**Responsive Behavior:**
*   Height `h-screen` maintains full viewport.
*   Text sizes scale down `text-5xl` -> `text-6xl` -> `text-7xl`.
*   Content `max-w-4xl` centers effectively on all screen sizes.

**Animation/Interaction Notes:**
*   Content (`h1`, `p`, `button`) animates in with a slight stagger using `animate-hero-content` and `animation-delay`.
*   A subtle scroll indicator (`animate-bounce`) can be added at the bottom of the viewport.

**HTML Sketch:**

```html
<section class="relative h-screen bg-cover bg-center bg-[url('/path/to/architectural-hero.jpg')] text-white">
  <div class="absolute inset-0 bg-primary-700/70"></div>
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center max-w-4xl mx-auto px-4 md:px-8">
    <h1 class="font-inter text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-hero-content">
      Strategic Clarity.<br>Unwavering Results.
    </h1>
    <p class="font-lora text-xl md:text-2xl mb-8 opacity-90 animate-hero-content" style="--delay: 200ms;">
      Empowering leaders with actionable insights for complex challenges.
    </p>
    <a href="/services" class="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5 animate-hero-content" style="--delay: 400ms;">
      Explore Our Services
      <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </a>
  </div>
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
    <svg class="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
  </div>
</section>
```

#### **2.2. Split Hero (Image/Content Side-by-Side)**
Combines a powerful visual with concise textual information.

**Tailwind/CSS Classes:**

```css
.py-20.md:py-28.lg:py-36.bg-surface-50 /* Section wrapper */
.grid.md:grid-cols-2.items-center.gap-12.md:gap-16 /* Grid layout */
.md:order-last /* For image on the right variation */
.h-80.md:h-full.w-full.object-cover.rounded-sm.shadow-lg /* Image */
.font-inter.text-4xl.md:text-5xl.font-semibold.leading-tight.text-primary-700.mb-4 /* Headline */
.font-lora.text-lg.md:text-xl.text-surface-900.mb-6 /* Subtext */
.opacity-0.translate-y-6.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards] /* Scroll-reveal for content */
```

**Responsive Behavior:**
*   On mobile, the grid stacks, with the image typically appearing first.
*   Text sizes scale down appropriately.

**Animation/Interaction Notes:**
*   The image and text content should use scroll-reveal animations as they enter the viewport. Consider a slight delay for text after the image appears.

**HTML Sketch (Image on Left):**

```html
<section class="py-20 md:py-28 lg:py-36 bg-surface-50">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 grid md:grid-cols-2 items-center gap-12 md:gap-16">
    <div class="relative opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
      <img src="/path/to/office-collaboration.jpg" alt="Team collaborating in a modern office" class="h-80 md:h-[450px] lg:h-[550px] w-full object-cover rounded-sm shadow-lg">
    </div>
    <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_200ms]">
      <h1 class="font-inter text-4xl md:text-5xl font-semibold leading-tight text-primary-700 mb-4">
        Partnerships that Drive Progress.
      </h1>
      <p class="font-lora text-lg md:text-xl text-surface-900 mb-6">
        We collaborate closely with our clients to craft bespoke strategies that deliver measurable impact and sustainable growth.
      </p>
      <a href="/about" class="inline-flex items-center bg-primary-700 hover:bg-primary-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
        Learn About Our Approach
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  </div>
</section>
```

**HTML Sketch (Image on Right):**

```html
<section class="py-20 md:py-28 lg:py-36 bg-surface-50">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 grid md:grid-cols-2 items-center gap-12 md:gap-16">
    <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
      <h1 class="font-inter text-4xl md:text-5xl font-semibold leading-tight text-primary-700 mb-4">
        Data-Driven Decisions. Real-World Impact.
      </h1>
      <p class="font-lora text-lg md:text-xl text-surface-900 mb-6">
        Our strategic consulting is backed by rigorous analysis, ensuring solutions are robust and effective.
      </p>
      <a href="/approach" class="inline-flex items-center bg-primary-700 hover:bg-primary-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
        Our Methodology
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
    <div class="relative md:order-last opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_200ms]">
      <img src="/path/to/data-analytics.jpg" alt="Data analysis on screen" class="h-80 md:h-[450px] lg:h-[550px] w-full object-cover rounded-sm shadow-lg">
    </div>
  </div>
</section>
```

#### **2.3. Minimal Hero (Text-Centered on Solid Background)**
A clean, elegant hero for focused messaging, or as a secondary hero on inner pages.

**Tailwind/CSS Classes:**

```css
.py-24.md:py-32.lg:py-48.bg-surface-50.text-center /* Section wrapper */
.max-w-3xl.mx-auto /* Content width */
.font-inter.text-4xl.md:text-5xl.lg:text-6xl.font-semibold.leading-tight.text-primary-700.mb-4 /* Headline */
.font-lora.text-lg.md:text-xl.text-surface-900.opacity-90.mb-8 /* Subtext */
.opacity-0.translate-y-6.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards] /* Scroll-reveal for content */
```

**Responsive Behavior:**
*   Vertical padding is generous but adjusts `py-24` -> `py-32` -> `py-48`.
*   Text sizes scale down.

**Animation/Interaction Notes:**
*   Content fades up on page load or when scrolled into view.

**HTML Sketch:**

```html
<section class="py-24 md:py-32 lg:py-48 bg-surface-50 text-center">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="max-w-3xl mx-auto opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
      <h1 class="font-inter text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-primary-700 mb-4">
        Our Vision for Your Growth
      </h1>
      <p class="font-lora text-lg md:text-xl text-surface-900 opacity-90 mb-8">
        We help ambitious organizations navigate complex landscapes and achieve their full potential through strategic foresight and disciplined execution.
      </p>
      <a href="/contact" class="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5" style="--delay: 200ms;">
        Start a Conversation
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  </div>
</section>
```

---

## 3. Content Blocks

These are the workhorse sections of the website, providing versatile ways to present information. All content blocks should be wrapped in a `Section Wrapper` (e.g., `Standard Content Section` or `Alternating Background Section`).

**Scroll-Reveal Animation Class (General):**
Apply this to the main container of each block's content, or individual items within grids.

```css
.opacity-0.translate-y-6.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]
/* Use style="--delay: 200ms;" on subsequent items for stagger */
```

---

### **Variations:**

#### **3.1. Text + Image (Alternating Pattern)**
An excellent way to present features, services, or narrative content, providing visual breaks and balancing text with imagery.

**Tailwind/CSS Classes:**

```css
.grid.md:grid-cols-2.items-center.gap-12.md:gap-16 /* Grid layout */
.md:order-last /* For image on the right */
.h-64.md:h-96.w-full.object-cover.rounded-sm.shadow-md /* Image styling */
.font-inter.text-3xl.md:text-4xl.font-semibold.text-primary-700.mb-4 /* Headline */
.font-lora.text-lg.text-surface-900 /* Body text */
```

**Responsive Behavior:**
*   On mobile, the grid stacks vertically, image above text.
*   Text sizes scale down.

**Animation Notes:**
*   Each `div` (image and text content) should animate in independently on scroll, with a slight delay between them (`200ms`).

**HTML Sketch (Image Left):**

```html
<section class="py-16 md:py-24 bg-surface-50">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="grid md:grid-cols-2 items-center gap-12 md:gap-16">
      <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
        <img src="/path/to/solution-design.jpg" alt="Solution design" class="h-64 md:h-96 w-full object-cover rounded-sm shadow-md">
      </div>
      <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_200ms]">
        <h3 class="font-inter text-3xl md:text-4xl font-semibold text-primary-700 mb-4">
          Crafting Bespoke Solutions
        </h3>
        <p class="font-lora text-lg text-surface-900">
          Every challenge is unique, and so are our solutions. We immerse ourselves in your context to design strategies that are precisely tailored to your objectives and organizational culture.
        </p>
      </div>
    </div>
  </div>
</section>
```

**HTML Sketch (Image Right):**

```html
<section class="py-16 md:py-24 bg-surface-100">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="grid md:grid-cols-2 items-center gap-12 md:gap-16">
      <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
        <h3 class="font-inter text-3xl md:text-4xl font-semibold text-primary-700 mb-4">
          Impact-Driven Execution
        </h3>
        <p class="font-lora text-lg text-surface-900">
          Our commitment extends beyond strategy to tangible results. We partner with you through implementation, ensuring solutions are not just designed, but successfully deployed and optimized.
        </p>
      </div>
      <div class="md:order-last opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_200ms]">
        <img src="/path/to/project-management.jpg" alt="Project management" class="h-64 md:h-96 w-full object-cover rounded-sm shadow-md">
      </div>
    </div>
  </div>
</section>
```

#### **3.2. Feature Grid (Icon + Heading + Text)**
A flexible layout for presenting services, benefits, or key features in an easy-to-digest format.

**Tailwind/CSS Classes:**

```css
.grid.gap-8.md:gap-12 /* Grid container */
.md:grid-cols-2.lg:grid-cols-3 /* Responsive columns */
.flex.flex-col.items-center.text-center /* Or left-aligned: items-start text-left */
.text-accent-500.text-5xl.mb-4 /* Icon styling */
.font-inter.text-xl.font-semibold.text-primary-700.mb-2 /* Heading */
.font-lora.text-base.text-surface-900 /* Body text */
.opacity-0.translate-y-6.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards] /* Scroll-reveal for each item */
```

**Responsive Behavior:**
*   Columns collapse to 1 on mobile, then expand to 2 on medium screens, and 3 or 4 on large screens.

**Animation Notes:**
*   Each feature item (`div`) should animate in with `fade-in-up` on scroll, with a slight stagger.

**HTML Sketch (3-Column, Centered):**

```html
<section class="py-16 md:py-24 bg-surface-50">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <h2 class="font-inter text-3xl md:text-4xl font-semibold text-primary-700 text-center mb-12">Our Core Expertise</h2>
    <div class="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
      <!-- Feature 1 -->
      <div class="flex flex-col items-center text-center opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
        <svg class="text-accent-500 text-5xl mb-4 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v14L9 19zm0 0l-7 3v-14l7-3m0 17v-14"></path></svg>
        <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Market Strategy</h3>
        <p class="font-lora text-base text-surface-900">Developing robust market entry and growth strategies tailored to dynamic environments.</p>
      </div>
      <!-- Feature 2 -->
      <div class="flex flex-col items-center text-center opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_100ms]">
        <svg class="text-accent-500 text-5xl mb-4 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Digital Transformation</h3>
        <p class="font-lora text-base text-surface-900">Guiding organizations through technological shifts to enhance efficiency and innovation.</p>
      </div>
      <!-- Feature 3 -->
      <div class="flex flex-col items-center text-center opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_200ms]">
        <svg class="text-accent-500 text-5xl mb-4 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 111-2H9.5a2 2 0 00-2 2v6m3 2l4-4m-4 4v7M10 20v-6"></path></svg>
        <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Organizational Design</h3>
        <p class="font-lora text-base text-surface-900">Optimizing structures and processes to foster agility, collaboration, and performance.</p>
      </div>
    </div>
  </div>
</section>
```

**HTML Sketch (2-Column, Left-Aligned):**

```html
<section class="py-16 md:py-24 bg-surface-100">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <h2 class="font-inter text-3xl md:text-4xl font-semibold text-primary-700 mb-12">Our Proven Process</h2>
    <div class="grid gap-8 md:gap-16 md:grid-cols-2">
      <!-- Feature 1 -->
      <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
        <svg class="text-accent-500 text-5xl mb-4 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16v-2.293a2 2 0 01.586-1.414l.879-.879m0 0a2 2 0 011.414-.586H12m-.879-.879a2 2 0 01-.586-1.414V6h5m4-2a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4z"></path></svg>
        <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Discovery & Analysis</h3>
        <p class="font-lora text-base text-surface-900">Deep dive into your current state, market dynamics, and organizational capabilities to identify key opportunities and challenges.</p>
      </div>
      <!-- Feature 2 -->
      <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_100ms]">
        <svg class="text-accent-500 text-5xl mb-4 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1L19 10.68M12 8V4m0 0c-1.389 6-5 6-5 6s3.21-2.91 5-4m-7 1.5l1.5-1.5M21 12H3"></path></svg>
        <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Strategy & Design</h3>
        <p class="font-lora text-base text-surface-900">Collaborative development of a bespoke strategy, outlining clear objectives, initiatives, and expected outcomes.</p>
      </div>
      <!-- Feature 3 -->
      <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_200ms]">
        <svg class="text-accent-500 text-5xl mb-4 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Implementation & Support</h3>
        <p class="font-lora text-base text-surface-900">Active partnership during execution, including change management, training, and ongoing performance monitoring.</p>
      </div>
      <!-- Feature 4 -->
      <div class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_300ms]">
        <svg class="text-accent-500 text-5xl mb-4 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Review & Optimization</h3>
        <p class="font-lora text-base text-surface-900">Regular evaluation of progress against KPIs, identifying areas for continuous improvement and long-term success.</p>
      </div>
    </div>
  </div>
</section>
```

#### **3.3. Stats/Numbers Bar (Animated Count-Up)**
Visually represents key metrics, building trust and showcasing impact. Requires a JavaScript component for the count-up animation.

**Tailwind/CSS Classes:**

```css
.grid.grid-cols-2.md:grid-cols-4.gap-8.text-center /* Responsive grid */
.font-inter.text-4xl.md:text-5xl.font-bold.text-primary-700 /* Number style */
.font-lora.text-lg.text-surface-900.mt-1 /* Label style */
.opacity-0.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards] /* Scroll-reveal for the block */
```

**Responsive Behavior:**
*   Collapses to 2 columns on mobile, expands to 4 on medium screens.

**Animation Notes:**
*   The entire stats bar should fade in on scroll.
*   The numbers themselves will need a JavaScript counter component (e.g., using `IntersectionObserver` to trigger a `requestAnimationFrame` loop).

**HTML Sketch:**

```html
<section class="py-16 md:py-24 bg-surface-100">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center opacity-0 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
      <div class="border-b md:border-b-0 md:border-r border-surface-200 pb-8 md:pb-0 md:pr-4">
        <span class="font-inter text-4xl md:text-5xl font-bold text-primary-700" data-count="150">0+</span>
        <p class="font-lora text-lg text-surface-900 mt-1">Successful Projects</p>
      </div>
      <div class="border-b md:border-b-0 md:border-r border-surface-200 pb-8 md:pb-0 md:pr-4">
        <span class="font-inter text-4xl md:text-5xl font-bold text-primary-700" data-count="20">0+</span>
        <p class="font-lora text-lg text-surface-900 mt-1">Years of Experience</p>
      </div>
      <div class="border-b md:border-b-0 md:border-r border-surface-200 pb-8 md:pb-0 md:pr-4">
        <span class="font-inter text-4xl md:text-5xl font-bold text-primary-700" data-count="95">0%</span>
        <p class="font-lora text-lg text-surface-900 mt-1">Client Retention Rate</p>
      </div>
      <div>
        <span class="font-inter text-4xl md:text-5xl font-bold text-primary-700" data-count="12">0M+</span>
        <p class="font-lora text-lg text-surface-900 mt-1">Value Generated</p>
      </div>
    </div>
  </div>
</section>

<!-- Example JS for count-up animation (would live in an Astro component script tag) -->
<script>
  function animateCountUp(element) {
    const target = parseInt(element.dataset.count);
    const suffix = element.innerText.includes('+') ? '+' : (element.innerText.includes('%') ? '%' : '');
    const duration = 1500; // milliseconds
    let start = 0;
    let startTime = null;

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      element.innerText = value + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(animateCountUp);
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  document.querySelectorAll('.grid.grid-cols-2.md\\:grid-cols-4').forEach(el => {
    statsObserver.observe(el);
  });
</script>
```

#### **3.4. Testimonial (Quote, Attribution)**
Showcases social proof with a large, elegant quote.

**Tailwind/CSS Classes:**

```css
.bg-surface-50.py-16.md:py-24.text-center /* Section wrapper */
.max-w-3xl.mx-auto /* Content width */
.font-lora.text-3xl.md:text-4xl.italic.text-surface-900.leading-relaxed.mb-6 /* Quote */
.flex.items-center.justify-center.mt-6 /* Attribution container */
.w-16.h-16.rounded-full.object-cover.mr-4 /* Avatar */
.font-inter.text-lg.font-medium.text-primary-700 /* Name */
.font-lora.text-base.text-surface-600 /* Title */
.opacity-0.translate-y-6.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards] /* Scroll-reveal */
```

**Responsive Behavior:**
*   Text sizes scale down for mobile.
*   Layout remains centered.

**Animation Notes:**
*   The entire testimonial block fades up on scroll.

**HTML Sketch (Centered):**

```html
<section class="py-16 md:py-24 bg-surface-50">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="max-w-3xl mx-auto text-center opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
      <blockquote class="font-lora text-3xl md:text-4xl italic text-surface-900 leading-relaxed mb-6">
        &ldquo;The Example Consulting Group provided unparalleled strategic clarity. Their insights were instrumental in navigating our market challenges and positioned us for significant growth.&rdquo;
      </blockquote>
      <div class="flex items-center justify-center mt-6">
        <img src="/path/to/client-avatar.jpg" alt="Client Name" class="w-16 h-16 rounded-full object-cover mr-4 shadow-sm">
        <div>
          <p class="font-inter text-lg font-medium text-primary-700">Dr. Anya Sharma</p>
          <p class="font-lora text-base text-surface-600">CEO, Tech Innovators Inc.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### **3.5. CTA Banner (Standout Section)**
A high-impact section designed to drive immediate user action.

**Tailwind/CSS Classes:**

```css
.py-20.md:py-28.bg-accent-500.text-white.text-center /* Section wrapper */
.max-w-4xl.mx-auto /* Content width */
.font-inter.text-3xl.md:text-4xl.font-semibold.leading-tight.mb-4 /* Headline */
.font-lora.text-lg.md:text-xl.mb-8.opacity-90 /* Subtext */
.inline-flex.items-center.bg-primary-700.hover:bg-primary-600.text-white.font-inter.font-medium.py-3.px-6.rounded-md.shadow-lg.transition-all.duration-300.ease-in-out.hover:shadow-xl.hover:-translate-y-0.5 /* Button */
.opacity-0.translate-y-6.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards] /* Scroll-reveal */
```

**Responsive Behavior:**
*   Padding adjusts, text scales down.
*   Layout remains centered.

**Animation Notes:**
*   The entire CTA banner should fade up on scroll.

**HTML Sketch:**

```html
<section class="py-20 md:py-28 bg-accent-500 text-white text-center">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="max-w-4xl mx-auto opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
      <h2 class="font-inter text-3xl md:text-4xl font-semibold leading-tight mb-4">
        Ready to Unlock Your Organization's Full Potential?
      </h2>
      <p class="font-lora text-lg md:text-xl mb-8 opacity-90">
        Connect with our experts today to discuss tailored strategies for your unique challenges.
      </p>
      <a href="/contact" class="inline-flex items-center bg-primary-700 hover:bg-primary-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5">
        Schedule a Consultation
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  </div>
</section>
```

#### **3.6. FAQ Accordion (Smooth Open/Close Animation)**
Provides an organized way to answer common questions, minimizing visual clutter.

**Tailwind/CSS Classes:**

```css
.border-b.border-surface-200.py-4 /* Container for each FAQ item */
.summary:font-inter.text-lg.font-semibold.text-primary-700.cursor-pointer.flex.justify-between.items-center /* Summary header */
.summary:hover:text-accent-500.transition-colors.duration-300.ease-in-out /* Hover for summary */
.transform.rotate-0.transition-transform.duration-300.ease-in-out /* Plus/minus icon */
.details[open] .rotate-45 /* Icon when open */
.font-lora.text-base.text-surface-900.mt-2.pb-2 /* Content body */
```

**Responsive Behavior:**
*   Maintains single-column layout.

**Animation Notes:**
*   The `details` element handles open/close natively. We enhance it with CSS for a smooth transition and icon rotation.
*   **Important:** Native `details/summary` elements are tricky to animate `height` smoothly. A common technique is to use `max-height` with `overflow: hidden` on the content `div`, but this often requires JavaScript to dynamically set `max-height` to the `scrollHeight` for a perfect animation. For simplicity here, we rely on the icon rotation and a subtle fade-in for content.

**HTML Sketch:**

```html
<section class="py-16 md:py-24 bg-surface-50">
  <div class="mx-auto max-w-3xl px-4 md:px-8 lg:px-12">
    <h2 class="font-inter text-3xl md:text-4xl font-semibold text-primary-700 text-center mb-12">
      Frequently Asked Questions
    </h2>
    <div class="space-y-4">
      <details class="border-b border-surface-200 py-4 opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
        <summary class="font-inter text-lg font-semibold text-primary-700 cursor-pointer flex justify-between items-center hover:text-accent-500 transition-colors duration-300 ease-in-out">
          What types of companies do you work with?
          <svg class="transform rotate-0 transition-transform duration-300 ease-in-out details-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </summary>
        <div class="font-lora text-base text-surface-900 mt-2 pb-2">
          We partner with a diverse range of organizations, from ambitious startups to established enterprises, across various industries. Our focus is on clients seeking strategic clarity and sustainable growth.
        </div>
      </details>

      <details class="border-b border-surface-200 py-4 opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_100ms]">
        <summary class="font-inter text-lg font-semibold text-primary-700 cursor-pointer flex justify-between items-center hover:text-accent-500 transition-colors duration-300 ease-in-out">
          What is your typical engagement process?
          <svg class="transform rotate-0 transition-transform duration-300 ease-in-out details-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </summary>
        <div class="font-lora text-base text-surface-900 mt-2 pb-2">
          Our process typically begins with a discovery phase, followed by strategic design, collaborative implementation, and ongoing performance review to ensure optimal results.
        </div>
      </details>

      <details class="border-b border-surface-200 py-4 opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards_200ms]">
        <summary class="font-inter text-lg font-semibold text-primary-700 cursor-pointer flex justify-between items-center hover:text-accent-500 transition-colors duration-300 ease-in-out">
          How do you measure success?
          <svg class="transform rotate-0 transition-transform duration-300 ease-in-out details-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </summary>
        <div class="font-lora text-base text-surface-900 mt-2 pb-2">
          We define clear, measurable KPIs at the outset of every engagement. Success is measured by achieving these targets and delivering tangible, sustainable value to your organization.
        </div>
      </details>
    </div>
  </div>
</section>

<!-- Custom CSS for icon animation -->
<style>
  details[open] .details-icon {
    transform: rotate(45deg); /* Plus to X */
  }
</style>
```

---

## 4. Navigation

Crucial for user experience, embodying clarity and professionalism.

---

### **Variations:**

#### **4.1. Header (Desktop: Transparent-on-Hero, Solid-on-Scroll)**
Provides an immersive experience on hero sections, then transitions to a stable, readable header.

**Tailwind/CSS Classes:**

```css
/* Initial State (transparent) */
.fixed.top-0.left-0.right-0.z-50.transition-all.duration-300.ease-in-out.py-4.md:py-6.bg-transparent

/* Scrolled State (apply via JS when scrolled past hero) */
.bg-surface-50.shadow-md.py-3.md:py-4

/* Inner Container */
.mx-auto.max-w-7xl.px-4.md:px-8.lg:px-12.flex.justify-between.items-center

/* Logo */
.h-8 /* Adjust as needed */

/* Nav Links */
.hidden.md:flex.space-x-8
.font-inter.text-primary-700.hover:text-accent-500.font-medium.transition-colors.duration-300.ease-in-out

/* CTA Button (Primary Button Style) */
.ml-8.bg-accent-500.hover:bg-accent-600.text-white.font-inter.font-medium.py-2.px-4.rounded-md.shadow-md.transition-all.duration-300.ease-in-out.hover:shadow-lg.hover:-translate-y-0.5
```

**Responsive Behavior:**
*   `md:hidden` for hamburger on mobile.
*   `md:flex` for desktop nav links.
*   Padding adjusts on scroll and breakpoint.

**Animation/Interaction Notes:**
*   The `bg-transparent` to `bg-surface-50` and `shadow-md` transition should be smooth (`duration-300`).
*   Requires JavaScript to detect scroll position and add/remove classes.

**HTML Sketch:**

```html
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 md:py-6 bg-transparent">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 flex justify-between items-center">
    <!-- Logo -->
    <a href="/" class="flex items-center">
      <img src="/path/to/logo-dark.svg" alt="Example Consulting Group Logo" class="h-8 md:h-9" id="header-logo">
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center">
      <ul class="flex space-x-8">
        <li><a href="/services" class="font-inter text-primary-700 hover:text-accent-500 font-medium transition-colors duration-300 ease-in-out">Services</a></li>
        <li><a href="/about" class="font-inter text-primary-700 hover:text-accent-500 font-medium transition-colors duration-300 ease-in-out">About Us</a></li>
        <li><a href="/case-studies" class="font-inter text-primary-700 hover:text-accent-500 font-medium transition-colors duration-300 ease-in-out">Case Studies</a></li>
        <li><a href="/insights" class="font-inter text-primary-700 hover:text-accent-500 font-medium transition-colors duration-300 ease-in-out">Insights</a></li>
      </ul>
      <a href="/contact" class="ml-8 bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
        Contact Us
      </a>
    </nav>

    <!-- Mobile Menu Button -->
    <button id="mobile-menu-button" class="md:hidden p-2 text-primary-700 hover:text-accent-500 transition-colors duration-300 ease-in-out">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
</header>

<!-- JavaScript for scroll behavior -->
<script>
  const header = document.getElementById('main-header');
  const logo = document.getElementById('header-logo');
  const scrollThreshold = 100; // px

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.remove('bg-transparent', 'py-4', 'md:py-6');
      header.classList.add('bg-surface-50', 'shadow-md', 'py-3', 'md:py-4');
      logo.src = '/path/to/logo-dark.svg'; // Ensure dark logo if using a light one for transparent
    } else {
      header.classList.remove('bg-surface-50', 'shadow-md', 'py-3', 'md:py-4');
      header.classList.add('bg-transparent', 'py-4', 'md:py-6');
      // If hero has dark overlay, change logo to white, else keep dark.
      // For this example, assuming dark logo always, or handling dynamically per page.
      logo.src = '/path/to/logo-dark.svg'; // Or '/path/to/logo-white.svg' if hero is dark
    }
  });
</script>
```

#### **4.2. Mobile Navigation (Full-Screen Overlay)**
A clean, accessible menu for mobile devices, triggered by a hamburger icon.

**Tailwind/CSS Classes:**

```css
/* Overlay Container (initially hidden) */
.fixed.inset-0.bg-primary-700/95.z-40.flex.flex-col.justify-center.items-center.text-white.transition-opacity.duration-300.ease-in-out.opacity-0.invisible
/* To show: opacity-100 visible */

/* Close Button */
.absolute.top-6.right-6.p-2.text-white.hover:text-accent-500.transition-colors.duration-300.ease-in-out

/* Menu Links */
.flex.flex-col.items-center.space-y-6
.font-inter.text-3xl.font-semibold.hover:text-accent-500.transition-colors.duration-300.ease-in-out

/* CTA Button (Primary Button Style - within mobile menu) */
.mt-8.bg-accent-500.hover:bg-accent-600.text-white.font-inter.font-medium.py-3.px-6.rounded-md.shadow-lg.transition-all.duration-300.ease-in-out.hover:shadow-xl.hover:-translate-y-0.5
```

**Responsive Behavior:**
*   Visible only on `md:hidden` breakpoints.

**Animation/Interaction Notes:**
*   Overlay fades in/out (`opacity` and `visibility`).
*   Hamburger icon transforms to an "X" on open.

**HTML Sketch:**

```html
<!-- Mobile Menu Overlay -->
<div id="mobile-menu-overlay" class="fixed inset-0 bg-primary-700/95 z-40 flex flex-col justify-center items-center text-white transition-opacity duration-300 ease-in-out opacity-0 invisible">
  <button id="mobile-menu-close" class="absolute top-6 right-6 p-2 text-white hover:text-accent-500 transition-colors duration-300 ease-in-out">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
  </button>
  <nav>
    <ul class="flex flex-col items-center space-y-6">
      <li><a href="/services" class="font-inter text-3xl font-semibold hover:text-accent-500 transition-colors duration-300 ease-in-out" onclick="closeMobileMenu()">Services</a></li>
      <li><a href="/about" class="font-inter text-3xl font-semibold hover:text-accent-500 transition-colors duration-300 ease-in-out" onclick="closeMobileMenu()">About Us</a></li>
      <li><a href="/case-studies" class="font-inter text-3xl font-semibold hover:text-accent-500 transition-colors duration-300 ease-in-out" onclick="closeMobileMenu()">Case Studies</a></li>
      <li><a href="/insights" class="font-inter text-3xl font-semibold hover:text-accent-500 transition-colors duration-300 ease-in-out" onclick="closeMobileMenu()">Insights</a></li>
      <li>
        <a href="/contact" class="mt-8 bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-3 px-6 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5" onclick="closeMobileMenu()">
          Contact Us
        </a>
      </li>
    </ul>
  </nav>
</div>

<!-- JavaScript for mobile menu toggle -->
<script>
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  function openMobileMenu() {
    mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
    mobileMenuOverlay.classList.add('opacity-100', 'visible');
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  }

  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('opacity-100', 'visible');
    mobileMenuOverlay.classList.add('opacity-0', 'invisible');
    document.body.style.overflow = '';
  }

  mobileMenuButton.addEventListener('click', openMobileMenu);
  mobileMenuClose.addEventListener('click', closeMobileMenu);
</script>
```

#### **4.3. Footer (Column Layout)**
A comprehensive footer providing essential navigation, contact, and legal information.

**Tailwind/CSS Classes:**

```css
.bg-primary-900.text-primary-100.py-16.md:py-20 /* Wrapper */
.mx-auto.max-w-7xl.px-4.md:px-8.lg:px-12 /* Inner Container */
.grid.grid-cols-1.md:grid-cols-4.gap-8.md:gap-12 /* Grid layout */
.h-8 /* Logo height */
.font-lora.text-sm.text-primary-200.mt-4 /* Copyright/description */
.font-inter.text-lg.font-semibold.mb-4 /* Column Titles */
.space-y-2 /* Link lists */
.font-lora.text-sm.text-primary-200.hover:text-accent-500.transition-colors.duration-300.ease-in-out /* Links */
.flex.space-x-4.mt-4 /* Social icons */
.text-primary-200.hover:text-accent-500.text-xl.transition-colors.duration-300.ease-in-out /* Social icon */
.border.border-primary-600.bg-primary-800.placeholder-primary-300.text-white.py-2.px-3.rounded-md.focus:outline-none.focus:ring-2.focus:ring-accent-300.focus:border-transparent /* Newsletter input */
.bg-accent-500.hover:bg-accent-600.text-white.py-2.px-4.rounded-md.font-medium.transition-colors.duration-300.ease-in-out /* Newsletter button */
```

**Responsive Behavior:**
*   Columns stack on mobile, then distribute into a grid on medium screens.

**Animation/Interaction Notes:**
*   Hover effects for links and social icons.

**HTML Sketch:**

```html
<footer class="bg-primary-900 text-primary-100 py-16 md:py-20">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
      <!-- Column 1: Logo & Description -->
      <div>
        <img src="/path/to/logo-white.svg" alt="Example Consulting Group Logo" class="h-8 md:h-9 mb-4">
        <p class="font-lora text-sm text-primary-200">
          Empowering leaders with strategic clarity and actionable insights for a future-proof business.
        </p>
        <p class="font-lora text-xs text-primary-400 mt-4">&copy; 2023 Example Consulting Group. All rights reserved.</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2">
          <li><a href="/services" class="font-lora text-sm text-primary-200 hover:text-accent-500 transition-colors duration-300 ease-in-out">Services</a></li>
          <li><a href="/about" class="font-lora text-sm text-primary-200 hover:text-accent-500 transition-colors duration-300 ease-in-out">About Us</a></li>
          <li><a href="/case-studies" class="font-lora text-sm text-primary-200 hover:text-accent-500 transition-colors duration-300 ease-in-out">Case Studies</a></li>
          <li><a href="/insights" class="font-lora text-sm text-primary-200 hover:text-accent-500 transition-colors duration-300 ease-in-out">Insights</a></li>
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4">Contact Us</h4>
        <address class="not-italic space-y-2">
          <p class="font-lora text-sm text-primary-200">123 Business Lane, Suite 400</p>
          <p class="font-lora text-sm text-primary-200">Munich, Germany 80331</p>
          <p><a href="tel:+49123456789" class="font-lora text-sm text-primary-200 hover:text-accent-500 transition-colors duration-300 ease-in-out">+49 123 4567 890</a></p>
          <p><a href="mailto:info@example.com" class="font-lora text-sm text-primary-200 hover:text-accent-500 transition-colors duration-300 ease-in-out">info@example.com</a></p>
        </address>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-primary-200 hover:text-accent-500 text-xl transition-colors duration-300 ease-in-out"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="text-primary-200 hover:text-accent-500 text-xl transition-colors duration-300 ease-in-out"><i class="fab fa-twitter"></i></a>
          <a href="#" class="text-primary-200 hover:text-accent-500 text-xl transition-colors duration-300 ease-in-out"><i class="fab fa-xing"></i></a>
        </div>
      </div>

      <!-- Column 4: Newsletter -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4">Stay Informed</h4>
        <p class="font-lora text-sm text-primary-200 mb-4">
          Subscribe to our newsletter for the latest insights and industry trends.
        </p>
        <form class="flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Your email address" class="flex-grow border border-primary-600 bg-primary-800 placeholder-primary-300 text-white py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent">
          <button type="submit" class="bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 ease-in-out">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</footer>
```

---

## 5. Cards

Versatile containers for presenting information concisely, from services and team members to blog posts and projects.

**Base Card Styles (apply to outer `div`):**

```css
.bg-surface-50.rounded-md.shadow-md.p-6.transition-all.duration-300.ease-in-out
.hover:shadow-lg.hover:-translate-y-1 /* Hover effect */
.opacity-0.translate-y-6.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards] /* Scroll-reveal */
```

**Content Hierarchy (inside card):**

```css
.font-inter.text-xl.font-semibold.text-primary-700.mb-2 /* Heading (e.g., h3) */
.font-lora.text-base.text-surface-900 /* Body text (e.g., p) */
```

**Responsive Behavior:**
*   Cards are typically within a grid, so their layout adjusts with the grid.
*   Internal padding `p-6` is consistent.

**Animation/Interaction Notes:**
*   Each card should fade up on scroll with a slight stagger.
*   Hover effects include a `shadow-lg` and `translate-y-1` lift.

---

### **Variations:**

#### **5.1. Card with Image Top**
Ideal for visual content like case study thumbnails, service previews, or blog post cards.

**HTML Sketch:**

```html
<div class="bg-surface-50 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
  <img src="/path/to/card-image.jpg" alt="Card title" class="w-full h-48 object-cover rounded-t-md">
  <div class="p-6">
    <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Strategic Insight Report</h3>
    <p class="font-lora text-base text-surface-900 mb-4">
      A comprehensive analysis of market shifts and competitive landscapes, offering actionable strategic recommendations.
    </p>
    <a href="#" class="font-inter text-accent-500 hover:text-accent-600 font-medium text-sm transition-colors duration-300 ease-in-out">
      Read More &rarr;
    </a>
  </div>
</div>
```

#### **5.2. Card with Icon/No Image (Text-Focused)**
Best for features, services, or team member bios where an icon provides quick visual context.

**HTML Sketch:**

```html
<div class="bg-surface-50 rounded-md shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
  <div class="flex items-center mb-4">
    <svg class="text-accent-500 text-4xl mr-4 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1L19 10.68M12 8V4m0 0c-1.389 6-5 6-5 6s3.21-2.91 5-4m-7 1.5l1.5-1.5M21 12H3"></path></svg>
    <h3 class="font-inter text-xl font-semibold text-primary-700">Digital Strategy</h3>
  </div>
  <p class="font-lora text-base text-surface-900 mb-4">
    Developing cutting-edge digital roadmaps to drive innovation and competitive advantage for your business.
  </p>
  <a href="#" class="font-inter text-accent-500 hover:text-accent-600 font-medium text-sm transition-colors duration-300 ease-in-out">
    Learn More &rarr;
  </a>
</div>
```

#### **5.3. Card with Subtle Accent Border**
Provides a visual differentiator without being overly decorative.

**Tailwind/CSS Classes (in addition to base):**

```css
.border-l-4.border-accent-500 /* Left border */
.hover:border-accent-600 /* Hover effect */
```

**HTML Sketch:**

```html
<div class="bg-surface-50 rounded-md shadow-md p-6 border-l-4 border-accent-500 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-accent-600 opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
  <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2">Operational Excellence</h3>
  <p class="font-lora text-base text-surface-900 mb-4">
    Streamlining processes and optimizing workflows to achieve peak efficiency and reduce operational costs.
  </p>
  <a href="#" class="font-inter text-accent-500 hover:text-accent-600 font-medium text-sm transition-colors duration-300 ease-in-out">
    Discover Solutions &rarr;
  </a>
</div>
```

---

## 6. Forms

Essential for user interaction, from contact forms to newsletter signups. Emphasize clarity, accessibility, and professional appearance.

**Global Animation Notes:**
*   Form fields get a subtle `ring-2 ring-accent-300` on focus.
*   Buttons have subtle lift and color shifts on hover.
*   Validation states should be clear and non-jarring.

---

### **Variations:**

#### **6.1. Standard Input Styling**
Clean, professional input fields with clear focus states.

**Tailwind/CSS Classes:**

```css
/* Label */
.block.text-sm.font-medium.text-surface-900.mb-1

/* Input/Textarea */
.block.w-full.border.border-surface-300.rounded-md.py-2.px-3.text-surface-900.placeholder-surface-400
.focus:outline-none.focus:ring-2.focus:ring-accent-300.focus:border-transparent
.transition-all.duration-200.ease-in-out

/* Error State */
.border-error.focus:ring-error.text-error-700 /* Apply these when error */
.text-sm.text-error /* Error message */
```

**HTML Sketch:**

```html
<div>
  <label for="name" class="block text-sm font-medium text-surface-900 mb-1">Full Name</label>
  <input type="text" id="name" name="name" placeholder="John Doe" class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
  <!-- <p class="text-sm text-error mt-1">Please enter your name.</p> -->
</div>

<div>
  <label for="message" class="block text-sm font-medium text-surface-900 mb-1">Your Message</label>
  <textarea id="message" name="message" rows="4" placeholder="How can we help you?" class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out"></textarea>
</div>
```

#### **6.2. Button Hierarchy**
Clear visual distinction for primary, secondary, and ghost actions.

**Tailwind/CSS Classes:**

```css
/* Base Button Styles (shared) */
.font-inter.font-medium.py-3.px-6.rounded-md.shadow-md.transition-all.duration-300.ease-in-out.hover:shadow-lg.hover:-translate-y-0.5.inline-flex.items-center.justify-center

/* Primary CTA */
.bg-accent-500.hover:bg-accent-600.text-white

/* Secondary CTA */
.bg-primary-700.hover:bg-primary-600.text-white

/* Ghost/Outline Button */
.bg-transparent.border.border-accent-500.text-accent-500.hover:bg-accent-50.hover:text-accent-600.shadow-none.hover:shadow-none.hover:translate-y-0
```

**HTML Sketch:**

```html
<div class="flex space-x-4">
  <button type="submit" class="font-inter font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white">
    Submit Inquiry
  </button>
  <button type="button" class="font-inter font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center bg-primary-700 hover:bg-primary-600 text-white">
    Learn More
  </button>
  <button type="button" class="font-inter font-medium py-3 px-6 rounded-md shadow-none transition-all duration-300 ease-in-out hover:shadow-none hover:translate-y-0 inline-flex items-center justify-center bg-transparent border border-accent-500 text-accent-500 hover:bg-accent-50 hover:text-accent-600">
    Cancel
  </button>
</div>
```

#### **6.3. Form Layout (Responsive Two-Column)**
For more complex forms, organizing fields into columns for desktop while maintaining a single column on mobile.

**Tailwind/CSS Classes:**

```css
.grid.md:grid-cols-2.gap-6.md:gap-8 /* Form grid */
```

**HTML Sketch:**

```html
<form class="space-y-6 bg-surface-50 p-8 rounded-md shadow-lg opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]">
  <div class="grid md:grid-cols-2 gap-6 md:gap-8">
    <div>
      <label for="first-name" class="block text-sm font-medium text-surface-900 mb-1">First Name</label>
      <input type="text" id="first-name" name="first-name" placeholder="John" class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
    </div>
    <div>
      <label for="last-name" class="block text-sm font-medium text-surface-900 mb-1">Last Name</label>
      <input type="text" id="last-name" name="last-name" placeholder="Doe" class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-surface-900 mb-1">Email Address</label>
      <input type="email" id="email" name="email" placeholder="john.doe@example.com" class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
    </div>
    <div>
      <label for="company" class="block text-sm font-medium text-surface-900 mb-1">Company Name</label>
      <input type="text" id="company" name="company" placeholder="Example Corp" class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
    </div>
  </div>
  <div>
    <label for="subject" class="block text-sm font-medium text-surface-900 mb-1">Subject</label>
    <input type="text" id="subject" name="subject" placeholder="Consulting Inquiry" class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
  </div>
  <div>
    <label for="message-form" class="block text-sm font-medium text-surface-900 mb-1">Your Message</label>
    <textarea id="message-form" name="message" rows="5" placeholder="Tell us about your needs..." class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out"></textarea>
  </div>
  <div class="text-right">
    <button type="submit" class="font-inter font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white">
      Send Message
    </button>
  </div>
</form>
```

---

## 7. Utility Patterns

Reusable classes and approaches for common design needs, ensuring consistency in animations and visual treatments.

---

### **7.1. Page Transition Wrapper**
Provides a subtle, elegant transition when navigating between pages.

**Tailwind/CSS Classes:**

```css
/* Apply to the main content wrapper of each page */
.opacity-0.animate-fade-in
```

**Custom CSS (add to global stylesheet, e.g., `src/styles/global.css`):**

```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 500ms ease-in-out forwards;
}
```

**Usage Note:**
*   Wrap your main `<slot />` or page content in an Astro layout with this class.
*   This is a client-side transition. For full SPA-like transitions in Astro, consider view transitions (built-in, or a library like `astro-spa`).

**HTML Sketch (Astro Layout example):**

```astro
---
// src/layouts/BaseLayout.astro
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title: string;
}

const { title } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | Example Consulting Group</title>
  <link rel="stylesheet" href="/global.css">
  <!-- Add font links here -->
</head>
<body>
  <Header />
  <main class="opacity-0 animate-fade-in"> // This applies the transition
    <slot />
  </main>
  <Footer />
</body>
</html>
```

### **7.2. Scroll-Reveal Animation Classes**
Implement the "gentle fade-up and slight vertical translation" described in the motion language. Best used with an IntersectionObserver to trigger the animation only when the element enters the viewport.

**Tailwind/CSS Classes:**

```css
/* Base state (hidden before animation) */
.opacity-0.translate-y-6

/* Animation utility (use with JavaScript IntersectionObserver) */
.motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]
/* For staggered animations, add style="--delay: 200ms;" */
```

**Custom CSS (add to global stylesheet, e.g., `src/styles/global.css`):**

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); } /* 24px = translate-y-6 */
  to { opacity: 1; transform: translateY(0); }
}

/* This is a utility for `motion-safe:animate-[...]` */
/* You will use the full class name in HTML:
   class="opacity-0 translate-y-6 motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]"
*/
/* The `forwards` ensures it stays at its final state */
```

**JavaScript (Example for an Astro component script tag):**

```js
// This script would typically be placed in an Astro component's <script> tag (client:load)
// or a global script.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-6');
      // Add the animation class dynamically
      entry.target.classList.add('motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]');
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

document.querySelectorAll('.opacity-0.translate-y-6').forEach(element => {
  observer.observe(element);
});
```

**Usage Note:**
*   Apply `opacity-0 translate-y-6` to any element you want to animate.
*   The JavaScript handles adding the animation class when it enters view.
*   For staggered effects, add `style="--delay: 100ms;"` (or `200ms`, etc.) to elements.

### **7.3. Responsive Image/Video Container (Aspect Ratio)**
Ensures images and videos maintain their aspect ratio while scaling, preventing content shifts.

**Tailwind/CSS Classes:**

```css
.relative.w-full.overflow-hidden
.pt-[56.25%] /* 16:9 aspect ratio */
.pt-[75%] /* 4:3 aspect ratio */
.pt-[100%] /* 1:1 aspect ratio (square) */

/* For the actual image/video inside */
.absolute.inset-0.w-full.h-full.object-cover
```

**HTML Sketch:**

```html
<!-- 16:9 Video -->
<div class="relative w-full overflow-hidden pt-[56.25%] rounded-md shadow-lg">
  <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<!-- 4:3 Image -->
<div class="relative w-full overflow-hidden pt-[75%] rounded-md shadow-lg">
  <img src="/path/to/image.jpg" alt="Responsive Image" class="absolute inset-0 w-full h-full object-cover">
</div>
```

### **7.4. Gradient Overlay Mixin (for Images/Heroes)**
Adds a subtle gradient overlay, often used to improve text readability on images or create visual depth.

**Tailwind/CSS Classes:**

```css
.absolute.inset-0.bg-gradient-to-t.from-primary-700/80.to-transparent /* Dark overlay */
.absolute.inset-0.bg-gradient-to-t.from-accent-500/70.to-transparent /* Accent overlay */
```

**HTML Sketch (example on an image):**

```html
<div class="relative h-72 rounded-sm overflow-hidden shadow-md">
  <img src="/path/to/background.jpg" alt="Background" class="absolute inset-0 w-full h-full object-cover">
  <div class="absolute inset-0 bg-gradient-to-t from-primary-700/80 to-transparent"></div>
  <div class="relative p-6 flex flex-col justify-end h-full text-white">
    <h3 class="font-inter text-2xl font-semibold">Our Strategic Approach</h3>
    <p class="font-lora text-sm opacity-90">Deep insights for complex challenges.</p>
  </div>
</div>
```

### **7.5. Badge/Tag/Chip Style**
Small, informative labels for categorization, status, or emphasis.

**Tailwind/CSS Classes:**

```css
/* Base */
.inline-flex.items-center.rounded-full.px-3.py-1.text-sm.font-medium

/* Primary Badge */
.bg-primary-100.text-primary-700

/* Accent Badge */
.bg-accent-100.text-accent-700

/* Outline Badge */
.border.border-surface-300.text-surface-900.bg-surface-50
```

**HTML Sketch:**

```html
<div class="flex space-x-2">
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700">
    Strategy
  </span>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-accent-100 text-accent-700">
    New
  </span>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium border border-surface-300 text-surface-900 bg-surface-50">
    Consulting
  </span>
</div>
```
```