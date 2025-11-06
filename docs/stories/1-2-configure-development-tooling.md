# Story 1.2: Configure Development Tooling

**Epic:** 1 - Foundation & Project Setup  
**Story Points:** 2  
**Priority:** P0 (Critical)  
**Status:** Ready for Dev

---

## User Story

**As a** developer,  
**I want to** set up code quality tools (ESLint, Prettier, Husky),  
**so that** code remains consistent and maintainable throughout development.

---

## Acceptance Criteria

- [ ] ESLint configured with Next.js recommended rules and custom rules for TypeScript
- [ ] Prettier installed and configured with consistent formatting rules
- [ ] `.prettierrc` and `.eslintrc.json` files created with project standards
- [ ] Husky installed with pre-commit hooks for linting and formatting
- [ ] lint-staged configured to run checks only on staged files
- [ ] `package.json` scripts added for `lint`, `format`, and `type-check`
- [ ] All existing code passes linting and formatting checks

---

## Technical Notes

**Dependencies:**

```bash
npm install -D eslint prettier husky lint-staged @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

**Package.json scripts:**

```json
"scripts": {
  "lint": "next lint",
  "format": "prettier --write .",
  "type-check": "tsc --noEmit"
}
```

---

## Related Stories

- **Depends on:** 1.1 (Initialize Next.js Project)
- **Blocks:** All subsequent stories

---

**Created:** November 5, 2025
