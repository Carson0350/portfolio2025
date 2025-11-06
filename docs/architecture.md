# Carson Antoine - Professional Portfolio Site

## Fullstack Architecture Document

**Version:** 1.0  
**Date:** November 5, 2025  
**Status:** Draft - In Progress  
**Project Type:** Personal Portfolio Website

---

## Introduction

This document outlines the complete fullstack architecture for Carson Antoine's Professional Portfolio Site, including backend systems, frontend implementation, and their integration. It serves as the single source of truth for AI-driven development, ensuring consistency across the entire technology stack.

This unified approach combines what would traditionally be separate backend and frontend architecture documents, streamlining the development process for modern fullstack applications where these concerns are increasingly intertwined.

### Starter Template or Existing Project

**Decision: Greenfield Next.js 14 Project (No Starter Template)**

**Rationale:**

- PRD specifies Next.js 14.2+ with App Router (latest features)
- Custom design system required ("Confident Minimalism")
- Specific tech stack already defined (shadcn/ui, Tailwind, Framer Motion)
- Simple architecture (single-page portfolio, no complex backend)
- Using `create-next-app` with TypeScript provides clean foundation

**No starter template needed because:**

1. Portfolio is straightforward (no auth, no database, no complex state)
2. shadcn/ui provides component foundation without template lock-in
3. Vercel deployment is zero-config for Next.js
4. Custom design requirements make templates constraining

**Alternative Considered:**

- T3 Stack (Next.js + tRPC + Prisma + NextAuth) - **Rejected:** Overkill, includes database/auth we don't need
- Vercel Portfolio Template - **Rejected:** Generic design, would require extensive customization

**Approach:** Start with `create-next-app`, add dependencies incrementally, maintain full control over architecture

### Change Log

| Date       | Version | Description                            | Author              |
| ---------- | ------- | -------------------------------------- | ------------------- |
| 2025-11-05 | 1.0     | Initial architecture document creation | Winston (Architect) |

---

## High Level Architecture

### Technical Summary

Carson's portfolio is a **statically-generated Next.js 14 application** deployed on Vercel's edge network, combining React Server Components for optimal performance with serverless API routes for contact form functionality. The architecture embraces a **monolithic approach** where frontend and backend coexist within a single Next.js codebase, eliminating the complexity of separate services while maintaining clear separation of concerns through Next.js's App Router structure.

Content is managed through **markdown files with frontmatter**, parsed at build time to generate static pages, ensuring blazing-fast load times and perfect SEO. The contact form leverages **Resend API** for email delivery via a Next.js API route, with **Upstash Redis** providing edge-based rate limiting to prevent abuse. All styling is handled by **Tailwind CSS** with **shadcn/ui** components, creating a consistent design system that meets WCAG 2.1 AA accessibility standards.

This architecture achieves the PRD's ambitious performance goals (Lighthouse 95+, Core Web Vitals green) through static generation, edge caching, and careful optimization of images, fonts, and JavaScript bundles. The entire stack is optimized for a **solo developer workflow** with TypeScript strict mode, ESLint, Prettier, and Husky ensuring code quality from day one.

### Platform and Infrastructure Choice

**Platform:** Vercel ⭐ (Recommended)

**Rationale:**

- Zero-config Next.js deployment (built by Next.js creators)
- Automatic SSL, CDN, global edge network
- Preview deployments for every git push
- Built-in Web Vitals monitoring
- Free tier sufficient (100GB bandwidth, unlimited requests)
- Optimal Next.js performance and optimization

**Key Services:**

- Vercel Edge Network (CDN)
- Vercel Serverless Functions (API routes)
- Vercel Analytics (Web Vitals tracking)
- Vercel Edge Config (environment variables)

**Deployment Host and Regions:** Global edge network (automatic), primary region: US East

**Alternatives Considered:**

- AWS (Amplify + S3 + CloudFront) - Rejected: Complex setup, higher cost ($5-20/month)
- Netlify - Rejected: Less optimized Next.js support

