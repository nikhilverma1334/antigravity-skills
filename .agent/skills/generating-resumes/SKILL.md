---
name: generating-resumes
description: Generates professional resumes based on user-provided information. Includes multiple template options and ensures zero hallucination by strictly adhering to provided data. Use when the user requests a resume, CV, or career summary.
---

# Generating Resumes

## When to use this skill
- When a user wants to create a new resume from scratch.
- When an existing resume needs a professional redesign.
- When applying for specific roles that require different resume styles.

## Workflow
1. [ ] **Information Gathering**: Collect full name, contact info, professional summary, experience, education, skills, and certifications. **Do not use placeholder data.**
2. [ ] **Identify Target Role**: Ask the user what role or industry they are targeting to tailor the resume.
3. [ ] **Template Selection**: Present the user with 3-4 style options (Modern, Classic, Functional, Academic).
4. [ ] **Drafting**: Generate the resume based on the selected template and provided data.
5. [ ] **Review & Refine**: Finalize formatting and ensure ATS compatibility.

## Instructions

### 1. Data Collection Protocol
To avoid hallucination, you MUST request the following blocks of information if not already provided:
- **Contact Info**: Phone, Email, LinkedIn, Location.
- **Experience**: Title, Company, Dates, and 3-5 Bullet Points per role (focus on achievements).
- **Education**: Degree, Institution, Graduation Year.
- **Skills**: Hard skills, Software, and Languages.

### 2. Template Styles
- **Template 1: The Executive (Classic)**: Focused on chronological experience and leadership.
- **Template 2: The Creative (Modern)**: Clean layout with a focus on visual hierarchy and skills.
- **Template 3: The Minimalist (ATS-Friendly)**: Simple, single-column design optimized for scanning.
- **Template 4: The Career Changer (Functional)**: Highlights transferable skills and projects.

### 3. Writing Principles
- Use **Action Verbs** (e.g., "Spearheaded", "Optimized", "Architected").
- Focus on **Quantifiable Results** (e.g., "Increased efficiency by 20%" rather than "Helped improve efficiency").
- Keep bullet points concise and high-impact.

## Resources
- [Modern Resume Template](resources/MODERN_TEMPLATE.md)
- [Executive Resume Template](resources/EXECUTIVE_TEMPLATE.md)
- [ATS-Friendly Template](resources/ATS_TEMPLATE.md)
