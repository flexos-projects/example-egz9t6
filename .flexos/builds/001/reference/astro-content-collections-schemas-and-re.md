---
type: doc
subtype: reference
title: Astro Content Collections: Schemas and Relations
---

---

### **Reference: Astro Content Collections (Schemas & Relations)**

This guide provides the minimal, production-quality implementation for using Astro's Content Collections with Zod schemas and establishing relationships between different collections. This is based on **Astro v4.5+**.

---

### 1. Installation & Configuration

Astro's content collections are built-in. The only required dependency is `zod` for schema validation.

**1.1. Install Zod:**
```bash
npm install zod
```

**1.2. Configure Schemas:**
No changes are needed in `astro.config.mjs`. All schema definitions and collection configurations live in a dedicated file: `src/content/config.ts`.

---

### 2. Minimal Working Implementation

This example demonstrates a classic "Blog Posts" and "Authors" relationship. One Author can have many Posts.

#### **2.1. Project File Structure**

```
.
├── src/
│   ├── content/
│   │   ├── authors/
│   │   │   └── dr-anna-mueller.md
│   │   ├── posts/
│   │   │   └── strategic-clarity.md
│   │   └── config.ts  <-- Schema definitions here
│   └── pages/
│       └── blog/
│           └── index.astro  <-- Querying and rendering here
└── package.json
```

#### **2.2. Step 1: Define Schemas and Relations (`src/content/config.ts`)**

This file is the single source of truth for your content's structure. We define two collections, `authors` and `posts`, and create a reference from `posts` to `authors`.

```typescript
// src/content/config.ts
import { defineCollection, z, reference } from 'astro:content';

// 1. Define the 'authors' collection
const authorsCollection = defineCollection({
  type: 'content', // can be 'content' or 'data'
  schema: ({ image }) => z.object({
    name: z.string(),
    title: z.string(),
    // Use the image() helper for optimized images
    photo: image(),
  }),
});

// 2. Define the 'posts' collection
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    // This is the relation: it must be a valid slug from 'authors' collection
    author: reference('authors'), 
    tags: z.array(z.string()),
  }),
});

// 3. Export a `collections` object to register the collections
export const collections = {
  'authors': authorsCollection,
  'posts': postsCollection,
};
```

#### **2.3. Step 2: Create Content Files**

Create the content files using Markdown frontmatter that matches the Zod schemas. The filename (minus extension) becomes the slug/ID.

**Author Content (`src/content/authors/dr-anna-mueller.md`):**
Note that `dr-anna-mueller` is the slug.

```markdown
---
name: "Dr. Anna Müller"
title: "CEO & Founder"
photo: "./anna-mueller-portrait.jpg" 
---
Dr. Müller is a renowned expert in digital strategy and user experience...
```
*(Place a corresponding image file `anna-mueller-portrait.jpg` in the same `authors` directory).*

**Post Content (`src/content/posts/strategic-clarity.md`):**
The `author` field references the author's slug. Astro validates this link at build time.

```markdown
---
title: "The Power of Strategic Clarity"
pubDate: 2024-05-15
author: "dr-anna-mueller" 
tags: ["strategy", "consulting", "growth"]
---
In today's complex business landscape, strategic clarity is not a luxury; it's a necessity...
```

#### **2.4. Step 3: Query & Render in an Astro Component (`src/pages/blog/index.astro`)**

This component fetches all posts, then for each post, it fetches the related author data and renders the content.

```astro
---
import { getCollection, getEntry } from 'astro:content';
import { Image } from 'astro:assets';
import BaseLayout from '../../layouts/BaseLayout.astro'; // Assuming a base layout exists

// 1. Fetch all posts, sorted by publication date descending
const allPosts = await getCollection('posts', ({ data }) => {
    // Filter out draft posts in production if you add a `draft: true` field
    return import.meta.env.PROD ? data.draft !== true : true;
}).then(posts => posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()));

// 2. We will fetch the author for each post inside the map function below
---
<BaseLayout title="Insights Blog">
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-5xl font-bold font-inter mb-12 text-primary-700">Insights</h1>
    
    <ul class="space-y-12">
      {allPosts.map(async (post) => {
        // 3. For each post, fetch the full author entry using the reference
        const author = await getEntry(post.data.author);
        
        return (
          <li class="border-b border-surface-200 pb-8">
            <article>
              <a href={`/blog/${post.slug}/`} class="group">
                <h2 class="text-3xl font-semibold font-inter text-primary-700 group-hover:text-accent-600 transition-colors duration-300">
                  {post.data.title}
                </h2>
              </a>
              <div class="flex items-center mt-4 mb-4 text-sm text-surface-900 opacity-80">
                {author && (
                  <div class="flex items-center">
                    <Image 
                      src={author.data.photo} 
                      alt={`Photo of ${author.data.name}`}
                      width={40} 
                      height={40}
                      class="rounded-full mr-3" 
                    />
                    <span>{author.data.name} &bull;</span>
                  </div>
                )}
                <time datetime={post.data.pubDate.toISOString()} class="ml-2">
                  {new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(post.data.pubDate)}
                </time>
              </div>
              <p class="font-lora text-lg leading-extra-loose">
                {post.body.slice(0, 200)}...
              </p>
            </article>
          </li>
        )
      })}
    </ul>
  </div>
</BaseLayout>
```

---

### 3. Environment Variables

Core Content Collections functionality **does not require any environment variables**.

---

### 4. Gotchas & Common Mistakes

1.  **TypeScript Errors / Missing Types:** You **must** run `astro dev`, `astro build`, or `npx astro sync` for Astro to generate the types for your collections in `.astro/types.d.ts`. If your editor shows errors on `getCollection`, this is usually the reason.
2.  **Incorrect Image Paths:** The `image()` schema helper expects paths in the frontmatter to be **relative to the markdown file itself**.
3.  **Relation Querying (N+1 Problem):** Calling `await getEntry()` inside a `.map()` loop (as shown in the minimal example) is easy to understand but inefficient. For every post, it makes a separate request to get the author.
    *   **Pro Tip (Performant Approach):** Fetch all authors once and create a lookup map. This is much faster for larger sites.

    ```astro
    ---
    import { getCollection } from 'astro:content';

    const allPosts = await getCollection('posts');
    const allAuthors = await getCollection('authors');

    // Create a Map for fast lookups: authorSlug -> authorData
    const authorMap = new Map(allAuthors.map(author => [author.slug, author.data]));
    ---
    <!-- Inside your template -->
    {allPosts.map(post => {
      const author = authorMap.get(post.data.author.slug);
      return (
        <div>
          <h2>{post.data.title}</h2>
          <p>By {author?.name}</p>
        </div>
      )
    })}
    ```
4.  **Using `slug()` instead of `reference()`:** The `reference()` helper is the modern, type-safe way to define relations. It ensures the referenced slug actually exists in the target collection. Avoid using `z.string()` or the older `slug()` helper for relations.
5.  **Forgetting `type: 'content'`:** If your collection uses markdown files with body content, you must specify `type: 'content'`. Use `type: 'data'` for JSON/YAML files that have no `body`.