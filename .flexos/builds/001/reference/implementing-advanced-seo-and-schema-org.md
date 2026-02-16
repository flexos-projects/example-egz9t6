---
type: doc
subtype: reference
title: Implementing Advanced SEO and Schema.org in Astro
---

---
type: doc
subtype: guide
title: "Guide: Advanced SEO and Schema.org in Astro"
description: "A practical reference for implementing a dynamic, reusable SEO component in Astro 5 with Schema.org JSON-LD, Open Graph, Twitter Cards, and hreflang."
tags: [astro, seo, schema, json-ld, guide, technical]
relatesTo: [docs/core/007-technical.md]
---

This guide provides a production-ready approach for implementing advanced SEO features in an Astro 5 project. It focuses on creating a single, reusable component to manage standard meta tags, dynamic Open Graph and Twitter cards, `hreflang` for multilingual sites, and structured data via JSON-LD for various Schema.org types.

### 1. Installation & Configuration

Install the official Astro SEO package. It provides a foundational `<SEO />` component that handles most of the boilerplate.

```bash
# Using npm
npm install @astrojs/seo@^0.4.0

# Using pnpm
pnpm add @astrojs/seo@^0.4.0
```

**Note:** As of early 2024, `astro-seo` is a standalone community package that absorbed the official one. The installation command and usage remain consistent.

### 2. The Reusable `Seo.astro` Component

Create a reusable component that wraps the base `<SEO />` component and adds logic for dynamic Schema.org, `hreflang`, and more.

**File:** `src/components/Seo.astro`

```astro
---
import { SEO } from "@astrojs/seo";
import type { Props as SEOProps } from "@astrojs/seo";

// Define the schema types we'll support
type OrganizationSchema = {
  type: 'Organization';
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
};

type ServiceSchema = {
  type: 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
  };
};

type ArticleSchema = {
  type: 'Article';
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: {
    '@type': 'Person' | 'Organization';
    name: string;
    url?: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
};

export interface Props {
  title: string;
  description: string;
  ogImage?: {
    src: string;
    alt: string;
  };
  canonicalURL?: URL | string;
  schema?: OrganizationSchema | ServiceSchema | ArticleSchema;
  noindex?: boolean;
  nofollow?: boolean;
}

const {
  title,
  description,
  ogImage,
  canonicalURL,
  schema,
  noindex = false,
  nofollow = false,
} = Astro.props;

// --- Base SEO props for @astrojs/seo ---
const baseSeoProps: SEOProps = {
  title: title,
  description: description,
  canonical: canonicalURL?.toString() || Astro.url.href,
  noindex: noindex,
  nofollow: nofollow,
  openGraph: {
    basic: {
      title: title,
      description: description,
      type: "website",
      image: ogImage ? new URL(ogImage.src, Astro.site).href : '/default-og-image.png',
      // The alt text is automatically used by the component
    },
    // Optional: Add article-specific OG tags if the schema is an Article
    ...(schema?.type === 'Article' && {
      article: {
        publishedTime: schema.datePublished,
        modifiedTime: schema.dateModified,
        authors: [schema.author.name],
      }
    })
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    image: ogImage ? new URL(ogImage.src, Astro.site).href : '/default-og-image.png',
    imageAlt: ogImage?.alt || 'Decorative image',
  },
};

// --- Generate hreflang links if i18n is configured ---
// This requires i18n routing to be set up in astro.config.mjs
const alternateLinks = Astro.locals.getAlternateLinks ? Astro.locals.getAlternateLinks() : [];

// --- Generate JSON-LD Schema ---
let jsonLdSchema;
if (schema) {
  switch (schema.type) {
    case 'Organization':
      jsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: schema.name,
        url: schema.url,
        logo: new URL(schema.logo, Astro.site).href,
        sameAs: schema.sameAs,
      };
      break;
    case 'Service':
      jsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: schema.name,
        description: schema.description,
        provider: schema.provider,
        url: Astro.url.href,
      };
      break;
    case 'Article':
       jsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: schema.headline,
        description: schema.description,
        image: new URL(schema.image, Astro.site).href,
        datePublished: schema.datePublished,
        dateModified: schema.dateModified,
        author: schema.author,
        publisher: schema.publisher,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': Astro.url.href,
        }
       };
      break;
  }
}
---
<!-- 1. Render the base SEO component from the library -->
<SEO {...baseSeoProps} />

<!-- 2. Add hreflang links for multilingual sites -->
{alternateLinks.map(link => (
  <link rel="alternate" hreflang={link.hreflang} href={link.href} />
))}

<!-- 3. Inject the JSON-LD Schema -->
{jsonLdSchema && (
  <script type="application/ld+json" is:inline set:html={JSON.stringify(jsonLdSchema)} />
)}

```

### 3. Environment & Astro Configuration

For canonical URLs, OG images, and `hreflang` to work correctly, you **must** configure your `astro.config.mjs`.

**File:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import seo from '@astrojs/seo';

export default defineConfig({
  // This is REQUIRED for canonical URLs and OG images to be absolute.
  site: 'https://www.example.com',

  // This is REQUIRED for hreflang to work.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    // This is optional, but highly recommended for sitemaps.
    // sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en-US', de: 'de-DE' } } })
  ],
});
```

### 4. Gotchas & Common Mistakes

1.  **`Astro.site` is not set:** If you don't set the `site` property in `astro.config.mjs`, all your canonical URLs and Open Graph image paths will be relative (`/og-image.png`), which is incorrect. They **must be absolute** (`https://www.example.com/og-image.png`).
2.  **`hreflang` doesn't work:** The `Astro.locals.getAlternateLinks()` function only exists if you have configured `i18n` in `astro.config.mjs`. Without it, the function is undefined.
3.  **JSON-LD Script isn't rendered:** Make sure you use the `is:inline` directive on the `<script>` tag. Without it, Astro might try to process and bundle the script, which is not what you want for JSON-LD.
4.  **Testing is crucial:** Don't trust that it's working. Use these tools to validate:
    *   **Schema.org:** [Google Rich Results Test](https://search.google.com/test/rich-results)
    *   **Open Graph:** [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
    *   **Twitter Cards:** [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 5. Minimal Working Implementation

If you only need basic title, description, and Open Graph tags without schema or `hreflang`, the implementation is much simpler.

**Minimal Component:** `src/components/SimpleSeo.astro`
```astro
---
import { SEO } from "@astrojs/seo";

export interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---
<SEO
  title={title}
  description={description}
  openGraph={{
    basic: {
      title: title,
      description: description,
      type: 'website',
      image: new URL('/default-og-image.png', Astro.site).href,
    }
  }}
/>
```

**Usage in a Layout:** `src/layouts/Layout.astro`
```astro
---
import SimpleSeo from '../components/SimpleSeo.astro';
const { title, description } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <SimpleSeo title={title} description={description} />
</head>
<body>
    <slot />
</body>
</html>