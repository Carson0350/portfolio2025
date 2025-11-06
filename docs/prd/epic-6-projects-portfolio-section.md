# Epic 6: Projects Portfolio Section

**Expanded Goal:** Showcase 3-5 featured project case studies with detailed descriptions, metrics, technologies, and visuals. This is the core differentiator of the portfolio - where Carson proves his technical depth and business impact through real-world examples.

## Story 6.1: Build Projects Section Component

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

## Story 6.2: Create Project Card Component

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

## Story 6.3: Build Project Detail View Component

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

## Story 6.4: Implement Project Detail Modal or Expandable View

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

## Story 6.5: Integrate Project Content from Markdown Files

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

## Story 6.6: Add Project Filtering and Sorting (Optional Enhancement)

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

## Story 6.7: Optimize Project Images and Performance

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
