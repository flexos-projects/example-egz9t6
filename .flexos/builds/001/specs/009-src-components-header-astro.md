---
type: spec
subtype: build-spec
title: src/components/Header.astro
phase: 3
priority: 1
---

## Files to Create/Modify
- `src/components/Header.astro`

## Implementation Details
Build the site header component based on `design/patterns.md` recipes `4.1` and `4.2`. It must be fully responsive, showing nav links on desktop and a hamburger menu on mobile. A client-side script is required to manage two pieces of state: 1) the scroll position, to toggle the header's background from transparent to solid white, and 2) the mobile menu's open/closed state. The navigation links and language switcher must be generated dynamically based on the current page's locale.

## Dependencies
- `src/layouts/BaseLayout.astro`
- `astro-icon` package

## Acceptance Criteria
- [ ] File exists at `src/components/Header.astro`.
- [ ] On desktop, it displays the logo, navigation links, and a CTA button.
- [ ] On mobile, it displays the logo and a hamburger icon.
- [ ] The header is transparent on page load and becomes `bg-surface-50` with a `shadow-md` after scrolling `100px`.
- [ ] Clicking the hamburger icon opens a full-screen mobile menu overlay.
- [ ] Clicking the close button or a nav link in the overlay closes it.
- [ ] The language switcher correctly links to the equivalent page in the other locale.

## Code Patterns
```astro
---
// src/components/Header.astro
import { Icon } from 'astro-icon/components';

// This would be dynamic based on a nav config file
const navLinks = [
    { href: '/services', label: 'Services', deLabel: 'Leistungen' },
    { href: '/about', label: 'About Us', deLabel: 'Über uns' },
    // ...
];
const currentLocale = Astro.currentLocale;
---
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6">
    <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <!-- Logo -->
        <a href=`/${currentLocale}/` class="text-white" id="header-logo-container">
            <!-- SVG Logo Here -->
        </a>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center">
            <!-- Nav Links Loop -->
            <a href=`/${currentLocale}/contact` class="ml-8 ...">Contact Us</a>
        </nav>

        <!-- Mobile Button -->
        <button id="mobile-menu-button" class="md:hidden ...">
            <Icon name="mdi:menu" class="w-6 h-6" />
        </button>
    </div>
</header>
<!-- Mobile Menu Overlay -->
<div id="mobile-menu-overlay" class="fixed inset-0 ... opacity-0 invisible">
    <!-- Close button & Nav Links -->
</div>

<script>
    // JS for scroll behavior and mobile menu toggle from design/patterns.md
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.getElementById('main-header');
        const logoContainer = document.getElementById('header-logo-container');
        // ... rest of the script
    });
</script>
```