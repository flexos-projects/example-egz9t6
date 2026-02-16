---
type: doc
subtype: reference
title: Astro 5 Baseline Reference
---

Of course. As an expert Astro 5 and Tailwind CSS developer, I will generate the definitive baseline reference. This guide is tailored for Astro v5.17+ and Tailwind CSS v4, incorporating the specified versions and the project's "Quiet Confidence" design system.

The following is a production-quality, copy-paste-ready reference for an AI agent to build a modern, content-rich business website.

***

## Astro 5 + Tailwind 4: Definitive Baseline Reference

This document provides the foundational code patterns and configuration for building with Astro 5 and the next generation of Tailwind CSS. It is accurate for the specified 2025-2026 tech stack and integrates the "Example Consulting Group" design system.

### 1. `package.json`

This file defines the exact project dependencies and scripts. Note the use of `@tailwindcss/vite`, the official plugin for Tailwind 4.

```json
{
  "name": "example-consulting-group",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/check": "^0.8.2",
    "@astrojs/sitemap": "^3.7.0",
    "@astrojs/vercel": "^7.7.2",
    "astro": "^5.17.0",
    "sharp": "^0.33.5",
    "typescript": "^5.5.3"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0-alpha.17",
    "tailwindcss": "^4.0.0-alpha.17"
  }
}
```

### 2. `astro.config.mjs`

The Astro configuration file. It integrates Vercel for hosting, the sitemap generator, and the Tailwind CSS Vite plugin.

```javascript
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.example-consulting.com', // Replace with your final domain
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### 3. `src/styles/global.css`

This is the **single source of truth for Tailwind 4 configuration**. It replaces `tailwind.config.js`. The `@theme` block is where we define our design system tokens.

```css
/* Import Tailwind's base, components, and utilities */
@import 'tailwindcss';

/*
  Tailwind 4 Configuration Block.
  This @theme block replaces the traditional tailwind.config.js file.
  We are defining our design system tokens directly in CSS.
*/
@theme {
  extend: {
    /* Colors from the design system */
    colors: {
      primary: {
        50: '#E8EAF0',
        100: '#D1D5E1',
        200: '#A3ADC3',
        300: '#7584A5',
        400: '#475C87',
        500: '#193469',
        600: '#172E5D',
        700: '#142851',
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
        500: '#D4A056',
        600: '#B78746',
        700: '#9A7039',
        800: '#7D5A2F',
        900: '#604525',
        950: '#4C361D'
      },
      surface: {
        50: '#FFFFFF',
        100: '#F4F5F7',
        200: '#E9ECF0',
        300: '#D8DDE4',
        900: '#101828'
      },
      success: '#057A55',
      warning: '#D4A056',
      error: '#BE123C'
    },
    /* Typography from the design system */
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      lora: ['Lora', 'serif'],
    },
  }
}

/*
  Base layer customizations.
  Apply default fonts and styles to base HTML elements.
*/
@layer base {
  body {
    @apply font-lora bg-surface-50 text-surface-900 antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-inter font-semibold text-primary-700;
  }
}
```

### 4. Base Layout Pattern (`src/layouts/BaseLayout.astro`)

A foundational layout for all pages. It includes the `Seo` component, font preloading, `ViewTransitions` for smooth navigation, and a `<slot />` for page content.

```astro
---
import { ViewTransitions } from 'astro:transitions';
import Seo from '../components/Seo.astro';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonicalURL?: URL | string;
}

const { 
  title, 
  description, 
  ogImage,
  canonicalURL = Astro.url.href
} = Astro.props;
---
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    
    <!-- SEO Component -->
    <Seo title={title} description={description} ogImage={ogImage} canonicalURL={canonicalURL} />
    
    <!-- Font Preloading -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

    <!-- Global Styles -->
    <style is:global>
      @import '../styles/global.css';
    </style>

    <!-- View Transitions for smooth page loads -->
    <ViewTransitions />
  </head>
  <body>
    <!-- <Header /> would go here -->
    <main>
      <slot />
    </main>
    <!-- <Footer /> would go here -->
  </body>
</html>
```

### 5. Astro Component Syntax (`src/components/Card.astro`)

A standard, typed Astro component. It accepts props and renders HTML with Tailwind classes, following the project's design patterns.

```astro
---
interface Props {
  title: string;
  body: string;
  href: string;
}

const { title, body, href } = Astro.props;
---
<a href={href} class="group block bg-surface-50 rounded-md shadow-md p-6 border-l-4 border-accent-500 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-accent-600">
  <h3 class="font-inter text-xl font-semibold text-primary-700 mb-2 group-hover:text-accent-700 transition-colors duration-300">
    {title}
  </h3>
  <p class="font-lora text-base text-surface-900 mb-4">
    {body}
  </p>
  <span class="font-inter text-accent-500 group-hover:text-accent-600 font-medium text-sm transition-colors duration-300">
    Learn More &rarr;
  </span>
