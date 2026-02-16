```.flexos/database/relationships.md
---
type: spec
subtype: database-relationships
title: Relationship Map
version: 1.0.0
---

This document outlines the relationships between the database tables, explaining their cardinality and implementation details.

---

### **`Services` ↔ `Case Studies`**

*   **Type:** Many-to-Many
*   **Description:** A service can be associated with multiple case studies to show where it was applied. A single case study can involve the use of multiple services.
*   **Implementation:** A join table named `services_case_studies` is used. It contains two columns, `service_id` and `case_study_id`, which together form a composite primary key. Each row in this table links one service to one case study.

---

### **`Case Studies` → `Testimonials`**

*   **Type:** One-to-One
*   **Description:** A case study can feature one specific testimonial related to that project. A testimonial is linked to, at most, one case study.
*   **Implementation:** A foreign key column `testimonial_id` is added to the `case_studies` table. This column references `testimonials(id)`. A `UNIQUE` constraint is applied to `testimonial_id` to enforce the one-to-one nature of the relationship. The column is `NULLABLE`, allowing a case study to exist without an associated testimonial.

---

### **`Posts` → `Team Members`**

*   **Type:** Many-to-One
*   **Description:** A post is written by exactly one author (team member). A team member can be the author of many posts.
*   **Implementation:** A foreign key column `author_id` is added to the `posts` table. This column references `team_members(id)` and has a `NOT NULL` constraint, as every post must have an author.

---

### **Implied One-to-Many Relationships**

These relationships are derived from list-based fields in the content model.

#### **`Services` → `Service Problems`**
*   **Type:** One-to-Many
*   **Description:** Each service has a list of common client problems it solves.
*   **Implementation:** The `service_problems` table has a `service_id` foreign key column that references `services(id)`.

#### **`Services` → `Service Process Steps`**
*   **Type:** One-to-Many
*   **Description:** Each service is described by an ordered list of process steps.
*   **Implementation:** The `service_process_steps` table has a `service_id` foreign key column that references `services(id)`.

#### **`Case Studies` → `Case Study Gallery Images`**
*   **Type:** One-to-Many
*   **Description:** A case study can have an optional gallery of multiple images.
*   **Implementation:** The `case_study_gallery_images` table has a `case_study_id` foreign key column that references `case_studies(id)`.