### Repository Structure

**Decision: Monorepo (Single Repository)**

```
portfolio/
├── app/                  # Next.js 14 App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── api/contact/      # Contact form API
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections
│   └── shared/           # Shared components
├── content/              # Markdown content
│   ├── bio/              # Bio
│   └── projects/         # Projects
├── lib/                  # Utilities
│   ├── content.ts        # Markdown parsing
│   ├── email.ts          # Resend integration
│   └── rate-limit.ts     # Rate limiting
├── public/images/        # Static assets
├── types/                # TypeScript types
├── .env.local            # Environment variables
├── next.config.js        # Next.js config
├── tailwind.config.ts    # Tailwind config
└── tsconfig.json         # TypeScript config
```

**Rationale:** Monorepo simplicity, Next.js conventions, clear separation, solo developer friendly

---

## Technology Stack

### Core Framework

- **Next.js 14.2+** - Full-stack React framework (App Router, Server Components, API Routes)
- **React 18+** - UI library
- **TypeScript 5.0+** - Type-safe JavaScript (strict mode)
- **Node.js 18+** - Runtime environment

### Frontend Stack

- **Tailwind CSS 3.4+** - Utility-first CSS, custom design tokens
- **shadcn/ui** - Accessible component library (Radix UI primitives)
- **Lucide React** - Icon library (2px stroke, tree-shakeable)
- **Framer Motion** - Animation library (~30KB gzipped)
- **React Hook Form** - Form state management
- **Zod** - Schema validation (forms + API)
- **gray-matter** - Parse markdown frontmatter
- **react-markdown** - Render markdown content

### Backend Stack

- **Next.js API Routes** - Serverless endpoints
- **Resend** - Email delivery (100 emails/day free tier)
- **Upstash Redis** - Edge-based rate limiting (3 submissions/IP/hour)

### Analytics & Monitoring

- **Plausible Analytics** (recommended) or **Google Analytics 4** - Web analytics
- **Vercel Analytics** - Web Vitals monitoring (built-in)
- **Sentry** (optional) - Error tracking

### Development Tools

- **ESLint** - Linting (Next.js config + custom rules)
- **Prettier** - Code formatting
- **Husky + lint-staged** - Git hooks (pre-commit checks)
- **Vitest + React Testing Library** - Unit/component testing
- **Playwright** (optional) - E2E testing
- **@next/bundle-analyzer** - Bundle size analysis

### Estimated Bundle Size

**~200KB initial JavaScript** (within target)

---

## Frontend Architecture

### Component Hierarchy

```
app/page.tsx (Single Page App)
├── <Navigation />           # Fixed header, mobile menu
├── <HeroSection />          # Value prop, headshot, CTA
├── <AboutSection />         # Bio, hobbies
├── <SkillsSection />        # Tech skills by category
├── <ProjectsSection />      # Project cards grid
├── <ExperienceSection />    # Timeline
├── <ContactSection />       # Contact form + methods
└── <Footer />               # Social links, copyright

components/
├── ui/                      # shadcn/ui components
├── sections/                # Page sections (Server Components)
└── shared/                  # Reusable components
    ├── Container.tsx
    ├── SkillBadge.tsx
    ├── ProjectCard.tsx
    ├── ProjectDetail.tsx    # Client Component (modal)
    ├── ExperienceCard.tsx
    └── ContactForm.tsx      # Client Component (form)
```

### Component Design Patterns

**Server Components (Default):** All sections are Server Components (zero JavaScript, faster load, better SEO)

**Client Components:** Only when needed (`"use client"` directive)

- ContactForm (form state, API calls)
- Navigation (mobile menu, scroll detection)
- ProjectDetail (modal, animations)

**Composition:** Small, focused components composed into larger ones

### Key Components

**Navigation:** Fixed header, smooth scroll, active section highlighting, mobile hamburger menu

