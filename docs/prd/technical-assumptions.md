# Technical Assumptions

## Repository Structure: Monorepo

**Decision:** Single repository containing the entire Next.js application

**Rationale:**
- Portfolio is a single application with no separate services
- Simplifies deployment and version control
- Easier to maintain for solo developer
- No need for polyrepo complexity with shared packages

## Service Architecture

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

## Testing Requirements

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

## Additional Technical Assumptions and Requests

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
