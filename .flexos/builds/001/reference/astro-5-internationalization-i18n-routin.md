---
type: doc
subtype: reference
title: Astro 5 Internationalization (i18n) Routing for DE/EN
---

---

### **Astro 5+ Internationalization (i18n) Guide (DE/EN)**

**Version Grounding:** This guide is based on the stable i18n routing features introduced in Astro 4.x and is forward-compatible with Astro 5. All APIs and configurations are current as of the latest Astro 4 releases.

This document provides the minimal, production-quality implementation for a bilingual German (DE) and English (EN) website using Astro's built-in i18n routing.

---

### 1. Installation & Configuration

No external `npm` package is required. Internationalization is a built-in feature of the Astro framework.

Configuration is done entirely within `astro.config.mjs`.

**File:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    // The default language for your site
    defaultLocale: 'en',
    
    // A list of all supported languages
    locales: ['en', 'de'],

    // Configuration for URL routing
    routing: {
      // When false, the default locale will not have a prefix.
      // e.g. /about (for English) vs /de/ueber-uns (for German)
      // This is the most common and SEO-friendly strategy.
      prefixDefaultLocale: false,

      // When true, all routes will be prefixed with the locale.
      // e.g. /en/about and /de/ueber-uns
      // Use this if you want no un-prefixed routes.
      // prefixDefaultLocale: true,
    }
  }
});
```

---

### 2. Code Example & File Structure

Astro's i18n routing works with a dynamic `[lang]` parameter in your page routes.

#### **Required File Structure**

Create a `[lang]` directory inside `src/pages/` and move your pages into it.

```plaintext
src/
└── pages/
    └── [lang]/
        ├── index.astro
        ├── about.astro
        └── contact.astro
```

#### **Minimal Working Page Example**

This single file demonstrates how to get the current language, display translated content, link to other localized pages, and include a language switcher.

**File:** `src/pages/[lang]/index.astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';

// 1. Get the current language from Astro's global
const lang = Astro.currentLocale as 'en' | 'de';

// 2. Define page content for each language
// In a real app, this would come from a CMS or markdown files.
const content = {
  en: {
    title: "Welcome to Our Website!",
    description: "This is the homepage of our modern, bilingual Astro site.",
    aboutLinkText: "Learn More About Us",
  },
  de: {
    title: "Willkommen auf unserer Webseite!",
    description: "Dies ist die Startseite unserer modernen, zweisprachigen Astro-Seite.",
    aboutLinkText: "Erfahren Sie mehr über uns",
  },
};

// 3. Helper function to create localized URLs
// This respects the `prefixDefaultLocale` setting from your config.
const getLocaleUrl = (path: string) => {
  // Astro's `getLocale` function is not available on the global, so we construct it.
  // This is a simple but robust way to handle it.
  if (lang === 'en') { // 'en' is the defaultLocale
    return path;
  }
  return `/${lang}${path}`;
}
---

<BaseLayout title={content[lang].title} description={content[lang].description}>
  <main class="py-20 text-center">
    <!-- Translated Content -->
    <h1 class="text-4xl font-bold">{content[lang].title}</h1>
    <p class="text-lg mt-4">{content[lang].description}</p>

    <!-- Localized Link -->
    <a href={getLocaleUrl('/about')} class="mt-8 inline-block bg-blue-600 text-white px-6 py-2 rounded">
      {content[lang].aboutLinkText}
    </a>

    <!-- Language Switcher Component -->
    <div class="mt-12">
      <h2 class="text-sm uppercase tracking-wider text-gray-500">Switch Language</h2>
      <nav class="flex justify-center gap-4 mt-2">
        {
          Astro.getAbsoluteLocaleUrlList().map(url => (
            <a 
              href={url}
              class:list={[
                "px-3 py-1 rounded",
                { "bg-gray-200 font-bold": url.endsWith(`/${lang}/`) || (lang === 'en' && url === '/') }
              ]}
            >
              {url.split('/')[1]?.toUpperCase() || 'EN'}
            </a>
          ))
        }
      </nav>
    </div>
  </main>
</BaseLayout>
```

---

### 3. Environment Variables

For Astro's built-in i18n routing, **no environment variables are required.**

However, if you are fetching translations from a headless CMS (like Contentful, Sanity, or Storyblok), you would store API keys and space IDs here.

**File:** `.env` (example for a headless CMS)

```
# .env
# Not needed for basic i18n, but used for CMS integration
CONTENTFUL_SPACE_ID="your_space_id"
CONTENTFUL_DELIVERY_TOKEN="your_delivery_api_token"
```

---

### 4. Gotchas & Common Mistakes

1.  **Incorrect File Path:** The most common error is forgetting to put pages inside the `src/pages/[lang]/` directory. A page at `src/pages/about.astro` will NOT be part of the i18n routing system.

2.  **Hardcoding Links:** **Do not** manually create links like `<a href="/de/about">`. This breaks if you ever change `prefixDefaultLocale` to `true`. Always use a helper function (like `getLocaleUrl` in the example) that respects your configuration.

3.  **Missing `hreflang` Tags:** You don't need to add them manually. As long as your pages are in the `[lang]` directory, Astro **automatically generates** the correct `hreflang` tags in the `<head>`, which is critical for SEO.

4.  **`Astro.currentLocale` vs. `Astro.locals.lang`:** In `.astro` pages, use `Astro.currentLocale`. If you are working in middleware (`src/middleware.js`), you would access the language via `context.locals.lang`.

5.  **Fallback Content:** The minimal example uses a simple dictionary. If a key is missing for one language (e.g., `content.de.title` is undefined), it will cause a runtime error. A robust implementation should include a fallback mechanism:
    ```javascript
    const t = content[lang] || content.en; // Fallback to English if lang content is missing
    ```

---

### 5. Summary: The Minimal Working Implementation

1.  **Configure `astro.config.mjs`:**
    ```javascript
    // astro.config.mjs
    export default defineConfig({
      i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        routing: {
          prefixDefaultLocale: false,
        }
      }
    });
    ```

2.  **Organize Files:**
    ```
    src/pages/[lang]/index.astro
    ```

3.  **Use `Astro.currentLocale` in your page to get the language and display the correct content.**
    ```astro
    ---
    const lang = Astro.currentLocale; // 'en' or 'de'
    ---
    <h1>{lang === 'en' ? 'Hello' : 'Hallo'}</h1>
    ```