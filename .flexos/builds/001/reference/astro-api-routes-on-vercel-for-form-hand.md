---
type: doc
subtype: reference
title: Astro API Routes on Vercel for Form Handling
---

---

### **Reference: Astro API Routes on Vercel for Form Handling**

**Last Updated:** For Astro v4.5+
**Purpose:** This guide provides a minimal, production-ready pattern for capturing form data in an Astro project, validating it on the server, and sending an email notification using Resend. This approach is secure, performant, and leverages Vercel's serverless architecture.

---

### **1. The Minimal Working Implementation**

This pattern uses a frontend Astro component for the form and a TypeScript API route for the backend logic.

#### **Step 1: Install Dependencies**

These packages are required for validation and email sending.

```bash
# Zod for schema validation
npm install zod

# Resend for transactional emails
npm install resend
```

#### **Step 2: Configure Environment Variables**

Create a `.env` file in the root of your project. This file is for local development.

**.env**
```env
# Get your API key from https://resend.com/
RESEND_API_KEY="re_xxxxxxxxxxxxxxxxxxxx"
# The email address you want to send notifications TO
CONTACT_FORM_SEND_TO="your-work-email@example.com"
```

**Important:** Add `.env` to your `.gitignore` file to keep your secret keys out of version control.

#### **Step 3: Create the API Route (Backend)**

API routes live in `src/pages/api/`. This file will handle the `POST` request, validate the data, and send the email.

**`src/pages/api/contact.ts`**
```typescript
import type { APIRoute } from 'astro';
import { z, ZodError } from 'zod';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(import.meta.env.RESEND_API_KEY);
const sendToEmail = import.meta.env.CONTACT_FORM_SEND_TO;

// Define the schema for the form data using Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long.").max(2000, "Message must be less than 2000 characters.")
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate the data against the schema
    const result = contactSchema.safeParse(data);

    // If validation fails, return a 400 error with the issues
    if (!result.success) {
      const errorMessages = result.error.issues.map(issue => issue.message).join(', ');
      return new Response(
        JSON.stringify({ message: `Invalid data: ${errorMessages}` }),
        { status: 400 }
      );
    }
    
    // If validation succeeds, destructure the data
    const { name, email, message } = result.data;
    
    // Send the email using Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Website Contact Form <onboarding@resend.dev>', // Must be a verified domain on Resend
      to: [sendToEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `<p>You received a new message from your website contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br>')}</p>`,
    });
    
    if (emailError) {
        console.error("Resend error:", emailError);
        return new Response(
            JSON.stringify({ message: "Error sending email. Please try again later." }),
            { status: 500 }
        );
    }

    // Return a success response
    return new Response(
      JSON.stringify({ message: "Thank you for your message! We'll be in touch soon." }),
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing form:", error);
    if (error instanceof ZodError) {
        return new Response(JSON.stringify({ message: 'Validation failed.', errors: error.errors }), { status: 400 });
    }
    // Generic server error
    return new Response(
      JSON.stringify({ message: "An unexpected error occurred. Please try again." }),
      { status: 500 }
    );
  }
};
```

#### **Step 4: Create the Frontend Form Component**

This Astro component renders the form and includes a client-side script to handle the submission without a full page reload.

**`src/components/ContactForm.astro`**
```astro
---
// This component has no server-side props
---
<form id="contact-form" class="space-y-6">
  <div>
    <label for="name" class="block text-sm font-medium text-surface-900 mb-1">Full Name</label>
    <input type="text" id="name" name="name" required class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
  </div>
  <div>
    <label for="email" class="block text-sm font-medium text-surface-900 mb-1">Email Address</label>
    <input type="email" id="email" name="email" required class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out">
  </div>
  <div>
    <label for="message" class="block text-sm font-medium text-surface-900 mb-1">Your Message</label>
    <textarea id="message" name="message" rows="4" required class="block w-full border border-surface-300 rounded-md py-2 px-3 text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:border-transparent transition-all duration-200 ease-in-out"></textarea>
  </div>
  <div class="text-right">
    <button type="submit" class="font-inter font-medium py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white">
      Send Message
    </button>
  </div>
  <div id="form-status" class="mt-4 text-center text-sm" role="status"></div>
