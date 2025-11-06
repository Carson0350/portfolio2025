# Epic 5: Skills & Experience Showcase

**Expanded Goal:** Display Carson's technical skills organized by category (Frontend, Backend, Tools) with visual indicators, and create a professional experience timeline showing work history with key achievements. These sections establish technical credibility and career progression.

## Story 5.1: Build Skills Section Component

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

## Story 5.2: Create Skill Badge/Card Components

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

## Story 5.3: Populate Skills Data from Resume

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

## Story 5.4: Build Experience Timeline Component

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

## Story 5.5: Create Experience Card Component

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

## Story 5.6: Populate Experience Data from Resume

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
