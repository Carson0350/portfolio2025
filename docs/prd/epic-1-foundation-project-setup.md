# Epic 1: Foundation & Project Setup

**Expanded Goal:** Establish the complete technical foundation including Next.js 14 project initialization, TypeScript configuration, development tooling (ESLint, Prettier, Husky), Tailwind CSS setup, and Vercel deployment pipeline. Deliver a working "Hello World" page deployed to production that proves the entire stack is operational.

## Story 1.1: Initialize Next.js Project with TypeScript

As a developer,
I want to create a new Next.js 14 project with TypeScript and App Router,
so that I have a modern, type-safe foundation for building the portfolio.

**Acceptance Criteria:**
1. Next.js 14.2+ project created using `create-next-app` with TypeScript and App Router options
2. TypeScript configured with strict mode enabled in `tsconfig.json`
3. Project structure follows Next.js 14 App Router conventions (`/app` directory)
4. Development server runs successfully on `localhost:3000`
5. Default Next.js page renders without errors
6. Git repository initialized with initial commit

## Story 1.2: Configure Development Tooling

As a developer,
I want to set up code quality tools (ESLint, Prettier, Husky),
so that code remains consistent and maintainable throughout development.

**Acceptance Criteria:**
1. ESLint configured with Next.js recommended rules and custom rules for TypeScript
2. Prettier installed and configured with consistent formatting rules
3. `.prettierrc` and `.eslintrc.json` files created with project standards
4. Husky installed with pre-commit hooks for linting and formatting
5. lint-staged configured to run checks only on staged files
6. `package.json` scripts added for `lint`, `format`, and `type-check`
7. All existing code passes linting and formatting checks

## Story 1.3: Install and Configure Tailwind CSS

As a developer,
I want to set up Tailwind CSS with custom configuration,
so that I can rapidly build responsive, consistent UI components.

**Acceptance Criteria:**
1. Tailwind CSS 3.4+ installed with PostCSS and Autoprefixer
2. `tailwind.config.ts` created with custom design tokens (colors, fonts, spacing)
3. Global CSS file configured with Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
4. Tailwind IntelliSense working in IDE
5. Test component created using Tailwind classes renders correctly
6. Dark mode configuration added (class-based strategy for future use)
7. Custom color palette defined for portfolio branding

## Story 1.4: Set Up shadcn/ui Component Library

As a developer,
I want to initialize shadcn/ui and install base components,
so that I have accessible, customizable UI primitives ready to use.

**Acceptance Criteria:**
1. shadcn/ui CLI installed and initialized with project configuration
2. `components.json` configured with Tailwind and TypeScript settings
3. `/components/ui` directory created for shadcn components
4. Base components installed: Button, Card, Input, Label, Textarea
5. Lucide React icons library installed
6. Test page created demonstrating shadcn components render correctly
7. Components are fully typed with TypeScript

## Story 1.5: Create Root Layout and Basic Page Structure

As a developer,
I want to create the root layout with metadata and a simple home page,
so that the application has proper HTML structure and SEO foundation.

**Acceptance Criteria:**
1. Root layout (`app/layout.tsx`) created with proper HTML structure
2. Metadata configured with site title, description, and viewport settings
3. Font optimization implemented using `next/font` (Inter or similar)
4. Home page (`app/page.tsx`) created with "Hello World" content
5. Page renders with proper semantic HTML (`<html>`, `<body>`, `<main>`)
6. No console errors or warnings in browser
7. TypeScript types are correct for all components

## Story 1.6: Deploy to Vercel and Configure CI/CD

As a developer,
I want to deploy the application to Vercel with automatic deployments,
so that changes are automatically deployed and the production pipeline is validated.

**Acceptance Criteria:**
1. Vercel account created and project connected to Git repository
2. Production deployment successful and accessible via Vercel URL
3. Automatic deployments configured for main branch (production)
4. Preview deployments configured for pull requests
5. Build logs show successful TypeScript compilation and linting
6. Deployed site loads without errors and displays "Hello World" content
7. HTTPS enabled automatically via Vercel SSL

## Story 1.7: Configure Environment Variables and Secrets Management

As a developer,
I want to set up environment variable management for API keys and secrets,
so that sensitive data is properly secured and accessible in different environments.

**Acceptance Criteria:**
1. `.env.local` file created for local development (gitignored)
2. `.env.example` file created documenting required environment variables
3. Vercel environment variables configured for production (placeholder values)
4. Environment variable validation implemented using Zod schema
5. Type-safe environment variable access helper created (`lib/env.ts`)
6. Test environment variable accessed successfully in development
7. Documentation added to README for environment setup

---
