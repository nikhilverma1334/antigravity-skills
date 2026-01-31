---
name: generating-test-plans
description: Generates comprehensive, professional E2E test plans. Use when the user requests a test plan, QA strategy, or documentation for testing phases. Implements a multi-page structure covering scope, risks, approach, and resources.
---

# Generating Test Plans

## When to use this skill
- When starting a new project that requires formal QA documentation.
- When the user asks for a "Professional Test Plan".
- When stakeholders need a clear breakdown of test objectives, risks, and deliverables.

## Workflow
1. [ ] **Gather Meta-Data**: Get Project Name, Version, Date, Department, and Organization.
2. [ ] **Define Scope**: Identify what is in-scope and out-of-scope based on project requirements.
3. [ ] **Identify Risks**: Document assumptions and potential risks/mitigation plans.
4. [ ] **Design Approach**: Outline test stages (Unit, Integration, UAT) and specific testing types.
5. [ ] **Resource Planning**: List required hardware, software, and team roles.
6. [ ] **Generate Document**: Use the [TEST_PLAN_TEMPLATE.md](resources/TEST_PLAN_TEMPLATE.md) to assemble the final plan.

## Instructions

### 1. Structure Requirements
The output must strictly follow this page-based layout:
- **Page 1: Cover Page**: High-level metadata.
- **Page 2: Navigation**: Automated or manual Table of Contents.
- **Page 3: Governance**: Version History and Approval Tables.
- **Page 4: Strategic Foundation**: Intro, Scope (In/Out), Objectives, and Risks.
- **Page 5: Technical Specifications**: Functional/Requirement mapping and workflow diagrams (Mermaid).
- **Page 6: Test Execution Strategy**: Approach, Stages, and Testing Types (with Objective/Technique/Criteria).
- **Page 7: Operational Logistics**: Deliverables, Env Needs (HW/SW), and Roles.

### 2. Content Heuristics
- **Risk Assessment**: Always include at least 3 risks (e.g., "Environment Availability", "Data Privacy", "Tight Deadlines").
- **Visuals**: Use Mermaid `graph TD` or `sequenceDiagram` for the "Planning and Flow" section.
- **Criteria**: Each Test Type MUST include "Completion Criteria" (e.g., "100% of P1 test cases passed").

### 3. Professional Tone
Avoid passive voice. Use direct, action-oriented language (e.g., "The QA team will execute..." instead of "Tests will be performed...").

## Resources
- [Master Test Plan Template](resources/TEST_PLAN_TEMPLATE.md)
