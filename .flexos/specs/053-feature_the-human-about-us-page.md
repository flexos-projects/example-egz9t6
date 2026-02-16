---
type: spec
subtype: feature
title: The "Human" About Us Page
priority: P1
---

### Description

The "About Us" page is a critical trust-building asset. This feature will transform it from a generic corporate page into a compelling narrative that highlights the company's key differentiator: its people. The page will lead with the founder's story to create a personal connection. It will also feature a dedicated section for key team members (Dr. Anna Müller, Markus Schmidt, Lena Meyer), each with a professional photograph, a detailed biography that showcases their expertise and personality, and a list of their credentials or key accomplishments.

### User Stories

*   **As a potential client,** I want to learn the story behind the company and the values that drive it so that I can determine if they are a good cultural fit for my business.
*   **As a potential client,** I want to see the faces, biographies, and qualifications of the key people I would be working with to build confidence and trust in their expertise.
*   **As a content editor,** I want a simple way to manage team member profiles (photo, bio, credentials) so that the "About Us" page can be easily updated as the team grows or roles change.

### Acceptance Criteria

*   **GIVEN** a user navigates to the `/about` page
    *   **THEN** the top of the page features a compelling narrative about the company's founding and mission.
*   **GIVEN** a user scrolls down the `/about` page
    *   **THEN** they see a dedicated "Our Team" section.
*   **GIVEN** a user is viewing the "Our Team" section
    *   **THEN** they see profiles for Dr. Anna Müller, Markus Schmidt, and Lena Meyer.
    *   **AND** each profile includes a high-quality, professional photograph.
    *   **AND** each profile contains a detailed biography and a list of relevant credentials.
*   **GIVEN** a content editor is in the CMS
    *   **THEN** there is a "Team Members" collection where they can create or edit individual profiles.
    *   **AND** the "About Us" page has a mechanism to select which team members to display.

### Technical Notes

*   **CMS Structure:** Create a "Team Members" collection/channel in the CMS. Each entry should have fields for Name, Title, Photo, Biography (rich text), and Credentials (plain text or repeater).
*   **Content Reusability:** The "Team Members" collection is highly reusable. These profiles can be linked to from other content types, such as "Insights" articles for author attribution.
*   **Image Quality:** High-quality, professional photos are essential for this feature. Ensure the design and CSS handle these images gracefully across all device sizes.