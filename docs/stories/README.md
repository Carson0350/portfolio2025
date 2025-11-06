# Development Stories Directory

This directory contains the development backlog for Carson Antoine's Professional Portfolio Site.

---

## 📁 Directory Structure

```
docs/stories/
├── README.md           # This file
├── BACKLOG.md          # Backlog overview and epic summary
├── SPRINT-PLAN.md      # Detailed sprint plan with all 58 stories
├── 1-1-*.md            # Epic 1 stories (Foundation)
├── 1-2-*.md
├── ...
├── 2-1-*.md            # Epic 2 stories (UI Framework)
├── ...
└── 9-7-*.md            # Epic 9 stories (Testing & Launch)
```

---

## 📋 Key Documents

### BACKLOG.md
- Overview of all 9 epics
- Sprint planning summary
- Story naming conventions
- Definition of Done
- Story point scale

### SPRINT-PLAN.md
- Complete breakdown of all 58 stories
- Story points for each story
- Priority assignments (P0, P1, P2)
- Sprint groupings (4 sprints over 3-4 weeks)
- Dependencies and critical path
- Risk management

### Individual Story Files
- User story format (As a... I want... So that...)
- Acceptance criteria (checkboxes)
- Technical notes and implementation guidance
- Story points and priority
- Related stories and dependencies

---

## 🎯 How to Use This Backlog

### For Developers

1. **Start with SPRINT-PLAN.md** to understand the overall timeline
2. **Work through stories in order** (Epic 1 → Epic 9)
3. **Check off acceptance criteria** as you complete each item
4. **Update story status** (Ready → In Progress → Done)
5. **Reference PRD and Architecture** for detailed requirements

### For Product Owner

1. **Monitor progress** via story status updates
2. **Adjust priorities** if business needs change
3. **Validate acceptance criteria** are being met
4. **Review completed work** against Definition of Done
5. **Manage scope** if timeline constraints arise

---

## 📊 Story Status Values

- **Ready for Dev** - Story is fully defined and ready to implement
- **In Progress** - Developer is actively working on story
- **In Review** - Story complete, awaiting review
- **Done** - All acceptance criteria met, Definition of Done satisfied
- **Blocked** - Story cannot proceed due to dependency or issue

---

## 🏆 Story Point Scale

| Points | Effort | Description |
|--------|--------|-------------|
| 1 | < 2 hours | Simple configuration, small component |
| 2 | 2-4 hours | Medium component, API integration |
| 3 | 4-8 hours | Complex component, multiple integrations |
| 5 | 1-2 days | Major feature, requires research |
| 8 | 2-3 days | Epic-level work, should be broken down |

---

## ✅ Definition of Done

A story is "Done" when:

- [ ] Code implemented and passes TypeScript compilation
- [ ] All acceptance criteria met
- [ ] Code passes ESLint and Prettier checks
- [ ] Component/feature tested manually
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] Accessibility checked (keyboard nav, screen reader)
- [ ] Code committed with conventional commit message
- [ ] Deployed to Vercel preview (if applicable)
- [ ] Reviewed against UI/UX spec and architecture

---

## 🔗 Related Documents

- **PRD:** `docs/prd/` (sharded by epic)
- **UI/UX Spec:** `docs/front-end-spec.md`
- **Architecture:** `docs/architecture.md`
- **Project Brief:** `docs/brief.md`

---

## 📝 Creating Individual Story Files

**Note:** Individual story files (1-1-*.md, 1-2-*.md, etc.) can be created as needed during development. The SPRINT-PLAN.md contains all story details. Individual files provide a workspace for tracking progress and adding implementation notes.

**Template for individual stories:**
```markdown
# Story X.Y: [Title]

**Epic:** X - [Epic Name]
**Story Points:** [1-8]
**Priority:** [P0/P1/P2/P3]
**Status:** [Ready/In Progress/Done]
**Assignee:** [Developer Name]

## User Story
As a [role], I want to [action], so that [benefit].

## Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Technical Notes
[Implementation guidance]

## Definition of Done
[Standard DoD checklist]

## Related Stories
[Dependencies and relationships]
```

---

**Created:** November 5, 2025  
**Product Owner:** Sarah  
**Status:** ✅ Backlog Ready for Development
