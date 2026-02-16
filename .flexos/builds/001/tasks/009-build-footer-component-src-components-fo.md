---
id: builds.001.tasks:009-build-footer-component
title: Build Footer Component (src/components/Footer.astro)
description: Create the site's main footer with navigation, contact info, and newsletter signup.
sequence: 9
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
The footer provides essential secondary navigation, contact information, and legal links. This task implements the `Footer (Column Layout)` pattern from `design/patterns.md`. The component must be responsive, stacking its columns on mobile devices, and must support i18n for all text content.

## Instructions
1.  Create a file at `src/components/Footer.astro`.
2.  Copy the code from the Code Templates section below into the file.
3.  The component uses a prop `currentLocale` to display text in either German or English.
4.  All text content is stored in the `footerContent` object, making it easy to manage translations.
5.  The layout uses a responsive grid that collapses to a single column on mobile.
6.  The newsletter form is included, pointing to a future API endpoint `/api/newsletter`.

## Files to Create/Modify
*   `src/components/Footer.astro` (Create)

## Code Templates
```astro
---
import { Icon } from 'astro-icon/components';

interface Props {
  currentLocale: 'de' | 'en';
}
const { currentLocale } = Astro.props;

const footerContent = {
  de: {
    description: "Wir befähigen Führungskräfte mit strategischer Klarheit und umsetzbaren Einblicken für ein zukunftssicheres Geschäft.",
    copyright: "© {year} InnovationHub Solutions GmbH. Alle Rechte vorbehalten.",
    quickLinks: "Quick Links",
    links: [
      { href: "/de/services", label: "Leistungen" },
      { href: "/de/about", label: "Über Uns" },
      { href: "/de/work", label: "Projekte" },
      { href: "/de/insights", label: "Einblicke" },
    ],
    contactUs: "Kontakt",
    address: ["Leopoldstraße 2", "80802 München", "Deutschland"],
    email: "info@innovationhub.de",
    phone: "+49 89 123 4567",
    newsletter: "Informiert bleiben",
    newsletterSub: "Abonnieren Sie unseren Newsletter für die neuesten Einblicke und Branchentrends.",
    newsletterPlaceholder: "Ihre E-Mail-Adresse",
    newsletterButton: "Abonnieren"
  },
  en: {
    description: "Empowering leaders with strategic clarity and actionable insights for a future-proof business.",
    copyright: "© {year} InnovationHub Solutions GmbH. All rights reserved.",
    quickLinks: "Quick Links",
    links: [
      { href: "/en/services", label: "Services" },
      { href: "/en/about", label: "About Us" },
      { href: "/en/work", label: "Our Work" },
      { href: "/en/insights", label: "Insights" },
    ],
    contactUs: "Contact Us",
    address: ["Leopoldstraße 2", "80802 Munich", "Germany"],
    email: "info@innovationhub.com",
    phone: "+49 89 123 4567",
    newsletter: "Stay Informed",
    newsletterSub: "Subscribe to our newsletter for the latest insights and industry trends.",
    newsletterPlaceholder: "Your email address",
    newsletterButton: "Subscribe"
  }
};
const content = footerContent[currentLocale];
const currentYear = new Date().getFullYear();
---
<footer class="bg-primary-900 text-primary-100 py-16 md:py-20">
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      <!-- Column 1: Logo & Description -->
      <div>
        <a href={currentLocale === 'de' ? '/de' : '/en'} class="text-white font-inter font-bold text-xl mb-4 inline-block" aria-label="Homepage">
          InnovationHub
        </a>
        <p class="font-lora text-sm text-primary-200">{content.description}</p>
        <p class="font-lora text-xs text-primary-400 mt-4">{content.copyright.replace('{year}', currentYear.toString())}</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4 text-white">{content.quickLinks}</h4>
        <ul class="space-y-2">
          {content.links.map(link => (
            <li><a href={link.href} class="font-lora text-sm text-primary-200 hover:text-accent-300 transition-colors duration-300 ease-in-out">{link.label}</a></li>
          ))}
        </ul>
      </div>

      <!-- Column 3: Contact -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4 text-white">{content.contactUs}</h4>
        <address class="not-italic space-y-2">
          {content.address.map(line => <p class="font-lora text-sm text-primary-200">{line}</p>)}
          <p><a href=`mailto:${content.email}` class="font-lora text-sm text-primary-200 hover:text-accent-300 transition-colors duration-300 ease-in-out">{content.email}</a></p>
          <p><a href=`tel:${content.phone.replace(/\s/g, '')}` class="font-lora text-sm text-primary-200 hover:text-accent-300 transition-colors duration-300 ease-in-out">{content.phone}</a></p>
        </address>
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-primary-200 hover:text-accent-300 text-xl transition-colors duration-300 ease-in-out" aria-label="LinkedIn"><Icon name="lucide:linkedin" /></a>
          <a href="#" class="text-primary-200 hover:text-accent-300 text-xl transition-colors duration-300 ease-in-out" aria-label="Xing"><Icon name="lucide:mail" /></a>
        </div>
      </div>

      <!-- Column 4: Newsletter -->
      <div>
        <h4 class="font-inter text-lg font-semibold mb-4 text-white">{content.newsletter}</h4>
        <p class="font-lora text-sm text-primary-200 mb-4">{content.newsletterSub}</p>
        <form action="/api/newsletter" method="post" class="flex flex-col sm:flex-row gap-2">
          <input type="email" name="email" placeholder={content.newsletterPlaceholder} required class="flex-grow border border-primary-600 bg-primary-800 placeholder-primary-300 text-white py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent">
          <button type="submit" class="bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-md font-medium transition-colors duration-300 ease-in-out">{content.newsletterButton}</button>
        </form>
      </div>
    </div>
  </div>
</footer>
```

## Acceptance Criteria
*   The footer component renders correctly at the bottom of all pages.
*   The layout is a 4-column grid on desktop and stacks to a single column on mobile.
*   All links are functional.
*   All text content correctly switches between German and English based on the `currentLocale` prop.
*   The copyright year is dynamically generated and correct.

## Rollback
*   Delete the `src/components/Footer.astro` file.