---
type: spec
subtype: build-spec
title: src/layouts/BaseLayout.astro
phase: 2
priority: 2
---

## Files to Create/Modify
- `src/layouts/BaseLayout.astro`

## Implementation Details
Create the main layout component that will wrap every page. It should set up the HTML document structure, import global styles and fonts, and include the `Header`, `Footer`, and `SEO` components. The `lang` attribute on the `<html>` tag must be set dynamically based on the current page's locale. The `<main>` tag should have the `animate-fade-in` class for page transitions.

## Dependencies
- `src/styles/global.css`
- `src/components/SEO.astro` (to be created)
- `src/components/Header.astro` (to be created)
- `src/components/Footer.astro` (to be created)

## Acceptance Criteria
- [ ] File exists at `src/layouts/BaseLayout.astro`.
- [ ] It accepts `title` and `description` props (and others for SEO).
- [ ] The `<html>` tag's `lang` attribute is correctly set to the current locale (`Astro.currentLocale`).
- [ ] It imports and uses the `SEO`, `Header`, and `Footer` components.
- [ ] A `<slot />` is present inside the `<main>` tag to render page content.
- [ ] The `<main>` tag has the class `opacity-0 animate-[fade-in_500ms_ease-in-out_forwards]`.

## Code Patterns
```astro
---
import SEO from '../components/SEO.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

interface Props {
	title: string;
	description: string;
    image?: string;
    // Add other SEO props as needed
}

const { title, description, image } = Astro.props;
const lang = Astro.currentLocale || 'de';
---
<!DOCTYPE html>
<html lang={lang} class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <SEO title={title} description={description} image={image} />
    
    <!-- Preload fonts to improve performance -->
    <link rel="preload" href="/fonts/inter-v13-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/lora-v32-latin-regular.woff2" as="font" type="font/woff2" crossorigin>
</head>
<body class="bg-surface-50">
    <Header />
    <main class="opacity-0 animate-[fade-in_500ms_ease-in-out_forwards]">
        <slot />
    </main>
    <Footer />
    <script>
      // Add client-side scripts for scroll animations here if needed globally
    </script>
</body>
</html>
```