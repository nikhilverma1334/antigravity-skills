---
name: scaffolding-playwright-automation
description: Orchestrates the creation of end-to-end Playwright automation frameworks in JavaScript/TypeScript. Implements Page Object Model (POM), custom reporting, and industry-standard best practices based on a domain name and specific automation instructions.
---

# Scaffolding Playwright Automation

## When to use this skill
- When starting a new automation project from scratch.
- When the user requests a Playwright framework using Page Object Model (POM).
- When a custom reporter or specific project structure is needed for enterprise scalability.

## Workflow
1. [ ] **Gather Context**: Identify the target domain and specific automation instructions.
2. [ ] **Initialize Project**: Run `npm init` and install Playwright dependencies.
3. [ ] **Structure Directories**: Create `pages/`, `tests/`, `utils/`, and `reporters/` folders.
4. [ ] **Configure Playwright**: Scaffold `playwright.config.ts` with domain-specific base URL and custom reporter settings.
5. [ ] **Implement POM**: Create `BasePage.ts` and domain-specific page objects.
6. [ ] **Scaffold Test Suite**: Create initial tests based on user instructions.
7. [ ] **Verify Setup**: Run a headless test to ensure the environment is correctly configured.

## Instructions

### 1. Project Initialization
Always use TypeScript as the default unless JavaScript is explicitly requested.
```powershell
npm init -y
npx playwright install --with-deps
npm install --save-dev @playwright/test typescript
```

### 2. File Structure Patterns
Follow this directory layout for scalability:
- `pages/`: Contains all Page Object classes.
- `tests/`: Contains `.spec.ts` files grouped by feature.
- `utils/`: Reusable helper functions and constants.
- `reporters/`: Implementation of the `CustomReporter.ts`.
- `playwright.config.ts`: Main configuration file.

### 3. Page Object Model (POM) Best Practices
- Every Page Object should extend a `BasePage`.
- Use `locator` instead of `$` or `$$`.
- Avoid hardcoded sleeps; use `waitForSelector` or `waitForLoadState`.
- Locators should be private properties.

### 4. Custom Reporter Implementation
The custom reporter should log test results to the console in a structured format or output a JSON summary.

```typescript
// reporters/CustomReporter.ts
import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

class MyReporter implements Reporter {
  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`);
  }
}
export default MyReporter;
```

### 5. Validation Loop
Before handing off to the user:
- Run `npx tsc --noEmit` to check for type errors.
- Run `npx playwright test --grep "smoke"` (or a sample test) to verify execution path.

## Resources
- [Base Configuration Template](resources/playwright.config.ts)
- [Base Page Template](resources/BasePage.ts)
- [Example Login Automation](examples/login-test.spec.ts)
