```typescript
import type { APIRoute } from 'astro';
import { z, ZodError } from 'zod';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
// Ensure RESEND_API_KEY is set in your .env file
const resend = new Resend(import.meta.env.RESEND_API_KEY);

// Define the schema for contact form data using Zod for validation
const ContactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Your message must be at least 10 characters long." }),
  // Honeypot field for basic spam prevention. It should be empty.
  honeypot: z.string().max(0, { message: "Spam detected." }).optional(),
});

export const POST: APIRoute = async ({ request }) => {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    
    // Validate the request body against the schema
    const validation = ContactFormSchema.safeParse(body);

    if (!validation.success) {
      // If validation fails, return a 400 error with the issues
      return new Response(JSON.stringify({
        message: "Invalid submission",
        errors: validation.error.flatten().fieldErrors,
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Check honeypot field
    if (body.honeypot) {
      // This is likely a bot. Silently succeed but don't send an email.
      return new Response(JSON.stringify({ message: 'Inquiry received successfully!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { firstName, lastName, email, company, message } = validation.data;
    
    // Retrieve email configuration from environment variables
    const toEmail = import.meta.env.CONTACT_FORM_EMAIL_TO;
    const fromEmail = import.meta.env.CONTACT_FORM_EMAIL_FROM;

    if (!toEmail || !fromEmail) {
      console.error("Missing CONTACT_FORM_EMAIL_TO or CONTACT_FORM_EMAIL_FROM environment variables.");
      return new Response(JSON.stringify({ message: "Server configuration error." }), { status: 500 });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Website Inquiry <${fromEmail}>`,
      to: [toEmail],
      reply_to: email,
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #142851;">New Website Consultation Request</h2>
          <p>You have received a new inquiry from the contact form on your website.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <h3 style="color: #142851;">Submitter Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${firstName} ${lastName}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Company:</strong> ${company || 'Not provided'}</li>
          </ul>
          <h3 style="color: #142851;">Message:</h3>
          <p style="background-color: #f4f5f7; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="font-size: 0.8em; color: #777;">This email was sent from the contact form on the Example Consulting Group website.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return new Response(JSON.stringify({ message: "Failed to send message. Please try again later." }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Return a success response
    return new Response(JSON.stringify({ message: 'Inquiry received successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    if (e instanceof ZodError) {
        return new Response(JSON.stringify({
            message: "Invalid submission",
            errors: e.flatten().fieldErrors
        }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    console.error("Error processing contact form:", e);
    return new Response(JSON.stringify({ message: "An unexpected error occurred." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
```