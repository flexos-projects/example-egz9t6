```markdown
---
type: spec
subtype: build-spec
title: src/utils/i18n.ts
phase: 2
priority: 4
---

## Files to Create/Modify
- `src/utils/i18n.ts`

## Implementation Details
Create a utility file for internationalization (i18n) helpers. This file will export two key functions:
1.  **`getLangFromUrl(url: URL): string`**: This function extracts the language code from the URL's pathname.
2.  **`getAlternateUrl({ locales, currentLocale, pathname }): { lang: string, url: string } | null`**: This function calculates the full URL for the alternate language version of the current page. It's essential for generating `hreflang` tags in the `SEO.astro` component. It should handle switching between `de` and `en` prefixes.

## Dependencies
- `astro.config.mjs` (for locale configuration)
- `src/components/SEO.astro`

## Acceptance Criteria
- [ ] File exists at `src/utils/i18n.ts`.
- [ ] It exports `getLangFromUrl` and `getAlternateUrl`.
- [ ] `getLangFromUrl` correctly returns the locale from a path like `/en/about`.
- [ ] `getAlternateUrl` returns the correct alternate URL and language code (e.g., for `/en/about` it returns `{ lang: 'de', url: '.../de/about' }`).
- [ ] The functions are pure, well-typed, and have no side effects.

## Code Patterns
```typescript
// src/utils/i18n.ts

/**
 * Extracts the language code from a URL's pathname.
 * e.g., "/en/about" -> "en"
 * e.g., "/de/leistungen" -> "de"
 */
export function getLangFromUrl(url: URL): string {
    const [, lang] = url.pathname.split('/');
    // Add logic here to validate it's a known lang, otherwise return default
    return lang;
}

interface AlternateUrlProps {
    locales: (string | undefined)[];
    currentLocale: string | undefined;
    pathname: string;
}

/**
 * Generates the URL for the alternate language version of the current page.
 * Essential for hreflang tags.
 */
export function getAlternateUrl({ locales, currentLocale, pathname }: AlternateUrlProps): { lang: string; url: string } | null {
    if (!currentLocale) return null;

    const otherLocale = locales.find(locale => locale !== currentLocale);
    if (!otherLocale) return null;

    const pathParts = pathname.split('/').filter(p => p);
    
    if (pathParts[0] === currentLocale) {
        pathParts[0] = otherLocale;
    } else {
        // This case might happen if prefixDefaultLocale is false, but we have it as true
        pathParts.unshift(otherLocale);
    }
    
    // This is a simplified example. A real implementation would need to handle slug translations.
    // For now, we assume slugs are the same across languages.
    const alternatePath = `/${pathParts.join('/')}`;
    
    return {
        lang: otherLocale,
        url: alternatePath,
    };
}
```
```