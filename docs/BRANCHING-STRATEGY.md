# Git Branching Strategy

## Branch Structure

### Main Branch
- **Branch:** `main`
- **Purpose:** Production-ready code
- **Protection:** Requires PR approval
- **Deployment:** Auto-deploys to production (Vercel)

### Feature Branches (Epic-based)
- **Naming:** `feature/epic-{n}-{epic-name}`
- **Purpose:** Development work for each epic
- **Lifespan:** Duration of epic development
- **Merge:** PR to `main` when epic complete

---

## Epic Feature Branches

| Epic | Branch Name | Status | Stories |
|------|-------------|--------|---------|
| Epic 1 | `feature/epic-1-foundation` | ✅ Active | 1.1-1.7 (7 stories) |
| Epic 2 | `feature/epic-2-ui-framework` | ⏳ Pending | 2.1-2.7 (7 stories) |
| Epic 3 | `feature/epic-3-content` | ⏳ Pending | 3.1-3.7 (7 stories) |
| Epic 4 | `feature/epic-4-hero-about` | ⏳ Pending | 4.1-4.6 (6 stories) |
| Epic 5 | `feature/epic-5-skills-experience` | ⏳ Pending | 5.1-5.6 (6 stories) |
| Epic 6 | `feature/epic-6-projects` | ⏳ Pending | 6.1-6.7 (7 stories) |
| Epic 7 | `feature/epic-7-contact` | ⏳ Pending | 7.1-7.7 (7 stories) |
| Epic 8 | `feature/epic-8-seo-performance` | ⏳ Pending | 8.1-8.7 (7 stories) |
| Epic 9 | `feature/epic-9-testing-launch` | ⏳ Pending | 9.1-9.7 (7 stories) |

---

## Workflow

### Starting a New Epic
```bash
# Create and switch to feature branch
git checkout main
git pull origin main
git checkout -b feature/epic-{n}-{name}
git push -u origin feature/epic-{n}-{name}
```

### Working on Stories
```bash
# Make changes for story
git add .
git commit -m "feat: story description"
git push
```

### Completing an Epic
```bash
# Ensure all stories complete
git push

# Create PR on GitHub
# Review → Approve → Merge to main

# Clean up
git checkout main
git pull origin main
git branch -d feature/epic-{n}-{name}
```

---

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature (story implementation)
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat: add navigation component with mobile menu
fix: resolve TypeScript error in contact form
docs: update README with setup instructions
style: format code with Prettier
refactor: extract reusable button component
test: add unit tests for email validation
chore: update dependencies
```

---

## Current Branch

**Active:** `feature/epic-1-foundation`

**Remaining Stories:**
- ⏳ 1.2 - Configure Development Tooling
- ⏳ 1.3 - Install and Configure Tailwind CSS
- ⏳ 1.4 - Set Up shadcn/ui Component Library
- ⏳ 1.5 - Create Root Layout and Basic Page Structure
- ⏳ 1.6 - Deploy to Vercel and Configure CI/CD
- ⏳ 1.7 - Configure Environment Variables

**Next:** Story 1.2

---

**Created:** November 6, 2025  
**Last Updated:** November 6, 2025
