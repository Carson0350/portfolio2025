# Epic 2: Core UI Framework & Design System

**Expanded Goal:** Build reusable UI components, establish the design system with consistent spacing/colors/typography, and create the responsive layout structure (navigation, footer, container) that all page sections will use. This epic delivers the visual foundation and navigation framework.

## Story 2.1: Create Design System Tokens and Theme Configuration

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

## Story 2.2: Build Responsive Navigation Header

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

## Story 2.3: Build Footer Component

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

## Story 2.4: Create Container and Section Layout Components

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

## Story 2.5: Build Reusable Card Component

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

## Story 2.6: Create Typography Components

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

## Story 2.7: Implement Responsive Grid System

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
