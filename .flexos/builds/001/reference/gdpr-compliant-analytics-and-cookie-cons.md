---
type: doc
subtype: reference
title: GDPR-Compliant Analytics and Cookie Consent in Astro
---

---

### **Reference: GDPR-Compliant Analytics & Cookie Consent in Astro**

This guide provides the minimal, production-quality implementation for adding privacy-focused analytics and a GDPR-compliant cookie consent banner to the "Example Consulting Group" website.

*   **Analytics:** Plausible Analytics (`astro-plausible` integration). It is cookie-less and respects user privacy by default.
*   **Consent Banner:** A custom Astro component with vanilla JavaScript. It blocks scripts from loading until explicit user consent is given, storing the choice in `localStorage`.

---

### **1. Plausible Analytics Integration**

Plausible is a lightweight, open-source, and privacy-friendly Google Analytics alternative. It does not use cookies, making it a strong choice for GDPR compliance.

#### **1.1. Installation**

Install the official Astro integration for Plausible.

```bash
npm install astro-plausible
```

#### **1.2. Configuration**

Add the integration to your `astro.config.mjs` file. We will configure it to be self-hosted, which is best practice for avoiding ad-blockers and maintaining full data ownership.

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import plausible from 'astro-plausible'; // Import the integration

export default defineConfig({
  integrations: [
    tailwind(),
    plausible({
      // Set to true to proxy the script through your domain
      // This is enabled by default but explicitly set here for clarity
      proxy: true, 
      
      // We will manually inject the script based on consent,
      // so we disable the automatic injection.
      injectScript: false,
    }),
  ],
});
```

#### **1.3. Environment Variables**

Add the following to your `.env` file. These are required for the Plausible integration to function.

```env
# .env
# The domain of your website as configured in your Plausible dashboard.
PLAUSIBLE_DOMAIN="your-domain.com" 

# The API host for Plausible. For cloud users, it's plausible.io.
# For self-hosted, use your own domain.
PLAUSIBLE_API_HOST="plausible.io" 
```

---

### **2. GDPR Cookie Consent Banner**

This is a self-contained Astro component that manages user consent. It uses vanilla JavaScript and is styled with Tailwind CSS according to the project's design system.

#### **2.1. Create the Component**

Create the following file: `src/components/CookieConsentBanner.astro`

```astro
---
// src/components/CookieConsentBanner.astro
---
<div 
  id="cookie-consent-banner" 
  class="fixed bottom-0 left-0 right-0 bg-primary-900 text-primary-100 p-6 z-[100] transform translate-y-full transition-transform duration-500 ease-in-out motion-safe:animate-[fade-in-up_500ms_ease-out_forwards]"
  role="dialog"
  aria-modal="true"
  aria-labelledby="cookie-consent-title"
  aria-describedby="cookie-consent-description"
  hidden
>
  <div class="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-center md:text-left">
        <h2 id="cookie-consent-title" class="font-inter text-lg font-semibold text-white">Privacy & Analytics</h2>
        <p id="cookie-consent-description" class="font-lora text-sm text-primary-200 mt-1 max-w-3xl">
          We use privacy-friendly analytics to understand how our site is used and improve our content. This helps us serve you better. We do not use tracking cookies. You can accept or decline this anonymous tracking.
        </p>
      </div>
      <div class="flex-shrink-0 flex items-center gap-4">
        <button 
          id="cookie-consent-decline"
          class="font-inter font-medium py-2 px-5 rounded-md transition-colors duration-300 ease-in-out text-primary-200 hover:text-white hover:bg-primary-700"
        >
          Decline
        </button>
        <button 
          id="cookie-consent-accept"
          class="font-inter font-medium py-2 px-5 rounded-md shadow-md transition-all duration-300 ease-in-out bg-accent-500 hover:bg-accent-600 text-white hover:shadow-lg hover:-translate-y-0.5"
        >
          Accept
        </button>
      </div>
    </div>
  </div>
</div>

