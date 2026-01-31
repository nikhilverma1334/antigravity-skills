---
name: generating-test-cases
description: Generates professional test case documents based on project requirements (PRDs, Test Plans). Use when the user requests a list of test cases, test scenarios, or a formal test specification. Strictly requires source documentation to avoid hallucination.
---

# Generating Test Cases

## When to use this skill
- When you need to derive specific test cases from a PRD or Test Plan.
- When creating formal documentation for manual or automated testing.
- When the user asks for a "Professional Test Case Document".

## Workflow
1. [ ] **Verify Source Documents**: Ask the user for the PRD, Test Plan, or Functional Specifications. **Do not proceed without reference material.**
2. [ ] **Gather Meta-Data**: Confirm Project Name, Version, Date, Department, and Organization details.
3. [ ] **Analyze Requirements**: Extract features, logic paths, and edge cases from the provided documents.
4. [ ] **Generate Test Cases**: Use the [TEST_CASE_TEMPLATE.md](resources/TEST_CASE_TEMPLATE.md) to structure the output.
5. [ ] **Review**: Ensure every test case has a clear Expected Output and mapped Requirement ID.

## Instructions

### 1. Document Structure
- **Cover Page**: Project metadata and branding.
- **Table of Contents**: Navigation to specific modules/scenarios.
- **Test Case Table**: The core execution matrix.

### 2. Hallucination Prevention
- If a requirement is unclear in the provided doc, **explicitly ask for clarification** rather than making assumptions.
- If no document is provided, the skill must trigger a prompt: *"I see you want to generate test cases. To ensure accuracy and avoid hallucinations, please provide the PRD or Test Plan for this project."*

### 3. Column Data Standards
- **TestCase No**: Use a hierarchical format (e.g., `TC-AUTH-001`).
- **TestCase Type**: Categorize as Functional, Regression, Smoke, Security, etc.
- **Sample Data**: Provide realistic input values.
- **Expected Output**: Define the exact observable behavior.

## Resources
- [Master Test Case Template](resources/TEST_CASE_TEMPLATE.md)