**HeroSection:** Two-column layout, headshot (Next.js Image), CTA button, fade-in animations

**ContactForm:** React Hook Form + Zod validation, API call to `/api/contact`, success/error states

**ProjectsSection:** Grid (3/2/1 columns), projects from markdown, click opens modal

**ProjectDetail:** Modal overlay, markdown rendering, focus trap, ESC/backdrop close

### State Management

**No global state needed** - Portfolio is mostly static, local state sufficient (React Hook Form, component state)

**If needed (future):** Zustand (lightweight) or React Context

### Routing & Navigation

**Single-Page App:** `/` (home), `/api/contact` (API)

**Hash Navigation:** `/#about`, `/#skills`, `/#projects`, etc. (smooth scroll, browser back/forward support)

### Data Flow

**Build Time:** Markdown → gray-matter → Zod → Server Components → Static HTML

**Runtime:** Form submit → Validation → `/api/contact` → Rate limit → Email → Response

### Performance Optimizations

- Automatic code splitting (Next.js)
- Lazy load Framer Motion, ProjectDetail modal
- Next.js Image (WebP, responsive, lazy loading)
- Font optimization (`next/font/google`)
- Tailwind purge, tree shaking, bundle analysis

---

## Backend Architecture

### API Routes

**Contact Form Endpoint:** `app/api/contact/route.ts` (POST)

**Request:** `{ name: string, email: string, message: string }`

**Response:** Success (200), Validation Error (400), Rate Limit (429), Server Error (500)

**Flow:**

1. Rate limiting check (Upstash Redis)
2. Validate input (Zod schema)
3. Send email (Resend API)
4. Return success/error

### External Services

**Resend (Email):**

- Send contact form to carson.workflow@gmail.com
- Free tier: 100 emails/day
- Env: `RESEND_API_KEY`

**Upstash Redis (Rate Limiting):**

- 3 submissions per IP per hour
- Edge-based, serverless
- Env: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`

**Analytics:**

- Plausible (recommended) or Google Analytics 4
- Vercel Analytics (Web Vitals, built-in)

### Content Management

**Markdown Files:** `content/bio/`, `content/projects/`

**Build-time Processing:**

- gray-matter (parse frontmatter)
- Zod validation (type-safe)
- Static generation (Next.js)

**Schema Example:**

```typescript
const ProjectSchema = z.object({
  title: z.string(),
  date: z.string(),
  technologies: z.array(z.string()),
  featured: z.boolean(),
  image: z.string(),
});
```

---

## Security & Performance

### Security

- **CSP Headers:** Content Security Policy via Next.js middleware
- **Rate Limiting:** Upstash Redis (3 req/IP/hour)
- **Input Validation:** Zod schemas (client + server)
- **Environment Variables:** Never expose secrets client-side
- **HTTPS:** Automatic via Vercel

### Performance

- **Static Generation:** All pages pre-rendered at build time
- **Edge Caching:** Vercel CDN, global distribution
- **Image Optimization:** Next.js Image (WebP, responsive)
- **Code Splitting:** Automatic route-based splitting
- **Bundle Size:** Target < 200KB initial JS

### Monitoring

- Vercel Analytics (Web Vitals)
- Lighthouse CI (optional)
- Sentry (error tracking, optional)

---

## Deployment

### Vercel Configuration

**Build Command:** `next build`  
**Output Directory:** `.next`  
**Install Command:** `npm install`  
**Dev Command:** `next dev`

**Environment Variables:**

```
RESEND_API_KEY=re_xxxxx
UPSTASH_REDIS_REST_URL=https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=Axxxxx
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=carsonantoine.com (optional)
```

**Deployment Flow:**

1. Push to GitHub main branch
2. Vercel auto-builds and deploys
3. Preview deployments for PRs
4. Custom domain configured in Vercel dashboard

---

**Document Status:** ✅ Complete - Ready for Development  
**Next Agent:** @dev for implementation  
**Last Updated:** November 5, 2025
