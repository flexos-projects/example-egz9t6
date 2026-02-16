---
type: spec
subtype: feature
title: Webinars & Events Section
priority: P3
---

### Description

This feature creates a dedicated section of the site to promote and archive webinars, workshops, and other events. It will have a listing page that shows both "Upcoming Events" with registration details, and a "Past Events" archive with links to recordings and presentation materials. This extends the thought leadership strategy of the "Insights" hub into a more interactive format, allowing the company to engage directly with its audience and generate leads through event registrations.

### User Stories

*   **As an interested follower of the company,** I want to easily find a list of upcoming webinars so I can register for topics that interest me.
*   **As a site visitor who missed a live event,** I want to be able to watch a recording of it on-demand so I don't miss out on the valuable content.
*   **As the marketing team,** I want a central place to promote our events, manage registrations, and build a lasting archive of video content to showcase our expertise.

### Acceptance Criteria

*   **GIVEN** a user navigates to `/events`
    *   **THEN** they see two sections: "Upcoming Events" and "Past Events."
*   **GIVEN** there is an upcoming event
    *   **THEN** it is listed with its title, date, time, a brief description, and a clear "Register" button/link.
*   **GIVEN** a user clicks the "Register" button
    *   **THEN** they are taken to a registration page or a third-party registration service (e.g., Zoom, Eventbrite).
*   **GIVEN** there are past events
    *   **THEN** they are listed with their title and date.
    *   **AND** clicking on a past event leads to a detail page with an embedded video of the recording and a summary.
*   **GIVEN** a content editor is in the CMS
    *   **THEN** there is an "Events" collection with fields for Title, Date, Description, Status (Upcoming/Past), Registration Link, and Video Embed Code.

### Technical Notes

*   **CMS Structure:** An "Events" collection is required. The 'Status' can be determined automatically based on whether the event date is in the future or past.
*   **Third-Party Integration:** For registration, linking out to a dedicated service like Zoom Webinars, Luma, or Eventbrite is often more practical than building a custom registration system.
*   **Video Hosting:** Past event recordings should be hosted on a video platform like YouTube or Vimeo and embedded on the site to optimize for performance.
*   **Schema.org:** Use `Event` schema markup to help search engines understand the event details, which can lead to rich results in search listings.