</a>
```

### 6. Image Optimization (`src/pages/image-demo.astro`)

Astro 5 uses `astro:assets` for powerful, build-time image optimization. Always import images and use the `<Image />` or `<Picture />` components.

```astro
---
import { Image } from 'astro:assets';
import BaseLayout from '../layouts/BaseLayout.astro';
import teamPhoto from '../assets/team-photo.jpg'; // Assuming this image exists
---
<BaseLayout title="Image Optimization Demo" description="Demonstrating astro:assets">
  <section class="py-24 px-8">
    <h1 class="text-4xl font-bold mb-8">Image Optimization with Astro 5</h1>
    
    <div class="space-y-12">
      <div>
        <h2 class="text-2xl font-semibold mb-4">Basic Optimized Image</h2>
        <p class="mb-4">Astro automatically creates optimized WebP versions, adds lazy loading, and prevents layout shift.</p>
        <Image 
          src={teamPhoto} 
          alt="A professional team collaborating in an office." 
          width={800} 
          height={600}
          class="rounded-md shadow-lg"
        />
      </div>

      <div>
        <h2 class="text-2xl font-semibold mb-4">Advanced with Quality and Format</h2>
        <p class="mb-4">Specify format and quality for finer control.</p>
        <Image 
          src={teamPhoto} 
          alt="A professional team collaborating in an office." 
          width={800}
          format="avif"
          quality={80}
          class="rounded-md shadow-lg"
        />
      </div>
    </div>
  </section>
</BaseLayout>
```

### 7. Content Collections (Astro 5)

Content Collections provide type-safety for local Markdown and MDX files. The configuration file location has changed in Astro 5.

#### `src/content.config.ts` (New location in Astro 5)

```typescript
import { defineCollection, z } from 'astro:content';

const insightsCollection = defineCollection({
  type: 'content', // 'content' for Markdown/MDX, 'data' for JSON/YAML
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string(),
    heroImage: image(), // The image() helper ensures the path is valid
  }),
});

export const collections = {
  'insights': insightsCollection,
};
```

#### Loading Content (`src/pages/insights/index.astro`)

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';

const allPosts = await getCollection('insights', ({ data }) => {
  // Filter out draft posts if you have a draft flag
  return data.draft !== true;
});
allPosts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
---
<BaseLayout title="Insights" description="Our latest articles on digital strategy.">
  <div class="py-24 px-8 max-w-4xl mx-auto">
    <h1 class="text-5xl font-bold mb-12">Insights Hub</h1>
    <ul class="space-y-8">
      {allPosts.map(post => (
        <li>
          <a href={`/insights/${post.slug}/`} class="block group">
            <h2 class="text-3xl font-semibold group-hover:text-accent-700">{post.data.title}</h2>
            <p class="text-lg text-surface-900/80 mt-2">{post.data.description}</p>
            <time class="text-sm text-surface-900/60 mt-2 block" datetime={post.data.publishDate.toISOString()}>
              {new Date(post.data.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </a>
        </li>
      ))}
    </ul>
  </div>
</BaseLayout>
```

### 8. Dynamic & API Routes

#### Dynamic Page (`src/pages/insights/[...slug].astro`)

```astro
---
import { getCollection, type CollectionEntry } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import { Image } from 'astro:assets';

export async function getStaticPaths() {
  const allPosts = await getCollection('insights');
  return allPosts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

type Props = {
  post: CollectionEntry<'insights'>;
}

const { post } = Astro.props;
const { Content } = await post.render();
---
<BaseLayout title={post.data.title} description={post.data.description}>
  <article class="max-w-prose mx-auto py-24 px-4">
    <Image 
      src={post.data.heroImage} 
      alt=""
      width={768} 
      class="rounded-md shadow-lg mb-8" 
    />
    <h1 class="text-4xl font-bold mb-4">{post.data.title}</h1>
    <p class="text-lg text-surface-900/70 mb-8">{post.data.publishDate.toDateString()}</p>
    
    <div class="prose prose-lg">
      <Content />
    </div>
  </article>
</BaseLayout>
```

#### API Route (`src/pages/api/health.ts`)

```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
```

### 9. SEO Best Practices

#### SEO Component (`src/components/Seo.astro`)

```astro
---
import type { Props as BaseLayoutProps } from '../layouts/BaseLayout.astro';

interface Props extends BaseLayoutProps {}

const { 
  title, 
  description, 
  ogImage = '/default-og-image.png', // Fallback OG image in public/
  canonicalURL
} = Astro.props;

const siteName = "Example Consulting Group";
const fullTitle = `${title} | ${siteName}`;
---

<!-- Primary Meta Tags -->
<title>{fullTitle}</title>
<meta name="title" content={fullTitle} />
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(ogImage, Astro.site)} />
<meta property="og:site_name" content={siteName} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={canonicalURL} />
<meta property="twitter:title" content={fullTitle} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={new URL(ogImage, Astro.site)} />

<!-- JSON-LD Structured Data for better SEO -->
<script type="application/ld+json" is:inline>
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteName,
  "url": Astro.site,
  "description": description
}
</script>
```

#### `public/robots.txt`

```
# Allow all crawlers access to all content
User-agent: *
Disallow:

# Sitemap location
Sitemap: https://www.example-consulting.com/sitemap-index.xml
```

### 10. Vercel Deployment

1.  **Configuration**: The `@astrojs/vercel/serverless` adapter in `astro.config.mjs` handles all necessary configuration for Vercel deployment.
2.  **Workflow**: Connect the GitHub repository to a Vercel project. Vercel will automatically detect it's an Astro project.
3.  **Build Command**: Vercel will correctly use `astro build`.
4.  **Output Directory**: Vercel's build system will automatically find the output in `.vercel/output/`.
5.  **Environment Variables**: Securely manage all API keys and secrets in the Vercel project settings. The code can access them via `import.meta.env.VARIABLE_NAME`.
6.  **Push to Deploy**: Pushing to the main branch will automatically trigger a production deployment. Pushing to other branches will create preview deployments.