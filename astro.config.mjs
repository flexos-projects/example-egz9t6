```mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://innovationhub.solutions', // TODO: Replace with the final production domain
  output: 'server',
  adapter: vercel(),
  
  // Internationalization configuration
  i18n: {
    // The default language for the site
    defaultLocale: 'de',
    
    // A list of all supported languages
    locales: ['de', 'en'],
    
    routing: {
      // All routes will be prefixed with the locale, including the default 'de' locale.
      // e.g., /de/services, /en/services
      prefixDefaultLocale: true,
    }
  },

  integrations: [
    tailwind({
      // Do not apply Tailwind's base styles. We will handle base styles in `src/styles/global.css`.
      applyBaseStyles: false,
    }), 
    sitemap({
      // Configure i18n for the sitemap
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE', // Map 'de' to 'de-DE' for SEO best practices
          en: 'en-US', // Map 'en' to 'en-US'
        },
      },
    })
  ],
});
```