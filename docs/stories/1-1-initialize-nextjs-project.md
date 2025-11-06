# Story 1.1: Initialize Next.js Project with TypeScript

**Epic:** 1 - Foundation & Project Setup  
**Story Points:** 2  
**Priority:** P0 (Critical)  
**Status:** Ready for Dev  
**Assignee:** TBD

---

## User Story

**As a** developer,  
**I want to** create a new Next.js 14 project with TypeScript and App Router,  
**so that** I have a modern, type-safe foundation for building the portfolio.

---

## Acceptance Criteria

- [ ] Next.js 14.2+ project created using `create-next-app` with TypeScript and App Router options
- [ ] TypeScript configured with strict mode enabled in `tsconfig.json`
- [ ] Project structure follows Next.js 14 App Router conventions (`/app` directory)
- [ ] Development server runs successfully on `localhost:3000`
- [ ] Default Next.js page renders without errors
- [ ] Git repository initialized with initial commit

---

## Technical Notes

**Command:**
```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir=false --import-alias="@/*"
```

**TypeScript Config:**
- Enable `strict: true`
- Enable `noUncheckedIndexedAccess: true`
- Set `baseUrl: "."` and `paths: { "@/*": ["./*"] }`

**Dependencies:**
- next@^14.2.0
- react@^18.2.0
- react-dom@^18.2.0
- typescript@^5.0.0

---

## Definition of Done

- [ ] Code implemented and passes TypeScript compilation
- [ ] All acceptance criteria met
- [ ] Development server runs without errors
- [ ] Git repository initialized with `.gitignore`
- [ ] README updated with project setup instructions

---

## Related Stories

- **Blocks:** 1.2 (Configure Development Tooling)
- **Blocks:** 1.3 (Install Tailwind CSS)
- **Epic:** Epic 1 - Foundation & Project Setup

---

**Created:** November 5, 2025  
**Last Updated:** November 5, 2025
