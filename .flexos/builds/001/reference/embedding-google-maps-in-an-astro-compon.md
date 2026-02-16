---
type: doc
subtype: reference
title: Embedding Google Maps in an Astro Component
---

---

### **Reference: Embedding Google Maps in an Astro Component**

This guide details the minimal, performant, and secure method for embedding a responsive Google Maps iframe into an Astro 5 project. The approach uses the Google Maps Embed API, a lazy-loaded iframe for performance, and proper environment variable management.

---

#### **1. Installation & Configuration**

No external npm packages are required for this minimal implementation. Configuration is handled through the Google Cloud Console and your project's environment variables.

**Steps:**

1.  **Get an API Key:**
    *   Go to the [Google Cloud Console](https://console.cloud.google.com/).
    *   Create a new project or select an existing one.
    *   Navigate to **APIs & Services > Credentials**.
    *   Click **"Create Credentials" > "API key"**. Copy the generated key.

2.  **Enable the Maps Embed API:**
    *   Navigate to **APIs & Services > Library**.
    *   Search for "Maps Embed API" and enable it for your project.

3.  **Restrict the API Key (Crucial for Security):**
    *   Go back to **APIs & Services > Credentials**.
    *   Click the name of your new API key to edit it.
    *   Under **"Application restrictions,"** select **"HTTP referrers (web sites)"**.
    *   Add your website's domain(s) to the allowlist (e.g., `your-production-domain.com`, `*.vercel.app` for previews, and `localhost` for development).
    *   Under **"API restrictions,"** select **"Restrict key"** and choose only the **"Maps Embed API"**.
    *   Click **Save**.

---

#### **2. Environment Variables**

Store your API key securely in your project's root in a `.env` file.

1.  Create a `.env` file in your project root (if it doesn't exist).
2.  Add your API key, prefixed with `PUBLIC_` to make it accessible in client-side Astro components.

**.env**
```env
# Google Maps API Key for the embed feature
PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY_HERE"
```

> **Note:** Remember to add `.env` to your `.gitignore` file to avoid committing secrets to your repository. Create a `.env.example` file to document the required variable for other developers.

---

#### **3. Astro Component Example (`GoogleMap.astro`)**

This component is the core implementation. It's reusable, responsive, and lazy-loaded.

**File:** `src/components/GoogleMap.astro`

```astro
---
// src/components/GoogleMap.astro
interface Props {
  /** The search query for the map (e.g., "Space Needle, Seattle, WA" or a plus code). */
  query: string;
  /** Accessible title for the iframe, describing the map content. Required for a11y. */
  title: string;
  /** CSS aspect-ratio value (e.g., '16/9', '4/3', '1/1'). Defaults to '16/9'. */
  aspectRatio?: string;
  /** Additional classes to apply to the container div. */
  className?: string;
}

const { query, title, aspectRatio = '16/9', className } = Astro.props;

// Retrieve the public API key from environment variables
const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  // Fail gracefully in development if the key is missing
  if (import.meta.env.DEV) {
    return (
      <div class="error-container">
        <p><strong>Google Maps Error:</strong> API key is not configured.</p>
        <p>Please add <code>PUBLIC_GOOGLE_MAPS_API_KEY</code> to your <code>.env</code> file.</p>
      </div>
    );
  }
  // In production, render nothing to avoid showing a broken map.
  return null;
}

// Encode the query parameter to be URL-safe
const encodedQuery = encodeURIComponent(query);
const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedQuery}`;
---

<div class:list={["map-container", className]} style={`aspect-ratio: ${aspectRatio};`}>
  <iframe
    src={mapSrc}
    title={title}
    width="100%"
    height="100%"
    style="border:0;"
    allowfullscreen={false}
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  >
  </iframe>
</div>

<style>
  .map-container {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    background-color: var(--color-surface-200, #E9ECF0); /* Placeholder color from design system */
    border-radius: var(--radius-md, 8px); /* Optional: Use design tokens for shape */
  }

  .map-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .error-container {
    background-color: #fff5f5;
    border: 1px solid #fecaca;
    color: #b91c1c;
    padding: 1rem;
    border-radius: 8px;
    font-family: monospace;
  }
</style>
```

---

#### **4. Usage Example (`ContactPage.astro`)**

Here’s how to use the `GoogleMap` component on a contact page.

**File:** `src/pages/contact.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import GoogleMap from '../components/GoogleMap.astro';
---
<BaseLayout title="Contact Us">
  <section class="py-24">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <h1 class="text-4xl font-bold text-center">Our Location</h1>
      <p class="text-lg text-center mt-4 text-surface-900">Find us at our Munich office.</p>

      <div class="mt-12 rounded-md shadow-lg">
        <GoogleMap
          query="InnovationHub Solutions GmbH, Munich, Germany"
          title="Map showing the location of InnovationHub Solutions in Munich"
          aspectRatio="16/9"
        />
      </div>
    </div>
  </section>
</BaseLayout>
```

---

#### **5. Gotchas & Best Practices**

*   **`PUBLIC_` Prefix is Mandatory:** Forgetting the `PUBLIC_` prefix on your environment variable in `.env` is the most common mistake. Without it, `import.meta.env` will return `undefined` in the component.
*   **Performance is Key:** The `loading="lazy"` attribute on the `<iframe>` is essential. It tells the browser not to load the map until it's near the viewport, which significantly improves initial page load speed.
*   **Accessibility (`a11y`):** Always provide a descriptive `title` prop. This is crucial for screen reader users to understand the content of the iframe. The `title` should describe what the map shows, e.g., "Map of our downtown office."
*   **API Key Security:** Never commit your `.env` file to Git. Restricting your key in the Google Cloud Console to your specific domains is the most important security measure to prevent unauthorized use and unexpected billing.
*   **Billing:** The Google Maps Platform is a paid service with a free monthly credit. Ensure billing is enabled on your Google Cloud project and **set up budget alerts** to avoid surprises. The Embed API is generally free, but having a valid, billable account is required.
*   **Responsiveness:** The CSS `aspect-ratio` property is the modern, clean way to maintain the map's shape. It avoids old "padding-hack" solutions and results in a more stable layout with less CSS.