---
name: code-quality-and-clean-architecture
description: Clean code principles, API design patterns, error handling resilience, and maintainable software architecture.
---

# Code Quality & Clean Architecture Guidelines

This skill defines rules for writing maintainable, self-documenting, and resilient code across frontend and backend environments.

## 1. Clean Code & Naming Conventions
- **Descriptive Naming**: Variable and function names must explicitly state their purpose (e.g. `isFormSubmitted`, `fetchUserData`, `calculateProjectDeliveryDays`). Avoid cryptic abbreviations.
- **Functions Should Do One Thing**: Keep functions short and focused. If a function is doing multiple tasks (parsing, validation, API call, DOM update), extract sub-functions.
- **DRY (Don't Repeat Yourself)**: Re-use common utilities and shared CSS tokens rather than duplicating code across components.

## 2. API Design & Error Handling
- **Structured Error Responses**: Always return consistent JSON payloads from Node.js/Express APIs:
  ```json
  {
    "success": false,
    "error": "Descriptive error message",
    "timestamp": "2026-08-01T22:20:00.000Z"
  }
  ```
- **Graceful Fallbacks**: In frontend applications, wrap API requests in `try/catch` blocks and display helpful user-facing notifications rather than letting app screens freeze or break.
- **Input Validation**: Sanitize and validate all client input on both client and server sides.

## 3. Maintainability & Verification
- **Code Cleanliness**: Remove unused imports, console log statements in production, and commented-out dead code.
- **Verification Workflow**: Always test builds (`npm run build`) and verify that backend routes respond as expected before declaring feature completion.
