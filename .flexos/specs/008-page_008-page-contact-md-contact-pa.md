```markdown
---
type: spec
subtype: page
title: 008-page_contact.md — Contact Page Spec
route: /contact
layout: default
---

### Purpose

To serve as the primary conversion page for initiating a project discussion, making it as easy and reassuring as possible for a potential client to get in touch.

### Components

1.  **Header**
    *   Standard site header.

2.  **PageHeader**
    *   A clear, action-oriented H1: "Let's Build Your Solution".
    *   May include a short paragraph setting expectations (e.g., "Fill out the form below or contact us directly. We'll get back to you within one business day.").

3.  **ConsultationForm**
    *   The primary component of the page.
    *   A multi-step or well-structured form to reduce cognitive load.
    *   Fields should include:
        *   Full Name
        *   Company Name
        *   Email
        *   Phone Number
        *   Key business challenge (textarea or dropdown)
        *   How did you hear about us? (optional)
    *   A clear submit button ("Schedule My Consultation").

4.  **ContactInfoBlock**
    *   A section displayed alongside or below the form.
    *   Lists direct contact info:
        *   Email address (clickable `mailto:` link).
        *   Phone number (clickable `tel:` link).
        *   Physical Address.

5.  **MapEmbed**
    *   An embedded map (e.g., Google Maps) showing the location of their Munich office.

6.  **Footer**
    *   Standard site footer.

### Data Requirements

*   **Page Metadata:** SEO Title, Meta Description (EN/DE).
*   **Contact Info:** `email_address`, `phone_number`, `physical_address`.
*   **Map:** `latitude`, `longitude` or `embed_url` for the office location.
*   **Form:** `form_submission_endpoint`.

### User Interactions

*   **Form Submission:** User fills out the form fields and clicks the submit button.
*   **Direct Contact:** User can click the email or phone links to use their device's default client.

### States

*   **Form: Default**
    *   All fields are empty and ready for input. Submit button is active.
*   **Form: Validation Error**
    *   If submitted with invalid or missing required data, error messages appear below the relevant fields. The form is not submitted.
*   **Form: Submitting**
    *   After clicking submit with valid data, the form fields may become disabled and a loading indicator (spinner) appears on the submit button.
*   **Form: Success**
    *   The form is hidden and replaced with a thank-you message (e.g., "Thank you for your message! We will be in touch shortly.").
*   **Form: Submission Error**
    *   If the server submission fails, a general error message is displayed near the submit button (e.g., "Sorry, something went wrong. Please try again or email us directly.").