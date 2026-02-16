---
id: builds.001.tasks:008-build-header-component
title: Build Header Component (src/components/Header.astro)
description: Create the site's main header, including navigation, logo, and responsive mobile menu.
sequence: 8
status: pending
type: build
subtype: task
relatesTo:
  - builds.001:queue
tags:
  - task
createdAt: "2026-02-16T05:42:05.985Z"
updatedAt: "2026-02-16T05:42:05.986Z"
---

## Context
The header is a critical component for site navigation and brand identity. This task implements the `Header (Desktop: Transparent-on-Hero, Solid-on-Scroll)` and `Mobile Navigation (Full-Screen Overlay)` patterns from `design/patterns.md`. It must be fully responsive, support i18n for links, and include the scroll-based style change behavior.

## Instructions
1.  Create a file at `src/components/Header.astro`.
2.  Copy the code from the Code Templates section below. This includes the HTML structure for the desktop header, mobile menu button, and the full-screen mobile overlay.
3.  The component accepts `currentLocale` as a prop to correctly generate links for either 'de' or 'en'.
4.  The `navLinks` object centralizes navigation data for easy management.
5.  The `<script>` tag contains the JavaScript for three key interactions:
    *   Changing the header's background and padding on scroll.
    *   Toggling the visibility of the mobile navigation overlay.
    *   Disabling body scroll when the mobile menu is open.

## Files to Create/Modify
*   `src/components/Header.astro` (Create)

## Code Templates
```astro
---
import { Icon } from 'astro-icon/components';

interface Props {
  currentLocale: 'de' | 'en';
}
const { currentLocale } = Astro.props;

const navLinks = {
  de: [
    { href: "/de/services", label: "Leistungen" },
    { href: "/de/work", label: "Projekte" },
    { href: "/de/about", label: "Über Uns" },
    { href: "/de/insights", label: "Einblicke" },
  ],
  en: [
    { href: "/en/services", label: "Services" },
    { href: "/en/work", label: "Our Work" },
    { href: "/en/about", label: "About Us" },
    { href: "/en/insights", label: "Insights" },
  ]
};

const contactLink = currentLocale === 'de' ? { href: '/de/contact', label: 'Kontakt' } : { href: '/en/contact', label: 'Contact Us' };
const otherLocale = currentLocale === 'de' ? 'en' : 'de';
---
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-6 text-white">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12 flex justify-between items-center">
    <a href={currentLocale === 'de' ? '/de' : '/en'} class="text-white" aria-label="Homepage">
      <span class="font-inter font-bold text-xl">InnovationHub</span>
    </a>

    <nav class="hidden md:flex items-center">
      <ul class="flex space-x-8">
        {navLinks[currentLocale].map(link => (
          <li><a href={link.href} class="font-inter font-medium hover:text-accent-300 transition-colors duration-300">{link.label}</a></li>
        ))}
      </ul>
      <a href={contactLink.href} class="ml-8 bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-2 px-5 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
        {contactLink.label}
      </a>
      <a href={`/${otherLocale}`} class="ml-6 font-inter font-medium uppercase hover:text-accent-300 transition-colors duration-300" lang={otherLocale}>
        {otherLocale}
      </a>
    </nav>

    <button id="mobile-menu-button" class="md:hidden p-2 -mr-2" aria-label="Open menu">
      <Icon name="lucide:menu" class="w-6 h-6"/>
    </button>
  </div>
</header>

<!-- Mobile Menu Overlay -->
<div id="mobile-menu-overlay" class="fixed inset-0 bg-primary-900/95 backdrop-blur-sm z-40 flex flex-col justify-center items-center text-white transition-opacity duration-300 ease-in-out opacity-0 invisible">
  <button id="mobile-menu-close" class="absolute top-7 right-4 p-2" aria-label="Close menu">
    <Icon name="lucide:x" class="w-8 h-8"/>
  </button>
  <nav>
    <ul class="flex flex-col items-center space-y-8 text-center">
      {navLinks[currentLocale].map(link => (
        <li><a href={link.href} class="font-inter text-3xl font-semibold hover:text-accent-300 transition-colors duration-300 mobile-nav-link">{link.label}</a></li>
      ))}
      <li>
        <a href={contactLink.href} class="mt-8 inline-block bg-accent-500 hover:bg-accent-600 text-white font-inter font-medium py-3 px-8 rounded-md shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-0.5 mobile-nav-link">
          {contactLink.label}
        </a>
      </li>
       <li>
        <a href={`/${otherLocale}`} class="mt-8 font-inter text-xl uppercase hover:text-accent-300 transition-colors duration-300 mobile-nav-link" lang={otherLocale}>
            Switch to {otherLocale.toUpperCase()}
        </a>
      </li>
    </ul>
  </nav>
</div>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const scrollThreshold = 50;
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > scrollThreshold;
      header.classList.toggle('bg-surface-50', isScrolled);
      header.classList.toggle('shadow-md', isScrolled);
      header.classList.toggle('text-primary-700', isScrolled);
      header.classList.toggle('text-white', !isScrolled);
      header.classList.toggle('py-6', !isScrolled);
      header.classList.toggle('py-4', isScrolled);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const openMobileMenu = () => {
      mobileMenuOverlay.classList.remove('opacity-0', 'invisible');
      document.body.style.overflow = 'hidden';
    };
    const closeMobileMenu = () => {
      mobileMenuOverlay.classList.add('opacity-0', 'invisible');
      document.body.style.overflow = '';
    };

    mobileMenuButton?.addEventListener('click', openMobileMenu);
    mobileMenuClose?.addEventListener('click', closeMobileMenu);
    mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  });
</script>
```

## Acceptance Criteria
*   The header component renders correctly on all pages.
*   On pages with a hero image, the header is transparent initially and becomes solid white with a shadow on scroll.
*   On pages without a hero image, the header is solid white from the start.
*   Navigation links are correct for the current locale (`de` or `en`).
*   The mobile menu button is visible only on smaller screens.
*   Clicking the mobile menu button opens a full-screen overlay with navigation links.
*   Clicking the close button or a navigation link within the overlay closes it.

## Rollback
*   Delete the `src/components/Header.astro` file.