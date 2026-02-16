---
type: spec
subtype: build-spec
title: API Contact Form
phase: 5
priority: 1
---

## Files to Create/Modify
- `src/pages/api/contact.ts`

## Implementation Details
Create an Astro API route that acts as a Vercel serverless function. It should accept `POST` requests from the contact form. Use `zod` on the server-side to validate the incoming form data against a strict schema. Use a library like `resend` or `nodemailer` to send a formatted email to the client's designated address. Implement basic spam prevention (e.g., a honeypot field). Return a `200` status on success and a `400` or `500` status on failure.

## Dependencies
- Contact form on `/contact` page.
- Environment variables for email service credentials.

## Acceptance Criteria
- [ ] API endpoint exists at `/api/contact`.
- [ ] It rejects requests that are not `POST`.
- [ ] It validates incoming data and returns a `400` error with details if validation fails.
- [ ] On successful validation, it sends an email.
- [ ] It returns a `200` success response to the client upon sending the email.
- [ ] It correctly handles submissions from both `de` and `en` contact pages.