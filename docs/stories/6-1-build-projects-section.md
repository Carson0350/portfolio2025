# Story 6.1: Build Projects Section Component

**Epic:** 6 - Projects Portfolio Section  
**Story Points:** 2  
**Priority:** P0 (Critical)  
**Status:** Ready for Dev  
**Assignee:** TBD

---

## User Story

**As a** visitor,  
**I want to** see Carson's featured projects prominently displayed,  
**so that** I can understand the type and quality of work he produces.

---

## Acceptance Criteria

- [ ] Projects section component created with Section and Container layout
- [ ] Section heading: "Featured Projects" or similar
- [ ] Grid layout for project cards (1 col mobile, 2 cols tablet, 3 cols desktop)
- [ ] Projects loaded from markdown files in `/content/projects/`
- [ ] Only projects marked as `featured: true` are displayed
- [ ] Projects sorted by date (most recent first)
- [ ] Semantic HTML with proper heading hierarchy

---

## Technical Notes

**Component Location:** `components/sections/ProjectsSection.tsx`

**Type:** Server Component (static content)

**Data Loading:**
```typescript
// Load projects at build time
const projects = await getProjects({ featured: true });
// Sort by date descending
projects.sort((a, b) => new Date(b.date) - new Date(a.date));
```

**Grid Layout (Tailwind):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project) => (
    <ProjectCard key={project.slug} project={project} />
  ))}
</div>
```

**Dependencies:**
- Requires Story 3.2 (Markdown parsing utilities)
- Requires Story 6.2 (ProjectCard component)

---

## UI/UX Spec Reference

See `docs/front-end-spec.md` - Wireframes & Mockups - Section 4: Projects Section (Grid View)

**Design Requirements:**
- Container max-width: 1400px
- Gap between cards: 32px
- Fade-in animation on scroll (Intersection Observer)
- Responsive breakpoints: 375px, 768px, 1024px

---

## Definition of Done

- [ ] Code implemented and passes TypeScript compilation
- [ ] All acceptance criteria met
- [ ] Component renders correctly on mobile, tablet, desktop
- [ ] Projects load from markdown files successfully
- [ ] Featured projects filter works correctly
- [ ] Projects sorted by date (most recent first)
- [ ] Semantic HTML with proper heading hierarchy
- [ ] Accessibility: keyboard navigation, screen reader friendly
- [ ] Code committed with message: "feat: add projects section component"
- [ ] Deployed to Vercel preview

---

## Related Stories

- **Depends on:** 3.2 (Markdown Parsing Utilities)
- **Depends on:** 3.5 (Generate Project Case Studies)
- **Blocks:** 6.2 (Create Project Card Component)
- **Blocks:** 6.3 (Build Project Detail View)
- **Epic:** Epic 6 - Projects Portfolio Section

---

## Testing Checklist

- [ ] Projects render in grid layout
- [ ] Grid is responsive (1/2/3 columns)
- [ ] Only featured projects displayed
- [ ] Projects sorted by date correctly
- [ ] No console errors or warnings
- [ ] Lighthouse accessibility score 100
- [ ] Works with 0 projects (empty state)
- [ ] Works with 1-10 projects

---

**Created:** November 5, 2025  
**Last Updated:** November 5, 2025
