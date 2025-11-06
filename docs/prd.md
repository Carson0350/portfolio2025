# Carson Antoine - Professional Portfolio Site

## Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** November 5, 2025  
**Status:** Draft - In Progress  
**Project Type:** Personal Portfolio Website

---

## Goals and Background Context

### Goals

**Desired outcomes this PRD will deliver:**

- Launch a professional portfolio website that showcases Carson Antoine's full-stack engineering expertise to technical hiring managers and recruiters
- Demonstrate technical excellence through implementation quality (Lighthouse 95+, WCAG AA compliance, optimal Core Web Vitals)
- Communicate Carson's unique career transition story (healthcare → software engineering) in a compelling, memorable way
- Provide a centralized platform to showcase 3-5 detailed project case studies with measurable business impact
- Establish an online presence that increases interview conversion rate by 30% within 3 months
- Generate 5+ inbound recruiter contacts per month through organic discovery and SEO optimization
- Create a maintainable, scalable foundation that can evolve into a personal brand platform (blog, content, community)
- Deliver a fully responsive, accessible, performant web application within 2-3 weeks

### Background Context

Carson Antoine is a senior full-stack software engineer with 5+ years of experience specializing in .NET/C#, React, and Azure cloud-native development. He successfully transitioned from healthcare to software engineering via Hack Reactor bootcamp in 2020 and has since delivered significant impact across healthcare, insurance, and consulting domains—including a notable 40% workflow optimization achievement. Despite his strong technical background and measurable accomplishments, Carson currently lacks a professional online presence beyond LinkedIn and a static resume, creating a credibility gap with hiring managers who increasingly prioritize portfolio reviews in their evaluation process.

The portfolio website will serve dual purposes: it showcases Carson's work while simultaneously demonstrating his technical capabilities through the quality of its implementation. By building a performance-optimized, accessible, modern web application using Next.js 14, TypeScript, and Tailwind CSS, the portfolio itself becomes a case study in senior-level engineering practices. This approach directly addresses the differentiation challenge in a competitive job market and provides tangible proof of Carson's claimed expertise in modern development practices, including AI-assisted development tools like Windsurf and Cursor.

### Change Log

| Date       | Version | Description                             | Author    |
| ---------- | ------- | --------------------------------------- | --------- |
| 2025-11-05 | 1.0     | Initial PRD creation from Project Brief | John (PM) |

---

## Requirements

### Functional Requirements

**FR1:** The portfolio shall display a hero section with clear value proposition headline ("Senior Full-Stack Engineer specializing in .NET/React/Azure"), professional headshot, and primary call-to-action button linking to contact section

**FR2:** The portfolio shall include an About section with professional bio (300-500 words) highlighting Carson's career transition from healthcare to software engineering, technical expertise, and unique value proposition

