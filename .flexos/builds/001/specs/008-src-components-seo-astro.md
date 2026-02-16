---
type: spec
subtype: build-spec
title: src/components/SEO.astro
phase: 2
priority: 3
---

## Files to Create/Modify
- `src/components/SEO.astro`

## Implementation Details
Create a reusable component for managing all SEO-related metadata. It should accept props for title, description, image, and canonical URL. It must construct a full page title using a template (`[props.title] | InnovationHub Solutions`). It should also generate all necessary Open Graph and Twitter Card tags for rich social media sharing. `hreflang` links for i18n should be handled here by looking up the alternate page URL.

## Dependencies
- `astro.config.mjs` (for `site` URL)

## Acceptance Criteria
- [ ] File exists at `src/components/SEO.astro`.
- [ ] It accepts `title`, `description`, `image`, and `canonicalURL` props.
- [ ] It renders a `<title>` tag with the company name appended.
- [ ] It renders `<meta name="description">`.
- [ ] It renders a `<link rel="canonical">`.
- [ ] It renders all required OG tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`).
- [ ] It renders all required Twitter Card tags (`twitter:card`, `twitter:title`, etc.).

## Code Patterns
```astro
---
import { getAlternateUrl } from '../utils/i18n'; // Utility to be created

interface Props {
	title: string;
	description: string;
	image?: string;
    canonicalURL?: URL | string;
}

const { title, description, image, canonicalURL } = Astro.props;

const siteName = "InnovationHub Solutions GmbH";
const formattedTitle = `${title} | ${siteName}`;
const siteUrl = Astro.site;
const pageUrl = new URL(Astro.url.pathname, siteUrl);
const canonical = canonicalURL || pageUrl;
const socialImage = image ? new URL(image, siteUrl) : new URL('/social-default.png', siteUrl);

const alternateUrl = getAlternateUrl({
    locales: Astro.config.i18n.locales,
    currentLocale: Astro.currentLocale,
    pathname: Astro.url.pathname
});
---
<title>{formattedTitle}</title>
<meta name="description" content={description} />

<link rel="canonical" href={canonical} />

{alternateUrl && <link rel="alternate" hreflang={alternateUrl.lang} href={alternateUrl.url} />}

<!-- Open Graph -->
<meta property="og:title" content={formattedTitle} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonical} />
<meta property="og:image" content={socialImage} />
<meta property="og:type" content="website" />
<meta property="og:site_name" content={siteName} />
<meta property="og:locale" content={Astro.currentLocale === 'de' ? 'de_DE' : 'en_US'} />


<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={formattedTitle} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={socialImage} />
```