</form>

<script>
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const statusEl = document.getElementById('form-status');
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // UI feedback for submission
    if (statusEl) statusEl.textContent = 'Sending...';
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        if (statusEl) {
            statusEl.textContent = result.message;
            statusEl.className = 'mt-4 text-center text-sm text-success';
        }
        form.reset();
      } else {
        if (statusEl) {
            statusEl.textContent = result.message || 'An error occurred.';
            statusEl.className = 'mt-4 text-center text-sm text-error';
        }
      }
    } catch (error) {
        console.error('Submission error:', error);
        if (statusEl) {
            statusEl.textContent = 'A network error occurred. Please try again.';
            statusEl.className = 'mt-4 text-center text-sm text-error';
        }
    } finally {
        if (submitButton) submitButton.disabled = false;
    }
  });
</script>
```

---

### **2. Deployment on Vercel**

1.  **Framework Preset:** When you import your Astro project into Vercel, it should automatically be detected. No special configuration is needed.
2.  **Serverless Functions:** Vercel automatically converts your `src/pages/api/**` files into Serverless Functions. The code above will work out-of-the-box.
3.  **Environment Variables:** You **must** add your environment variables (`RESEND_API_KEY`, `CONTACT_FORM_SEND_TO`) to your Vercel project settings. Go to your Project -> Settings -> Environment Variables.

---

### **3. Gotchas & Common Mistakes**

1.  **Missing `client:load` Directive:** If you use this Astro component on a page, you must add `client:load` to make the `<script>` tag execute in the browser.
    *   **Example:** `<ContactForm client:load />`
2.  **Environment Variables on Vercel:** Forgetting to add your `.env` variables to the Vercel project settings is the most common deployment issue. The form will fail with a 500 error because the API key will be `undefined`.
3.  **Resend "From" Address:** The `from` address in `resend.emails.send()` **must** be from a domain you have verified in your Resend account. `onboarding@resend.dev` is provided for testing, but you should replace it with your own verified domain for production (e.g., `noreply@yourdomain.com`).
4.  **Form `name` Attributes:** The `name` attributes on your HTML `<input>` and `<textarea>` elements **must exactly match** the keys in your Zod schema. A mismatch will cause validation to fail.
5.  **Content-Type Header:** The `fetch` request must include the `headers: { 'Content-Type': 'application/json' }`. Without it, Astro's `request.json()` will fail.

---

### **4. Alternative: Using Nodemailer**

If you prefer to use your own SMTP server instead of a service like Resend, you can use `nodemailer`.

1.  **Install:** `npm install nodemailer`
2.  **Environment Variables:** Add your SMTP credentials to `.env`.
    ```env
    SMTP_HOST="smtp.example.com"
    SMTP_PORT=587
    SMTP_USER="your-user@example.com"
    SMTP_PASS="your-password"
    ```
3.  **Modified API Route:** Replace the `resend.emails.send` block in `src/pages/api/contact.ts` with the Nodemailer logic.

    ```typescript
    // ... imports and schema remain the same
    import nodemailer from 'nodemailer';

    // ... inside the POST function, after validation succeeds:
    const transporter = nodemailer.createTransport({
      host: import.meta.env.SMTP_HOST,
      port: Number(import.meta.env.SMTP_PORT),
      secure: Number(import.meta.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${import.meta.env.SMTP_USER}>`, // Sender address
            to: sendToEmail, // List of receivers
            subject: `New Contact Form Submission from ${name}`, // Subject line
            replyTo: email, // Set the reply-to to the user's email
            html: `<p>You received a new message from your website contact form.</p>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong></p>
                   <p>${message.replace(/\n/g, '<br>')}</p>`,
        });
    } catch (emailError) {
        console.error("Nodemailer error:", emailError);
        return new Response(JSON.stringify({ message: "Error sending email." }), { status: 500 });
    }

    // Return success response...
    ```