**FR3:** The portfolio shall display a Technical Skills section organized by category (Frontend, Backend, Tools) with visual indicators for each technology (React, TypeScript, Tailwind, C#, .NET, Azure, Git, Windsurf, Cursor, etc.)

**FR4:** The portfolio shall showcase 3-5 featured projects with detailed case studies including: problem statement, technical approach, technologies used, measurable outcomes, and screenshots/visuals

**FR5:** Each project case study shall display key metrics and achievements (e.g., "40% reduction in completion time", "Serverless architecture handling X requests/day")

**FR6:** The portfolio shall include a Professional Experience timeline displaying work history with company names, roles, dates, key achievements, and technologies used

**FR7:** The portfolio shall provide a Contact section with multiple contact methods: email link (carson.workflow@gmail.com), LinkedIn profile link, GitHub profile link, and phone number

**FR8:** The portfolio shall include a functional contact form with fields for name, email, message, and submit button that sends emails via API integration

**FR9:** The contact form shall validate all inputs client-side (required fields, email format) and display clear error messages for invalid submissions

**FR10:** The portfolio shall implement proper SEO with meta tags (title, description, Open Graph, Twitter Card), semantic HTML structure, and sitemap.xml

**FR11:** The portfolio shall be fully responsive across device sizes: desktop (1920px+), laptop (1280px), tablet (768px), and mobile (375px+)

**FR12:** The portfolio shall implement smooth scroll navigation between sections when clicking navigation links

**FR13:** The portfolio shall include a fixed/sticky navigation header that remains accessible during scrolling

**FR14:** The portfolio shall display a footer with copyright information, social links, and secondary navigation

**FR15:** The portfolio shall integrate analytics tracking (Google Analytics or Plausible) to monitor visitor behavior, page views, and conversion events

**FR16:** The portfolio shall support easy content updates through markdown files or a simple content management approach (no database required for MVP)

**FR17:** Project case studies shall follow a consistent template structure: Hero image, Problem Statement, Solution Approach, Technologies Used, Key Achievements, and Outcomes

**FR18:** The About section shall include a professional headshot image with appropriate alt text for accessibility

### Non-Functional Requirements

**NFR1:** The portfolio shall achieve a Lighthouse Performance score of 95+ on both mobile and desktop

**NFR2:** The portfolio shall meet Core Web Vitals thresholds: LCP < 2.5s, FID < 100ms, CLS < 0.1

**NFR3:** The portfolio shall achieve a Lighthouse Accessibility score of 100, meeting WCAG 2.1 AA compliance standards

**NFR4:** The portfolio shall achieve a Lighthouse SEO score of 95+

**NFR5:** The portfolio shall achieve Time to Interactive (TTI) of less than 3.5 seconds on 3G network conditions

**NFR6:** All images shall be optimized and served in modern formats (WebP with fallbacks) with appropriate lazy loading

**NFR7:** The portfolio shall support browser compatibility: Chrome/Edge (last 2 versions), Firefox (last 2 versions), Safari (last 2 versions), Mobile Safari (iOS 14+), Chrome Mobile (Android 10+)

**NFR8:** The portfolio shall be deployable to Vercel with zero-configuration and automatic SSL certificate provisioning

**NFR9:** The portfolio shall implement proper error handling for all API calls (contact form) with user-friendly error messages

**NFR10:** The portfolio shall be maintainable by a single developer with clear code organization, TypeScript types, and component documentation

**NFR11:** The portfolio codebase shall follow established coding standards: ESLint configuration, Prettier formatting, and consistent naming conventions

**NFR12:** The portfolio shall implement security best practices: Content Security Policy headers, input sanitization, rate limiting on contact form API

**NFR13:** The portfolio shall load and function correctly with JavaScript disabled (progressive enhancement for core content)

**NFR14:** All interactive elements shall be keyboard accessible with visible focus indicators

**NFR15:** The portfolio shall implement proper caching strategies for static assets with appropriate cache headers

**NFR16:** All placeholder content shall be production-ready quality (AI-drafted and reviewed, not lorem ipsum)

**NFR17:** All images shall use appropriate placeholder/stock imagery with proper licensing (Unsplash, Pexels, or similar)

---

## User Interface Design Goals

### Overall UX Vision

The portfolio should embody **"Confident Minimalism"** - a clean, modern aesthetic that lets content shine while subtly demonstrating technical sophistication. The design should feel professional and polished, not flashy or gimmicky. Visual hierarchy guides users naturally through Carson's story: from immediate value proposition → technical credibility → detailed project work → contact. Interactions should be smooth and purposeful, with subtle animations that enhance (not distract from) the experience. The overall feel should communicate "senior engineer who values quality and user experience."

### Key Interaction Paradigms

- **Scroll-Driven Navigation:** Single-page application with smooth scrolling between sections, fixed navigation for quick access
- **Progressive Disclosure:** Project case studies start with summary cards, expand to full details on click/tap
- **Hover States:** Subtle hover effects on interactive elements (cards, buttons, links) provide clear affordance
- **Mobile-First Gestures:** Touch-friendly tap targets (min 44x44px), swipe-friendly project galleries on mobile
- **Keyboard Navigation:** Full keyboard accessibility with visible focus indicators, skip-to-content links
- **Form Feedback:** Real-time validation with inline error messages, success confirmation after submission

### Core Screens and Views

1. **Hero/Landing Section** - Immediate value proposition with headline, subheadline, CTA, professional photo
2. **About Section** - Career story, bio, personality/interests to humanize the candidate
3. **Skills Section** - Organized technical skills display (Frontend/Backend/Tools) with visual indicators
4. **Projects Section** - Featured project cards with expand/detail view capability
5. **Experience Section** - Timeline or card-based work history display
6. **Contact Section** - Multiple contact methods + functional contact form
7. **Footer** - Social links, copyright, secondary navigation

### Accessibility: WCAG 2.1 AA

- Semantic HTML structure with proper heading hierarchy
- Sufficient color contrast ratios (4.5:1 for text, 3:1 for UI components)
- Keyboard navigable with visible focus indicators
- Screen reader friendly with proper ARIA labels and alt text
- No reliance on color alone to convey information
- Responsive text sizing (supports 200% zoom)
- Reduced motion support for users with vestibular disorders

### Branding

**Professional Developer Aesthetic:**

- **Color Palette:** Modern, professional scheme - dark navy/blue primary, accent color for CTAs (teal/green), neutral grays for text hierarchy
- **Typography:** Clean, readable sans-serif for body (Inter, Outfit, or similar), possibly monospace for code snippets or technical elements
- **Imagery:** High-quality, professional photos and graphics - no stock photo clichés
- **Iconography:** Consistent icon set (Lucide React) for technologies and social links
- **Spacing:** Generous whitespace, clear visual breathing room between sections
- **Tone:** Professional but approachable, confident but not arrogant

### Target Device and Platforms: Web Responsive

- **Desktop (1920px+):** Full-width hero, multi-column layouts, hover interactions
- **Laptop (1280-1919px):** Optimized for standard laptop screens, maintained multi-column where appropriate
- **Tablet (768-1279px):** Responsive grid adjustments, touch-friendly interactions
- **Mobile (375-767px):** Single column, stacked layouts, mobile-optimized navigation (hamburger menu)
- **Browser Support:** Modern evergreen browsers (Chrome, Firefox, Safari, Edge - last 2 versions)

---

## Technical Assumptions

### Repository Structure: Monorepo

**Decision:** Single repository containing the entire Next.js application

**Rationale:**

- Portfolio is a single application with no separate services
- Simplifies deployment and version control
- Easier to maintain for solo developer
- No need for polyrepo complexity with shared packages

### Service Architecture

**Decision:** Monolithic Next.js Application with Serverless API Routes

**Architecture Details:**

- **Frontend:** Next.js 14+ App Router with React Server Components
- **API Layer:** Next.js API routes for contact form submission (serverless functions)
- **Static Generation:** Pre-rendered pages with ISR capability for future blog
- **Edge Functions:** Leverage Vercel Edge Network for optimal performance
- **No separate backend:** All logic contained within Next.js application

**Rationale:**

- Appropriate scale for portfolio website (no need for microservices)
- Serverless API routes handle contact form without dedicated backend
- Next.js provides full-stack capabilities in single framework
- Vercel deployment optimizes automatically for this architecture
- Aligns with Carson's experience (React frontend, serverless Azure functions)

### Testing Requirements

**Decision:** Unit + Integration Testing (Pragmatic Testing Pyramid)

**Testing Strategy:**

- **Unit Tests:** Component logic, utility functions, form validation (Vitest + React Testing Library)
- **Integration Tests:** API routes, contact form submission flow
- **E2E Tests:** Critical user paths (navigation, contact form) using Playwright (optional for MVP)
- **Manual Testing:** Visual regression, cross-browser compatibility, accessibility audit
- **Performance Testing:** Lighthouse CI in deployment pipeline

**Rationale:**

- Full testing pyramid is overkill for portfolio MVP
- Focus on critical paths (contact form, navigation)
- Manual accessibility and performance testing essential for NFRs
- Can expand testing in Phase 2 if portfolio becomes more complex

### Additional Technical Assumptions and Requests

**Frontend Stack:**

- **Framework:** Next.js 14.2+ (App Router, React Server Components, Server Actions)
- **Language:** TypeScript 5.0+ with strict mode enabled
- **Styling:** Tailwind CSS 3.4+ with custom design tokens
- **UI Components:** shadcn/ui (accessible, customizable Radix UI components)
- **Icons:** Lucide React (consistent, modern icon set)
- **Animations:** Framer Motion for subtle, performant animations
- **Forms:** React Hook Form + Zod for validation
- **Fonts:** Next.js font optimization with Google Fonts (Inter or similar)

**Content Management:**

- **Approach:** Markdown files with gray-matter for frontmatter parsing (no database)
- **Location:** `/content` directory for project case studies and bio
- **Future:** Can migrate to headless CMS (Contentful, Sanity) in Phase 2 if needed

**API & Services:**

- **Email Service:** Resend API for contact form submissions (100 emails/day free tier)
- **Analytics:** Plausible Analytics (privacy-friendly) or Google Analytics 4
- **Error Tracking:** Optional - Sentry free tier for production error monitoring

**Deployment & Infrastructure:**

- **Platform:** Vercel (zero-config Next.js deployment, automatic SSL, CDN)
- **Domain:** Custom domain (carsonantoine.com or similar) via Vercel
- **Environment Variables:** Vercel environment variables for API keys (Resend, Analytics)
- **CI/CD:** Vercel automatic deployments on git push (preview + production)
- **Monitoring:** Vercel Analytics for Web Vitals tracking

**Code Quality & Standards:**

- **Linting:** ESLint with Next.js recommended config + custom rules
- **Formatting:** Prettier with consistent configuration
- **Git Hooks:** Husky + lint-staged for pre-commit checks
- **Commit Convention:** Conventional Commits for clear history
- **Type Safety:** Strict TypeScript with no implicit any

**Performance Optimizations:**

- **Image Optimization:** Next.js Image component with automatic WebP conversion
- **Code Splitting:** Automatic via Next.js App Router
- **Lazy Loading:** React.lazy for non-critical components
- **Font Optimization:** Next.js font optimization with preloading
- **Bundle Analysis:** @next/bundle-analyzer for monitoring bundle size

**Security:**

- **CSP Headers:** Content Security Policy via Next.js middleware
- **Rate Limiting:** Upstash Redis + Vercel Edge for contact form rate limiting
- **Input Sanitization:** Zod schemas for all user inputs
- **Environment Security:** No secrets in client-side code, proper .env management

**Accessibility:**

- **Testing Tools:** axe DevTools, Lighthouse accessibility audit
- **Screen Reader Testing:** VoiceOver (macOS), NVDA (Windows)
- **Keyboard Navigation:** Manual testing of all interactive elements
- **Color Contrast:** Contrast checker tools during design phase

---

## Epic List

### Epic 1: Foundation & Project Setup

**Goal:** Establish the technical foundation with Next.js project, development tooling, and basic infrastructure while delivering a deployable "Hello World" that proves the deployment pipeline works.

### Epic 2: Core UI Framework & Design System

**Goal:** Build the reusable UI component library, design system, and responsive layout foundation that all subsequent features will use, including navigation and footer.

### Epic 3: Content Infrastructure & AI-Assisted Content Creation

**Goal:** Create the content management structure (markdown files, schemas) and generate AI-drafted content (bio, project case studies) ready for integration.

### Epic 4: Hero & About Sections

**Goal:** Implement the first impression sections (Hero with value proposition, About with career story) that immediately communicate Carson's value to visitors.

### Epic 5: Skills & Experience Showcase

**Goal:** Display technical skills and professional experience timeline, demonstrating Carson's expertise and career progression.

### Epic 6: Projects Portfolio Section

**Goal:** Showcase 3-5 featured project case studies with detailed descriptions, metrics, and visuals - the core differentiator of the portfolio.

### Epic 7: Contact & Communication

**Goal:** Enable visitors to reach out via multiple methods including a functional contact form with email integration.

### Epic 8: SEO, Analytics & Performance Optimization

**Goal:** Implement SEO best practices, analytics tracking, and performance optimizations to meet Lighthouse 95+ targets and enable success measurement.

### Epic 9: Testing, Accessibility & Launch Preparation

**Goal:** Conduct comprehensive testing (accessibility, cross-browser, performance), fix issues, and prepare for production launch with domain configuration.

---

## Epic 1: Foundation & Project Setup

**Expanded Goal:** Establish the complete technical foundation including Next.js 14 project initialization, TypeScript configuration, development tooling (ESLint, Prettier, Husky), Tailwind CSS setup, and Vercel deployment pipeline. Deliver a working "Hello World" page deployed to production that proves the entire stack is operational.

### Story 1.1: Initialize Next.js Project with TypeScript

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

### Story 1.2: Configure Development Tooling

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

### Story 1.3: Install and Configure Tailwind CSS

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

### Story 1.4: Set Up shadcn/ui Component Library

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

### Story 1.5: Create Root Layout and Basic Page Structure

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

### Story 1.6: Deploy to Vercel and Configure CI/CD

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

### Story 1.7: Configure Environment Variables and Secrets Management

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

## Epic 2: Core UI Framework & Design System

**Expanded Goal:** Build reusable UI components, establish the design system with consistent spacing/colors/typography, and create the responsive layout structure (navigation, footer, container) that all page sections will use. This epic delivers the visual foundation and navigation framework.

### Story 2.1: Create Design System Tokens and Theme Configuration

As a developer,
I want to define design system tokens (colors, typography, spacing, breakpoints),
so that the portfolio has consistent visual styling across all components.

**Acceptance Criteria:**

1. Tailwind config extended with custom color palette (primary, accent, neutral shades)
2. Typography scale defined (font sizes, line heights, font weights)
3. Spacing scale customized for portfolio needs
4. Responsive breakpoints defined and documented
5. Design tokens exported as TypeScript constants for programmatic access
6. Documentation created in `/docs/design-system.md` explaining token usage
7. Test page created demonstrating all design tokens

### Story 2.2: Build Responsive Navigation Header

As a visitor,
I want to see a fixed navigation header with section links,
so that I can easily navigate to different parts of the portfolio.

**Acceptance Criteria:**

1. Navigation component created with logo/name and section links (About, Skills, Projects, Experience, Contact)
2. Fixed/sticky positioning that remains visible during scroll
3. Smooth scroll behavior when clicking navigation links
4. Active section highlighting based on scroll position
5. Mobile responsive with hamburger menu for screens < 768px
6. Keyboard accessible with proper focus management
7. Semantic HTML using `<nav>` and `<ul>` elements

### Story 2.3: Build Footer Component

As a visitor,
I want to see a footer with social links and copyright information,
so that I can connect with Carson on other platforms.

**Acceptance Criteria:**

1. Footer component created with social media links (LinkedIn, GitHub, Email)
2. Social icons implemented using Lucide React
3. Copyright notice with current year (dynamically generated)
4. Secondary navigation links (optional: Privacy, Terms)
5. Responsive layout (stacked on mobile, horizontal on desktop)
6. Links open in new tab with proper `rel="noopener noreferrer"`
7. Semantic HTML using `<footer>` element

### Story 2.4: Create Container and Section Layout Components

As a developer,
I want reusable layout components (Container, Section),
so that all page sections have consistent spacing and responsive behavior.

**Acceptance Criteria:**

1. `Container` component created with max-width and responsive padding
2. `Section` component created with consistent vertical spacing
3. Components accept children and className props for flexibility
4. Responsive padding adjusts based on breakpoints (mobile: 1rem, desktop: 2rem)
5. Max-width constrains content to readable width (e.g., 1280px)
6. Components are fully typed with TypeScript
7. Documentation added with usage examples

### Story 2.5: Build Reusable Card Component

As a developer,
I want a flexible Card component for displaying content blocks,
so that projects, skills, and experience can be presented consistently.

**Acceptance Criteria:**

1. Card component created extending shadcn/ui Card with custom styling
2. Variants supported: default, elevated (with shadow), bordered
3. Optional header, content, and footer slots
4. Hover state with subtle elevation change
5. Responsive sizing and spacing
6. Fully accessible with proper ARIA attributes
7. TypeScript props interface defined with JSDoc comments

### Story 2.6: Create Typography Components

As a developer,
I want reusable typography components (Heading, Text, Link),
so that text styling is consistent and semantic across the portfolio.

**Acceptance Criteria:**

1. `Heading` component created with variants (h1, h2, h3, h4)
2. `Text` component created with variants (body, small, large, muted)
3. `Link` component created with hover states and external link handling
4. Components use semantic HTML elements
5. Proper heading hierarchy enforced through TypeScript types
6. Responsive font sizes defined for each variant
7. Components support className prop for customization

### Story 2.7: Implement Responsive Grid System

As a developer,
I want a responsive grid utility,
so that I can create multi-column layouts that adapt to screen sizes.

**Acceptance Criteria:**

1. Grid component created using CSS Grid with Tailwind utilities
2. Responsive column counts: 1 col (mobile), 2 cols (tablet), 3+ cols (desktop)
3. Consistent gap spacing between grid items
4. Support for custom column configurations via props
5. Auto-fit and auto-fill grid options available
6. Component works with any child elements
7. Test page demonstrates various grid configurations

---

## Epic 3: Content Infrastructure & AI-Assisted Content Creation

**Expanded Goal:** Create the content management structure using markdown files with frontmatter, define TypeScript schemas for content validation, and generate AI-drafted content (professional bio, 3-5 project case studies) based on Carson's resume. This epic can be worked in parallel with Epic 2.

### Story 3.1: Set Up Content Directory Structure and Markdown Parser

As a developer,
I want to create a content directory with markdown file support,
so that content can be easily managed and updated without code changes.

**Acceptance Criteria:**

1. `/content` directory created with subdirectories: `/bio`, `/projects`, `/experience`
2. `gray-matter` library installed for parsing markdown frontmatter
3. Utility functions created to read and parse markdown files (`lib/content.ts`)
4. TypeScript interfaces defined for content types (Bio, Project, Experience)
5. Test markdown file created and successfully parsed
6. Content utility functions handle errors gracefully
7. Documentation added explaining content file structure

### Story 3.2: Define Content Schemas and Validation

As a developer,
I want Zod schemas for all content types,
so that content is validated and type-safe throughout the application.

**Acceptance Criteria:**

1. Zod schemas created for Bio, Project, and Experience content types
2. Schemas validate required fields, data types, and constraints
3. TypeScript types inferred from Zod schemas
4. Validation helper functions created for content parsing
5. Error messages provide clear feedback for invalid content
6. Test cases written for schema validation
7. Schemas exported from central location (`lib/schemas.ts`)

### Story 3.3: AI-Generate Professional Bio Content

As Carson,
I want an AI-drafted professional bio highlighting my career transition and expertise,
so that visitors understand my background and value proposition.

**Acceptance Criteria:**

1. Bio content drafted based on resume (300-500 words)
2. Content highlights healthcare → software engineering transition story
3. Technical expertise and key achievements mentioned (40% optimization, etc.)
4. Professional yet approachable tone maintained
5. Bio saved as markdown file: `/content/bio/about.md`
6. Frontmatter includes metadata (title, lastUpdated, etc.)
7. Content reviewed and approved by Carson (or marked for future refinement)

### Story 3.4: AI-Generate Project Case Study #1 (Integrity Web Consulting)

As Carson,
I want a detailed case study for the Integrity Web Consulting project,
so that I can showcase my provider registration workflow optimization achievement.

**Acceptance Criteria:**

1. Case study follows template: Problem, Solution, Technologies, Outcomes
2. Highlights 40% completion time reduction achievement
3. Technologies listed: C#, .NET, jQuery, JavaScript, SSMS, WordPress, React, Tailwind
4. Auth0 authentication and modular architecture mentioned
5. Professional project image sourced (mockup, diagram, or stock photo)
6. Saved as `/content/projects/integrity-web-consulting.md`
7. Frontmatter includes: title, date, technologies, featured: true

### Story 3.5: AI-Generate Project Case Study #2 (Sogeti Serverless Integration)

As Carson,
I want a detailed case study for the Sogeti serverless Azure project,
so that I can demonstrate my cloud architecture expertise.

**Acceptance Criteria:**

1. Case study follows template structure
2. Highlights RESTful API design, microservice architecture, serverless computing
3. Technologies listed: Azure Functions, CosmosDB, C#, .NET
4. Scalable and cost-effective cloud solution emphasized
5. Professional project image sourced
6. Saved as `/content/projects/sogeti-serverless.md`
7. Frontmatter properly configured

### Story 3.6: AI-Generate Project Case Study #3 (RK Mechanical Inventory System)

As Carson,
I want a detailed case study for the RK Mechanical inventory management project,
so that I can showcase my full-stack and integration capabilities.

**Acceptance Criteria:**

1. Case study follows template structure
2. Highlights multi-million dollar inventory system with RFID integration
3. Technologies listed: JavaScript, React, Django, Docker, Microsoft Graph, Algolia
4. SPA centralization and microservice architecture mentioned
5. Professional project image sourced
6. Saved as `/content/projects/rk-mechanical.md`
7. Frontmatter properly configured

### Story 3.7: Source and Optimize Project Images

As a developer,
I want optimized, professional images for all project case studies,
so that the portfolio looks polished and loads quickly.

**Acceptance Criteria:**

1. 3-5 project images sourced (mockups, diagrams, or licensed stock photos)
2. Images saved in `/public/images/projects/` directory
3. Images optimized for web (WebP format, appropriate dimensions)
4. Alt text written for each image (accessibility)
5. Image references added to project markdown frontmatter
6. Images display correctly when rendered
7. Licensing documented for any stock photos used

---

## Epic 4: Hero & About Sections

**Expanded Goal:** Implement the hero section with value proposition headline, professional headshot, and CTA button, plus the About section that tells Carson's career transition story. These sections create the critical first impression and establish credibility.

### Story 4.1: Build Hero Section Component

As a visitor,
I want to see an impactful hero section when I land on the portfolio,
so that I immediately understand Carson's value proposition and expertise.

**Acceptance Criteria:**

1. Hero component created with full-viewport height and centered content
2. Headline displays: "Senior Full-Stack Engineer specializing in .NET/React/Azure"
3. Subheadline provides brief context (e.g., "Building scalable, performant web applications")
4. Professional headshot image displayed with proper sizing and optimization
5. Primary CTA button ("Get In Touch") scrolls to contact section
6. Responsive layout (stacked on mobile, side-by-side on desktop)
7. Semantic HTML with proper heading hierarchy (h1 for headline)

### Story 4.2: Implement Hero Section Animations

As a visitor,
I want subtle animations in the hero section,
so that the portfolio feels polished and modern.

**Acceptance Criteria:**

1. Framer Motion installed and configured
2. Fade-in animation for headline and subheadline (staggered timing)
3. Slide-in animation for headshot image
4. Hover effect on CTA button (scale, color transition)
5. Animations respect `prefers-reduced-motion` media query
6. Animation timing feels natural (not too fast or slow)
7. No layout shift during animations (CLS < 0.1)

### Story 4.3: Source and Optimize Professional Headshot

As Carson,
I want a professional headshot image in the hero section,
so that visitors can put a face to the name and feel a personal connection.

**Acceptance Criteria:**

1. Professional headshot image sourced (existing photo, new session, or high-quality AI avatar)
2. Image cropped to appropriate aspect ratio (square or portrait)
3. Image optimized for web (WebP format, multiple sizes for responsive)
4. Next.js Image component used with proper width/height attributes
5. Alt text written for accessibility
6. Image saved in `/public/images/headshot.webp`
7. Image displays correctly across all device sizes

### Story 4.4: Build About Section Component

As a visitor,
I want to read Carson's professional bio and career story,
so that I understand his background, expertise, and what makes him unique.

**Acceptance Criteria:**

1. About section component created with Section and Container layout
2. Section heading: "About Me" or similar
3. Bio content loaded from `/content/bio/about.md`
4. Markdown content rendered with proper typography styling
5. Two-column layout on desktop (bio text + optional image/graphic)
6. Single column on mobile with proper spacing
7. Semantic HTML with proper heading hierarchy (h2 for section title)

### Story 4.5: Integrate Bio Content and Markdown Rendering

As a developer,
I want to render markdown bio content with proper styling,
so that the About section displays formatted text beautifully.

**Acceptance Criteria:**

1. Markdown rendering library installed (react-markdown or similar)
2. Bio content from `/content/bio/about.md` parsed and rendered
3. Custom styling applied to markdown elements (paragraphs, links, lists)
4. Links open in new tab with proper security attributes
5. Typography components used for consistent styling
6. Content updates without code changes (edit markdown file only)
7. Error handling if bio content is missing or invalid

### Story 4.6: Add Personal Touches to About Section

As a visitor,
I want to see Carson's personality and interests,
so that I get a sense of who he is beyond his technical skills.

**Acceptance Criteria:**

1. Hobbies/interests section added (Hiking, Camping, Snow Skiing, Video Games, Disc Golf, F1)
2. Icons or visual elements represent each hobby (Lucide React icons)
3. Optional: "Fun Facts" or "When I'm Not Coding" subsection
4. Content maintains professional tone while showing personality
5. Section is visually distinct but cohesive with overall design
6. Responsive layout (grid on desktop, stacked on mobile)
7. Adds human element without detracting from professional focus

---

## Epic 5: Skills & Experience Showcase

**Expanded Goal:** Display Carson's technical skills organized by category (Frontend, Backend, Tools) with visual indicators, and create a professional experience timeline showing work history with key achievements. These sections establish technical credibility and career progression.

### Story 5.1: Build Skills Section Component

As a visitor,
I want to see Carson's technical skills organized by category,
so that I can quickly assess his technical expertise and stack familiarity.

**Acceptance Criteria:**

1. Skills section component created with Section and Container layout
2. Section heading: "Technical Skills" or similar
3. Skills organized into categories: Frontend, Backend, Tools/Other
4. Grid layout for skill items (responsive: 2-3 columns mobile, 4-6 desktop)
5. Each skill displays technology name with icon or badge
6. Semantic HTML with proper heading hierarchy
7. Responsive spacing and alignment

### Story 5.2: Create Skill Badge/Card Components

As a developer,
I want reusable skill badge components,
so that skills are displayed consistently with visual appeal.

**Acceptance Criteria:**

1. SkillBadge component created with technology name and optional icon
2. Icons sourced from Lucide React or technology-specific icon library
3. Hover effect provides subtle visual feedback
4. Variants supported: default, highlighted (for primary skills)
5. Component accepts custom styling via className prop
6. TypeScript interface defined for skill data structure
7. Component is accessible with proper ARIA labels

### Story 5.3: Populate Skills Data from Resume

As Carson,
I want my technical skills accurately represented,
so that hiring managers see my full technology stack.

**Acceptance Criteria:**

1. Skills data structure created in `/lib/data/skills.ts`
2. Frontend skills: JavaScript, TypeScript, React, Next.js, Tailwind CSS, jQuery, Angular, HTML, CSS
3. Backend skills: C#, .NET, Azure, Azure Functions, CosmosDB, SQL Server, PHP, WordPress
4. Tools: Git, Azure DevOps, Visual Studio, Windsurf, Cursor, Docker, Atlassian
5. Skills marked as "featured" or "primary" for highlighting
6. Data structure is type-safe with TypeScript
7. Skills render correctly in Skills section

### Story 5.4: Build Experience Timeline Component

As a visitor,
I want to see Carson's work history in a timeline format,
so that I understand his career progression and experience level.

**Acceptance Criteria:**

1. Experience section component created with Section and Container layout
2. Section heading: "Professional Experience" or similar
3. Timeline component displays jobs in reverse chronological order
4. Each job shows: company name, role, dates, key achievements, technologies
5. Visual timeline indicator (vertical line with dots/markers)
6. Responsive layout (full timeline on desktop, simplified on mobile)
7. Semantic HTML with proper heading hierarchy

### Story 5.5: Create Experience Card Component

As a developer,
I want a reusable experience card component,
so that each job is displayed consistently with proper information hierarchy.

**Acceptance Criteria:**

1. ExperienceCard component created with company, role, dates, description, technologies
2. Company name and role prominently displayed
3. Date range shown in consistent format (e.g., "April 2024 - Oct 2025")
4. Key achievements displayed as bullet list
5. Technologies shown as badges or tags
6. Expandable/collapsible detail view (optional for mobile)
7. Component is fully typed with TypeScript

### Story 5.6: Populate Experience Data from Resume

As Carson,
I want my work history accurately represented with key achievements,
so that hiring managers see my professional impact and growth.

**Acceptance Criteria:**

1. Experience data structure created in `/lib/data/experience.ts`
2. All jobs from resume included: Integrity Web, Sogeti, Spear Claims, Insurium, RK Mechanical
3. Each job includes: company, role, dates, achievements array, technologies array
4. Key achievements highlighted (e.g., "40% workflow optimization")
5. Data structure is type-safe with TypeScript
6. Experience renders correctly in timeline
7. Most recent/relevant jobs appear first

---

## Epic 6: Projects Portfolio Section

**Expanded Goal:** Showcase 3-5 featured project case studies with detailed descriptions, metrics, technologies, and visuals. This is the core differentiator of the portfolio - where Carson proves his technical depth and business impact through real-world examples.

### Story 6.1: Build Projects Section Component

As a visitor,
I want to see Carson's featured projects prominently displayed,
so that I can understand the type and quality of work he produces.

**Acceptance Criteria:**

1. Projects section component created with Section and Container layout
2. Section heading: "Featured Projects" or similar
3. Grid layout for project cards (1 col mobile, 2 cols tablet, 3 cols desktop)
4. Projects loaded from markdown files in `/content/projects/`
5. Only projects marked as `featured: true` are displayed
6. Projects sorted by date (most recent first)
7. Semantic HTML with proper heading hierarchy

### Story 6.2: Create Project Card Component

As a developer,
I want a reusable project card component for the grid view,
so that projects are displayed consistently with key information visible.

**Acceptance Criteria:**

1. ProjectCard component created with image, title, summary, technologies
2. Card uses Card component from design system with custom styling
3. Project image displayed with Next.js Image optimization
4. Title and brief description (1-2 sentences) visible on card
5. Technology badges displayed at bottom of card
6. Hover effect with elevation change and subtle animation
7. Click/tap opens detailed project view (modal or dedicated section)

### Story 6.3: Build Project Detail View Component

As a visitor,
I want to see detailed information about each project,
so that I can understand the problem, solution, and Carson's contribution.

**Acceptance Criteria:**

1. ProjectDetail component created for expanded project view
2. Displays full case study: Problem Statement, Solution Approach, Technologies, Key Achievements, Outcomes
3. Hero image displayed prominently at top
4. Markdown content rendered with proper styling
5. Metrics/achievements highlighted visually (callout boxes or cards)
6. Technologies displayed as badges with icons
7. Close/back button returns to projects grid

### Story 6.4: Implement Project Detail Modal or Expandable View

As a developer,
I want a smooth UX for viewing project details,
so that users can explore projects without losing context.

**Acceptance Criteria:**

1. Modal or expandable view implemented for project details
2. Smooth open/close animation using Framer Motion
3. Modal is accessible (keyboard navigation, focus trap, ESC to close)
4. Modal/view is responsive (full screen on mobile, centered on desktop)
5. Background scroll locked when modal is open
6. URL updates with project slug (optional, for sharing)
7. Proper ARIA attributes for screen readers

### Story 6.5: Integrate Project Content from Markdown Files

As a developer,
I want projects to load from markdown files,
so that content can be updated without code changes.

**Acceptance Criteria:**

1. Project content loaded from `/content/projects/*.md` files
2. Frontmatter parsed for metadata (title, date, technologies, featured, image)
3. Markdown body rendered with react-markdown
4. Custom styling applied to markdown elements
5. Images in markdown content properly resolved and optimized
6. Error handling for missing or invalid project files
7. TypeScript types ensure type-safe project data

### Story 6.6: Add Project Filtering and Sorting (Optional Enhancement)

As a visitor,
I want to filter projects by technology or category,
so that I can find projects relevant to my interests.

**Acceptance Criteria:**

1. Filter buttons/tags added above projects grid (e.g., "All", "React", ".NET", "Azure")
2. Clicking filter shows only projects using that technology
3. Multiple filters can be active simultaneously (AND logic)
4. Filter state managed with React state or URL params
5. Smooth animation when projects filter in/out
6. "Clear filters" button resets to show all projects
7. Filter UI is responsive and accessible

### Story 6.7: Optimize Project Images and Performance

As a developer,
I want project images optimized for performance,
so that the portfolio loads quickly despite rich visual content.

**Acceptance Criteria:**

1. All project images converted to WebP format with fallbacks
2. Multiple image sizes generated for responsive loading
3. Next.js Image component used with proper width/height attributes
4. Lazy loading implemented for below-the-fold images
5. Image blur placeholders generated for smooth loading
6. Total image payload optimized (< 500KB for all project images)
7. Lighthouse performance score remains 95+ with images loaded

---

## Epic 7: Contact & Communication

**Expanded Goal:** Enable visitors to contact Carson through multiple methods including direct links (email, LinkedIn, GitHub, phone) and a functional contact form with email integration via Resend API. This epic converts portfolio visitors into conversations.

### Story 7.1: Build Contact Section Component

As a visitor,
I want to see clear contact options,
so that I can easily reach out to Carson about opportunities.

**Acceptance Criteria:**

1. Contact section component created with Section and Container layout
2. Section heading: "Get In Touch" or similar
3. Two-column layout: contact methods (left) + contact form (right)
4. Single column on mobile with contact methods above form
5. Brief introductory text encouraging visitors to reach out
6. Semantic HTML with proper heading hierarchy
7. Section has distinct visual treatment (background color or border)

### Story 7.2: Add Direct Contact Links

As a visitor,
I want multiple ways to contact Carson,
so that I can choose my preferred communication method.

**Acceptance Criteria:**

1. Email link displayed: carson.workflow@gmail.com (mailto: link)
2. LinkedIn profile link with icon (opens in new tab)
3. GitHub profile link with icon (opens in new tab)
4. Phone number displayed: 636-399-5633 (tel: link for mobile)
5. Each contact method has icon from Lucide React
6. Links styled consistently with hover effects
7. All external links have `rel="noopener noreferrer"`

### Story 7.3: Build Contact Form Component

As a visitor,
I want to fill out a contact form,
so that I can send Carson a message directly from the portfolio.

**Acceptance Criteria:**

1. Contact form component created with React Hook Form
2. Form fields: Name (required), Email (required), Message (required, textarea)
3. Field labels and placeholders provide clear guidance
4. Form uses shadcn/ui Input, Label, and Textarea components
5. Submit button with loading state during submission
6. Form is fully accessible (labels, ARIA attributes, keyboard navigation)
7. Responsive layout with proper spacing

### Story 7.4: Implement Form Validation

As a developer,
I want robust form validation,
so that only valid submissions are sent and users get clear feedback.

**Acceptance Criteria:**

1. Zod schema created for form validation (name, email, message)
2. Email field validates proper email format
3. Message field has minimum length requirement (e.g., 10 characters)
4. Real-time validation provides immediate feedback
5. Error messages display inline below each field
6. Submit button disabled until form is valid
7. Form cannot be submitted with invalid data

### Story 7.5: Integrate Resend API for Email Delivery

As a developer,
I want contact form submissions to send emails via Resend API,
so that Carson receives messages from visitors.

**Acceptance Criteria:**

1. Resend API key added to environment variables
2. Next.js API route created: `/api/contact`
3. API route validates request body using Zod schema
4. Email sent to carson.workflow@gmail.com using Resend SDK
5. Email includes: sender name, sender email, message content
6. Email has professional formatting and subject line
7. API route returns appropriate status codes (200, 400, 500)

### Story 7.6: Implement Rate Limiting for Contact Form

As a developer,
I want rate limiting on the contact form API,
so that the form cannot be abused or spammed.

**Acceptance Criteria:**

1. Rate limiting implemented using Upstash Redis or similar
2. Limit: 3 submissions per IP address per hour
3. Rate limit exceeded returns 429 status with clear message
4. Client-side displays rate limit error to user
5. Rate limit resets after time window expires
6. Implementation does not impact legitimate users
7. Rate limiting configuration is environment-aware (relaxed in development)

### Story 7.7: Add Form Success and Error States

As a visitor,
I want clear feedback after submitting the contact form,
so that I know if my message was sent successfully.

**Acceptance Criteria:**

1. Success state displays confirmation message after successful submission
2. Success message thanks user and sets expectation for response time
3. Form clears after successful submission
4. Error state displays helpful message if submission fails
5. Error message suggests alternative contact methods (email link)
6. Loading state shows spinner/indicator during submission
7. All states are accessible to screen readers

---

## Epic 8: SEO, Analytics & Performance Optimization

**Expanded Goal:** Implement comprehensive SEO best practices, integrate analytics tracking, and optimize performance to meet Lighthouse 95+ targets. This epic ensures the portfolio is discoverable, measurable, and blazing fast.

### Story 8.1: Implement SEO Metadata and Open Graph Tags

As a developer,
I want comprehensive SEO metadata,
so that the portfolio ranks well in search results and looks professional when shared.

**Acceptance Criteria:**

1. Page title optimized: "Carson Antoine | Senior Full-Stack Engineer | .NET, React, Azure"
2. Meta description written (150-160 characters) highlighting value proposition
3. Open Graph tags added (og:title, og:description, og:image, og:url, og:type)
4. Twitter Card tags added (twitter:card, twitter:title, twitter:description, twitter:image)
5. Social share image created and optimized (1200x630px)
6. Canonical URL set to prevent duplicate content issues
7. All metadata validated using social media debuggers

### Story 8.2: Generate Sitemap and Robots.txt

As a developer,
I want sitemap and robots.txt files,
so that search engines can efficiently crawl and index the portfolio.

**Acceptance Criteria:**

1. `sitemap.xml` generated listing all pages (home page, future blog posts)
2. Sitemap includes lastmod, changefreq, and priority for each URL
3. `robots.txt` created allowing all crawlers access
4. Sitemap URL added to robots.txt
5. Files accessible at `/sitemap.xml` and `/robots.txt`
6. Sitemap submitted to Google Search Console (post-launch)
7. Next.js metadata API used for generation

### Story 8.3: Implement Structured Data (JSON-LD)

As a developer,
I want structured data markup,
so that search engines understand the portfolio content and can display rich snippets.

**Acceptance Criteria:**

1. Person schema added with Carson's information (name, jobTitle, url, sameAs links)
2. WebSite schema added for the portfolio site
3. JSON-LD scripts added to page head
4. Structured data validates without errors using Google Rich Results Test
5. Schema includes social profile links (LinkedIn, GitHub)
6. Professional details included (skills, worksFor, alumniOf)
7. Structured data is dynamically generated from data files

### Story 8.4: Integrate Analytics Tracking

As Carson,
I want analytics tracking on the portfolio,
so that I can measure visitor behavior and optimize for conversions.

**Acceptance Criteria:**

1. Analytics platform selected and configured (Plausible or Google Analytics 4)
2. Analytics script added to root layout with proper loading strategy
3. Page views tracked automatically
4. Custom events tracked: CTA clicks, project views, contact form submissions
5. Analytics respects user privacy (GDPR-compliant if using GA4)
6. Analytics dashboard accessible and showing data
7. No impact on Lighthouse performance score

### Story 8.5: Optimize Core Web Vitals

As a developer,
I want to optimize Core Web Vitals,
so that the portfolio meets Google's performance standards and provides excellent UX.

**Acceptance Criteria:**

1. Largest Contentful Paint (LCP) < 2.5s on both mobile and desktop
2. First Input Delay (FID) < 100ms
3. Cumulative Layout Shift (CLS) < 0.1
4. Font loading optimized with font-display: swap and preloading
5. Critical CSS inlined for above-the-fold content
6. Images use proper sizing to prevent layout shift
7. Core Web Vitals validated using PageSpeed Insights and Chrome DevTools

### Story 8.6: Implement Performance Optimizations

As a developer,
I want comprehensive performance optimizations,
so that the portfolio loads instantly and feels responsive.

**Acceptance Criteria:**

1. Code splitting implemented for route-based and component-based chunks
2. Unused JavaScript eliminated through tree shaking
3. CSS purged of unused styles via Tailwind's purge configuration
4. Third-party scripts loaded asynchronously or deferred
5. Resource hints added (preconnect, dns-prefetch for external domains)
6. Service worker or caching strategy implemented (optional)
7. Bundle size analyzed and optimized (< 200KB initial JavaScript)

### Story 8.7: Run Lighthouse Audit and Fix Issues

As a developer,
I want to achieve Lighthouse scores of 95+ across all categories,
so that the portfolio demonstrates technical excellence.

**Acceptance Criteria:**

1. Lighthouse audit run on production deployment
2. Performance score: 95+ (mobile and desktop)
3. Accessibility score: 100
4. Best Practices score: 95+
5. SEO score: 95+
6. All critical issues identified and fixed
7. Lighthouse CI integrated into deployment pipeline (optional)

---

## Epic 9: Testing, Accessibility & Launch Preparation

**Expanded Goal:** Conduct comprehensive testing across accessibility, cross-browser compatibility, and functionality. Fix all critical issues, configure custom domain, and prepare for production launch. This epic ensures the portfolio is polished, accessible, and ready for the world.

### Story 9.1: Conduct Accessibility Audit and Remediation

As a developer,
I want to ensure WCAG 2.1 AA compliance,
so that the portfolio is accessible to all users including those with disabilities.

**Acceptance Criteria:**

1. Automated accessibility audit run using axe DevTools
2. Manual testing with screen readers (VoiceOver on macOS, NVDA on Windows)
3. Keyboard navigation tested for all interactive elements
4. Color contrast verified for all text (4.5:1 for body, 3:1 for UI)
5. All images have descriptive alt text
6. Form labels and ARIA attributes properly implemented
7. All accessibility issues documented and fixed

### Story 9.2: Cross-Browser and Device Testing

As a developer,
I want to test the portfolio across browsers and devices,
so that all users have a consistent, high-quality experience.

**Acceptance Criteria:**

1. Testing completed on Chrome, Firefox, Safari, Edge (latest 2 versions)
2. Mobile testing on iOS Safari and Chrome Mobile
3. Responsive design verified at breakpoints: 375px, 768px, 1024px, 1920px
4. All interactive elements work correctly on touch devices
5. No console errors or warnings in any browser
6. Visual regression testing completed (screenshots compared)
7. Issues documented and fixed

### Story 9.3: Functional Testing of All Features

As a developer,
I want to test all portfolio features end-to-end,
so that everything works correctly before launch.

**Acceptance Criteria:**

1. Navigation: All links work, smooth scrolling functions, active states update
2. Hero section: CTA button scrolls to contact, animations play correctly
3. About section: Bio content renders, hobbies display properly
4. Skills section: All skills display with correct categories
5. Experience section: Timeline renders, all jobs show correctly
6. Projects section: Cards display, detail view opens/closes, filtering works (if implemented)
7. Contact form: Validation works, submission succeeds, email received, rate limiting functions

### Story 9.4: Content Review and Proofreading

As Carson,
I want all content reviewed for accuracy and professionalism,
so that the portfolio represents me well.

**Acceptance Criteria:**

1. Bio content proofread for grammar, spelling, tone
2. Project case studies reviewed for accuracy and clarity
3. Experience descriptions verified against resume
4. Skills list confirmed as current and accurate
5. Contact information verified (email, phone, LinkedIn, GitHub)
6. All links tested and confirmed working
7. Content approved by Carson for launch

### Story 9.5: Configure Custom Domain

As Carson,
I want the portfolio accessible at a custom domain,
so that it looks professional and is easy to share.

**Acceptance Criteria:**

1. Domain purchased (carsonantoine.com or alternative)
2. Domain configured in Vercel project settings
3. DNS records updated to point to Vercel
4. SSL certificate provisioned and active (HTTPS working)
5. www subdomain redirects to apex domain (or vice versa)
6. Domain propagation verified (accessible globally)
7. Old Vercel URL redirects to custom domain

### Story 9.6: Create Launch Checklist and Documentation

As a developer,
I want comprehensive documentation,
so that the portfolio can be maintained and updated easily.

**Acceptance Criteria:**

1. README.md created with project overview, setup instructions, and deployment guide
2. Content update guide documented (how to add projects, update bio, etc.)
3. Environment variables documented in .env.example
4. Architecture decisions documented (tech stack, folder structure)
5. Launch checklist created (final pre-launch verification steps)
6. Post-launch monitoring plan documented (analytics, error tracking)
7. Future enhancements list created (Phase 2 features)

### Story 9.7: Final Pre-Launch Review and Go-Live

As Carson,
I want to conduct a final review before launch,
so that I'm confident the portfolio is ready for public viewing.

**Acceptance Criteria:**

1. All epics completed and stories verified
2. Lighthouse audit shows 95+ scores across all categories
3. Accessibility audit passes with no critical issues
4. Cross-browser testing completed with no blockers
5. Content reviewed and approved
6. Custom domain working with HTTPS
7. Analytics tracking verified and working
8. Portfolio announced on LinkedIn and shared with network

---

## Next Steps

### UX Expert Handoff

**@ux-expert** - Please review this PRD and create comprehensive design deliverables for the portfolio:

**Your Deliverables:**

1. **Wireframes** (low-fidelity) for all sections: Hero, About, Skills, Experience, Projects, Contact, Footer
2. **Visual Mockups** (high-fidelity) for desktop (1920px) and mobile (375px) views
3. **Design System Specification:**
   - Complete color palette with hex codes (primary, accent, neutral shades)
   - Typography scale (font families, sizes, weights, line heights)
   - Spacing system (padding, margins, gaps)
   - Component states (default, hover, active, focus, disabled)
   - Border radius, shadows, and other visual tokens
4. **Component Specifications** for custom components (ProjectCard, SkillBadge, ExperienceCard, etc.)
5. **Interaction Patterns** (animations, transitions, micro-interactions)
6. **Responsive Behavior** documentation for key breakpoints

**Design Principles to Follow:**

- "Confident Minimalism" - clean, professional, not flashy
- Performance-first (lightweight, optimized assets)
- Accessibility-first (WCAG 2.1 AA compliance)
- Mobile-first responsive design
- Showcase technical sophistication through implementation quality

**Reference Materials:**

- Review PRD Section: "User Interface Design Goals" for detailed UX vision
- Review Project Brief: `docs/brief.md` for business context
- Target audience: Technical hiring managers and senior engineers

**Timeline:** 2-3 days for complete design deliverables

---

### Architect Handoff

**@architect** - After UX Expert completes designs, please create technical architecture:

**Your Deliverables:**

1. **System Architecture Document** covering:
   - Application structure and folder organization
   - Component hierarchy and relationships
   - Data flow and state management approach
   - API design for contact form endpoint
   - Content management strategy (markdown parsing, validation)
2. **Technology Stack Decisions** (validate/refine PRD Technical Assumptions)
3. **Component Architecture** for all major components
4. **Performance Strategy** to achieve Lighthouse 95+ targets
5. **Security Implementation** (CSP headers, rate limiting, input sanitization)
6. **Deployment Architecture** (Vercel configuration, environment variables)

**Key Considerations:**

- Next.js 14+ App Router with React Server Components
- TypeScript strict mode throughout
- Tailwind CSS + shadcn/ui component library
- Markdown-based content management (no database)
- Vercel deployment with zero-config
- Must achieve NFRs: Lighthouse 95+, WCAG AA, Core Web Vitals

**Reference Materials:**

- Review PRD Section: "Technical Assumptions" for stack decisions
- Review UX Expert designs for component requirements
- Review all Epic stories for implementation requirements

**Timeline:** 1-2 days after receiving UX designs

---

## PRD Summary

**Project:** Carson Antoine - Professional Portfolio Site  
**Total Epics:** 9  
**Total Stories:** 58  
**Estimated Timeline:** 2-3 weeks development (after design phase)  
**Success Criteria:** Lighthouse 95+, WCAG AA, 30% increase in interview conversion

**Epic Breakdown:**

1. Foundation & Project Setup (7 stories)
2. Core UI Framework & Design System (7 stories)
3. Content Infrastructure & AI-Assisted Content Creation (7 stories)
4. Hero & About Sections (6 stories)
5. Skills & Experience Showcase (6 stories)
6. Projects Portfolio Section (7 stories)
7. Contact & Communication (7 stories)
8. SEO, Analytics & Performance Optimization (7 stories)
9. Testing, Accessibility & Launch Preparation (7 stories)

**Key Deliverables:**

- Modern, performant Next.js 14 portfolio
- 3-5 featured project case studies
- Functional contact form with email integration
- SEO-optimized with analytics tracking
- WCAG 2.1 AA accessible
- Deployed at custom domain with HTTPS

---

**Document Status:** ✅ Complete - Ready for UX Expert Review  
**Next Agent:** @ux-expert for design deliverables  
**Last Updated:** November 5, 2025