<script is:inline>
  const banner = document.getElementById('cookie-consent-banner');
  const acceptBtn = document.getElementById('cookie-consent-accept');
  const declineBtn = document.getElementById('cookie-consent-decline');
  const CONSENT_KEY = 'cookie_consent_status';

  function showBanner() {
    banner.hidden = false;
    // Delay slightly to allow the initial transform to apply before transitioning
    setTimeout(() => {
      banner.style.transform = 'translateY(0)';
    }, 100);
  }

  function hideBanner() {
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => {
      banner.hidden = true;
    }, 500); // Match transition duration
  }

  function setConsent(status) {
    localStorage.setItem(CONSENT_KEY, status);
    hideBanner();
    if (status === 'granted') {
      // Fire a custom event that the layout script can listen for
      // to inject analytics or other scripts.
      window.dispatchEvent(new CustomEvent('consent-granted'));
    }
  }

  acceptBtn.addEventListener('click', () => setConsent('granted'));
  declineBtn.addEventListener('click', () => setConsent('denied'));

  // On page load, check for consent status
  const currentConsent = localStorage.getItem(CONSENT_KEY);
  if (!currentConsent) {
    showBanner();
  } else if (currentConsent === 'granted') {
    // If consent is already granted, fire the event immediately on page load.
    window.dispatchEvent(new CustomEvent('consent-granted'));
  }
</script>
```

#### **2.2. Gotchas & Common Mistakes**

*   **`is:inline` is critical:** The `<script>` tag *must* have the `is:inline` directive. This prevents Astro from bundling and deferring the script, ensuring it runs immediately to check consent status before the rest of the page loads.
*   **Don't check `localStorage` on the server:** An Astro component's template (`---` block) runs on the server. You cannot access `localStorage` there. All logic must be in the client-side `<script is:inline>`.
*   **Styling:** The `translate-y-full` and `hidden` initial state ensures there's no "flash" of the banner on page load for users who have already consented.

---

### **3. Putting It All Together in the Layout**

The final step is to use the `CookieConsentBanner` component and add a listener script that injects the Plausible analytics script only *after* consent is granted.

#### **3.1. Update Base Layout**

Modify your main layout file, e.g., `src/layouts/BaseLayout.astro`.

```astro
---
// src/layouts/BaseLayout.astro
import CookieConsentBanner from '../components/CookieConsentBanner.astro';
// ... other imports like Header, Footer, etc.

const plausibleDomain = import.meta.env.PLAUSIBLE_DOMAIN;
---
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ... your head contents (meta, title, fonts, etc.) ... -->
    
    <!-- This script listens for the consent event from the banner -->
    <!-- and injects the Plausible script when consent is given. -->
    <script is:inline define:vars={{ plausibleDomain }}>
        function injectPlausible() {
            // Check if script already exists to prevent double-injection
            if (document.querySelector('script[data-domain]')) {
                return;
            }

            const script = document.createElement('script');
            script.defer = true;
            script.setAttribute('data-domain', plausibleDomain);
            
            // This path corresponds to the proxied script configured in astro.config.mjs
            script.src = '/js/script.js'; 
            
            document.head.appendChild(script);
            console.log('Plausible analytics injected.');
        }

        // Listen for the custom event from the consent banner
        window.addEventListener('consent-granted', injectPlausible);
    </script>
</head>
<body>
    <Header />
    <main>
        <slot />
    </main>
    <Footer />

    <!-- Place the banner at the end of the body -->
    <CookieConsentBanner />
</body>
</html>
```

#### **3.2. How it Works (The Minimal Implementation)**

1.  **First Visit:** A user arrives. The `CookieConsentBanner` script runs, finds no `localStorage` entry, and displays the banner. The analytics script is **not** loaded.
2.  **User Accepts:** The user clicks "Accept". The banner script saves `'granted'` to `localStorage` and fires the `consent-granted` event.
3.  **Listener Reacts:** The layout's listener script hears the event and calls `injectPlausible()`, which dynamically adds the Plausible script tag to the `<head>`. Analytics tracking begins for the current page view and all subsequent ones.
4.  **User Declines:** The user clicks "Decline". The banner script saves `'denied'` to `localStorage`. No event is fired, and no analytics script is loaded.
5.  **Return Visit (Accepted):** A user who previously accepted returns. The banner script sees `'granted'` in `localStorage` and immediately fires the `consent-granted` event on page load. The layout listener injects the Plausible script. The banner is never shown.
6.  **Return Visit (Declined):** A user who previously declined returns. The banner script sees `'denied'` in `localStorage`. The banner is not shown, and no event is fired. The user remains untracked.