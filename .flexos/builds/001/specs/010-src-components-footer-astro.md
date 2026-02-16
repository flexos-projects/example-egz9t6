---
type: spec
subtype: build-spec
title: src/components/Footer.astro
phase: 3
priority: 2
---

## Files to Create/Modify
- `src/components/Footer.astro`

## Implementation Details
Build the site footer component exactly as specified in `design/patterns.md`, recipe `4.3`. It should have a four-column responsive layout. The component will display the company logo, a brief description, quick links, contact information, and a newsletter signup form. Icons for social media links should be implemented using `astro-icon`.

## Dependencies
- `src/layouts/BaseLayout.astro`
- `astro-icon` package

## Acceptance Criteria
- [ ] File exists at `src/components/Footer.astro`.
- [ ] The component has a `bg-primary-900` and `text-primary-100` base style.
- [ ] The layout is a 4-column grid on desktop and stacks to a single column on mobile.
- [ ] It displays all required content: logo, description, links, address, social icons, and newsletter form.
- [ ] Social media links use SVG icons from `astro-icon`.

## Code Patterns
```astro
---
import { Icon } from 'astro-icon/components';
const currentYear = new Date().getFullYear();
---
<footer class="bg-primary-900 text-primary-100 py-16 md:py-20">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
      <!-- Column 1: Logo & Description -->
      <div>
        <!-- SVG Logo (white version) -->
        <p class="font-lora text-sm text-primary-200 mt-4">Empowering leaders...</p>
        <p class="font-lora text-xs text-primary-400 mt-4">&copy; {currentYear} Example Consulting Group. All rights reserved.</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4">Quick Links</h4>
        <!-- ul with links -->
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4">Contact Us</h4>
        <address class="not-italic space-y-2">
            <!-- Contact details -->
        </address>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-primary-200 hover:text-accent-500 text-xl transition-colors duration-300 ease-in-out"><Icon name="mdi:linkedin" class="w-6 h-6" /></a>
          <a href="#" class="text-primary-200 hover:text-accent-500 text-xl transition-colors duration-300 ease-in-out"><Icon name="mdi:twitter" class="w-6 h-6" /></a>
        </div>
      </div>

      <!-- Column 4: Newsletter -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4">Stay Informed</h4>
        <p class="font-lora text-sm text-primary-200 mb-4">Subscribe...</p>
        <form class="flex flex-col sm:flex-row gap-2">
          <input type="email" placeholder="Your email address" class="flex-grow border border-primary-600 bg-primary-800 ...">
          <button type="submit" class="bg-accent-500 hover:bg-accent-600 ...">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</footer>
```