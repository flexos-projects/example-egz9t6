```markdown
---
type: spec
subtype: flow
title: 'Flow: Mobile User (Quick Contact)'
trigger: User searches for the company name on a mobile device to find contact info.
---

### Trigger

A user has heard the company name "InnovationHub Solutions GmbH" and needs to find their phone number or address quickly while on the move. They perform a brand search on their mobile phone with the explicit goal of making immediate contact or getting directions.

### Steps

**Path A: Immediate Call**
1.  **Entry:** User lands on the mobile Homepage from a search result.
2.  **Recognition:** User immediately sees the phone number displayed prominently in the site header.
3.  **Action:** User taps the phone number, which is a `tel:` link.
4.  **Conversion:** The mobile device's native phone application opens with the number pre-filled, ready to start the call.

**Path B: Finding Address or Other Info**
1.  **Entry:** User lands on the mobile Homepage.
2.  **Navigation Intent:** User does not see the desired info (e.g., address) and taps the hamburger menu icon to open the main navigation.
3.  **Selection:** User taps the "Contact" link in the navigation menu.
4.  **Navigation:** The system loads the Contact page (`/de/kontakt`).
5.  **Information Found:** User sees the phone number and physical address displayed clearly at the top of the page content.
6.  **Conversion:** User taps the `tel:` link to initiate a call or uses the address for their mapping application.

### Decision Points

*   **Primary Goal:** Is the user's immediate need to call, or to find the address/other contact details? This determines whether they use the header link (Path A) or navigate to the Contact page (Path B).

### Error Handling

*   **Non-Responsive Site:** If the site is not optimized for mobile, text and links may be too small to read or tap, causing immediate user frustration and failure.
*   **Non-Tappable Phone Number:** If the phone number in the header or on the contact page is not wrapped in a `tel:` link, it is not functional, and the user cannot complete their goal easily.
*   **Buried Contact Info:** If the contact information is not immediately visible in the header or at the top of the Contact page, the flow's primary goal of "quick contact" is compromised.
*   **Incorrect Information:** The phone number or address must be accurate.

### Success/Failure States

*   **Success:** The user finds the required contact information and initiates a call or finds the address in under 15 seconds. The flow is fast, efficient, and frictionless.
*   **Failure:** The user cannot find the contact information quickly due to poor mobile design, non-functional links, or buried information, and abandons the task.