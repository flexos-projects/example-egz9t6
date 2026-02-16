---
type: doc
subtype: reference
title: Generating an RSS Feed from Astro Content Collections
---

---
type: doc
subtype: guide
title: Generating an RSS Feed from Astro Content Collections
tags: [astro, rss, content-collections, feed, seo]
---

This guide provides the minimal, production-ready implementation for generating an RSS feed from an Astro content collection. It is designed for an AI code generator building a modern Astro 5 website.

### 1. Installation & Configuration

First, add the official Astro RSS package to your project.

**A. Install the Package**

```bash
# Using npm
npm install @astrojs/rss

# Using pnpm
pnpm add @astrojs/rss

# Using yarn
yarn add @astrojs/rss
```
*(Current version as of Q2 2024: `@astrojs/rss` ^2.4.4)*

**B. Configure `astro.config.mjs`**

The RSS package requires `site` to be defined in your Astro configuration to generate valid, absolute URLs for your feed items.

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // This is the most important step!
  // The RSS feed will not build without this.
  site: import.meta.env.SITE, // Your public domain
  // ... other configurations
});
```

**C. Set Environment Variable**

Create or update your `.env` file in the project root with your site's full URL.

```env
# .env
SITE="https://www.example-consulting.com"
```
Ensure there is no trailing slash.

### 2. Define Content Collection Schema

Define a schema for your blog posts to ensure all required data for the RSS feed is present and correctly typed.

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // pubDate is critical for RSS feeds and must be a valid Date object.
    pubDate: z.date(),
    author: z.string().default('Example Consulting Group'),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
```

### 3. Create an Example Blog Post

Ensure your content files match the schema defined above.

```md
---
// src/content/blog/first-post.md
title: "The Art of Strategic Clarity"
description: "In a complex market, the greatest advantage is clarity. Discover the frameworks we use to help leaders cut through the noise and make confident decisions."
pubDate: 2024-05-10
author: "Dr. Anna Müller"
heroImage: "/images/blog/strategic-clarity.jpg"
tags: ["Strategy", "Leadership"]
---

Your main blog content starts here. It will be rendered into HTML for the feed's `content` field.
```

### 4. Create the RSS Endpoint

This is a server endpoint that fetches your content and generates the `rss.xml` file. Astro uses file-based routing, so creating this file automatically creates the route.

**File:** `src/pages/rss.xml.ts`

```typescript
// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

// Import sanitize-html to prevent XSS attacks
// You might need to install it: pnpm add sanitize-html @types/sanitize-html
import sanitizeHtml from 'sanitize-html';

// Import the marked parser to render markdown
// You might need to install it: pnpm add marked @types/marked
import { marked } from 'marked';

export async function GET(context: APIContext) {
  // 1. Fetch all blog posts
  const blogPosts = await getCollection('blog');

  // 2. Sort posts by publication date (newest first)
  const sortedPosts = blogPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  // 3. Generate the RSS feed
  return rss({
    // (Required) Site title
    title: 'Example Consulting Group | Insights',
    // (Required) Site description
    description: 'Expert analysis and insights on digital strategy, leadership, and market trends from the team at Example Consulting Group.',
    // (Required) The site's base URL.
    // Astro.site is automatically pulled from your `astro.config.mjs` `site` property.
    site: context.site?.toString() ?? 'https://example.com', // Fallback for safety
    // (Required) List of RSS feed items
    items: sortedPosts.map((post) => ({
      // (Required) Title of the item
      title: post.data.title,
      // (Required) Publication date
      pubDate: post.data.pubDate,
      // (Required) A brief description of the item
      description: post.data.description,
      // (Required) A unique link to the item.
      // The `post.slug` is the filename without the extension.
      link: `/insights/${post.slug}/`,
      // (Optional) The full HTML content of the item.
      // This provides the full article in the RSS feed.
      content: sanitizeHtml(marked.parse(post.body)),
      // (Optional) Custom data for specific RSS readers
      customData: `<author>${post.data.author}</author>`
    })),
    // (Optional) Custom stylesheet for browser viewing
    stylesheet: '/rss/styles.xsl',
  });
}
```

### Gotchas & Common Mistakes

1.  **`Astro.site` is Missing:** The most common error. If `site` is not set in `astro.config.mjs`, the build will fail because the RSS feed cannot generate absolute URLs. Always set this value using an environment variable.

2.  **`pubDate` is a String, Not a Date:** The `pubDate` property in your collection's frontmatter **must be a valid `Date` object**. If it's just a string like `"2024-05-10"`, Astro's content collection will not parse it as a Date by default. Ensure your schema uses `z.date()` and your frontmatter is a valid date format (e.g., `YYYY-MM-DD`).

3.  **Relative vs. Absolute Links:** All `link` URLs in an RSS feed must be absolute. The pattern `link: \`/insights/${post.slug}/\`` works correctly because `@astrojs/rss` automatically prepends `Astro.site`. Do not manually add the full domain.

4.  **Unsanitized HTML in `content`:** If you include the full post body in the `content` field, it's crucial to render the Markdown to HTML and then **sanitize it**. Failing to do so can create invalid XML or open your feed to XSS vulnerabilities if your markdown ever includes user-generated content or scripts.

5.  **Verification:** After building, check your feed at `http://localhost:4321/rss.xml`. Copy the contents and paste them into an online validator like the [W3C Feed Validation Service](https://validator.w3.org/feed/) to ensure it's correctly formatted.