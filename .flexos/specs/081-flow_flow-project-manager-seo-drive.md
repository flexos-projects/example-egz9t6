```markdown
---
type: spec
subtype: flow
title: 'Flow: Project Manager (SEO-Driven Researcher)'
trigger: User searches on Google for a specific service and lands on a blog article.
---

### Trigger

"Martina," a tech-savvy Head of Operations, is actively researching expert partners for a web application project. Her journey begins when she finds an InnovationHub "Insights" article through a specific, technical Google search (`agile webanwendung entwicklung münchen`). Her goal is to vet the company's expertise and gather evidence for an internal business case.

### Steps

1.  **Entry:** User lands directly on an "Insights" Article page (`/de/einblicke/agile-methoden-fuer-den-mittelstand`) from a search engine results page.
2.  **Authority Building:** User reads the article, assessing the quality and depth of the content.
3.  **Deeper Exploration:** Impressed, the user decides to vet the company's practical work and clicks "Our Work" (`/de/projekte`) in the main navigation.
4.  **Navigation:** The system loads the portfolio overview page.
5.  **Filtering:** User activates the "Custom Web Applications" filter to narrow down the projects. The project grid updates accordingly.
6.  **Selection:** User clicks on a specific Case Study that appears relevant.
7.  **Navigation:** The system loads the detailed Case Study page.
8.  **Technical Vetting:** User carefully reads the "Solution" and "Technologies Used" sections to assess the company's technical approach.
9.  **Team Vetting:** Satisfied with the technicals, the user navigates to the "About Us" page (`/de/ueber-uns`) via the main navigation.
10. **Navigation:** The system loads the "About Us" page.
11. **Credential Check:** User reads the professional biographies of key team members, looking for credentials and relevant expertise (e.g., PhDs, specializations).
12. **Internal Championing:** The user copies the URLs of the Case Study and the "About Us" page to share with their CEO, Stefan.

### Decision Points

*   **Article Quality:** Is the "Insights" article genuinely useful and demonstrative of expertise? If not, the user will bounce back to Google.
*   **Portfolio Relevance:** After filtering, are the displayed case studies relevant to the user's project? If not, they may assume a poor fit and exit.
*   **Technical Approach:** Does the technical solution detailed in the case study align with the user's expectations for a modern, competent partner? If not, they will disqualify the company.
*   **Team Credentials:** Does the team's background and expertise, as presented on the "About Us" page, inspire confidence? If not, the final piece of validation is missing, and they may not proceed.

### Error Handling

*   **Slow Page Load:** The initial article page must load quickly to avoid the user bouncing back to search results.
*   **Broken Filter:** If the filtering mechanism on the "Our Work" page is non-functional, the user cannot complete their vetting process and will likely exit.
*   **Broken Navigation Links:** Links from the article to the main site sections ("Our Work", "About Us") must be functional. A broken link leads to a 404 page and a dead end for the user.

### Success/Failure States

*   **Success:** The user gathers sufficient, compelling evidence (expert content, relevant projects, a credible team) to confidently recommend InnovationHub internally as a potential partner.
*   **Failure:** The user exits the site at any stage because the content is not authoritative, the projects are irrelevant, the technical skills seem lacking, or the team is unconvincing.
```