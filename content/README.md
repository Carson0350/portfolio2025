# Content Directory

This directory contains all markdown-based content for the portfolio website.

## Structure

```
content/
├── bio/           # Biography and about content
├── projects/      # Project showcases
└── experience/    # Work experience entries
```

## Content Types

### Bio (`/bio`)

Personal biography and about information. Typically one file: `bio.md`

**Frontmatter:**

```yaml
---
title: About Carson Antoine
excerpt: Short bio excerpt
lastUpdated: 2025-11-06
---
```

### Projects (`/projects`)

Individual project showcases. One file per project.

**Frontmatter:**

```yaml
---
title: Project Name
description: Brief project description
technologies:
  - Technology 1
  - Technology 2
featured: true
status: completed | in-progress | archived
startDate: 2025-01-01
endDate: 2025-06-01
liveUrl: https://example.com
githubUrl: https://github.com/username/repo
imageUrl: /images/project.png
---
```

**Required fields:**

- `title`
- `description`
- `technologies`

**Optional fields:**

- `featured` - Show in featured projects section
- `status` - Project status
- `startDate` / `endDate` - Project timeline
- `liveUrl` - Live demo URL
- `githubUrl` - GitHub repository URL
- `imageUrl` - Project screenshot

### Experience (`/experience`)

Work experience entries. One file per position.

**Frontmatter:**

```yaml
---
company: Company Name
position: Job Title
startDate: 2024-01-01
endDate: 2024-12-31
current: false
location: City, State or Remote
companyUrl: https://company.com
technologies:
  - Technology 1
  - Technology 2
achievements:
  - Achievement 1
  - Achievement 2
---
```

**Required fields:**

- `company`
- `position`
- `startDate`

**Optional fields:**

- `endDate` - Leave empty if current position
- `current` - Set to true for current position
- `location` - Work location
- `companyUrl` - Company website
- `technologies` - Technologies used
- `achievements` - Key achievements

## Content Guidelines

### Markdown Content

After the frontmatter, write your content in standard Markdown:

```markdown
---
title: Example
---

# Main Heading

Your content here with **bold**, _italic_, and [links](https://example.com).

## Subheading

- Bullet points
- More points

1. Numbered lists
2. Work too
```

### File Naming

- Use kebab-case: `my-awesome-project.md`
- Be descriptive but concise
- Avoid special characters

### Best Practices

1. **Keep frontmatter clean** - Only include relevant fields
2. **Write clear descriptions** - Make them scannable
3. **Use relative dates** - Helps with sorting
4. **Add technologies** - Helps showcase skills
5. **Include links** - GitHub, live demos, etc.

## Usage in Code

Content is parsed using the utility functions in `/lib/content.ts`:

```typescript
import { getBio, getAllProjects, getAllExperience } from '@/lib/content';

// Get bio
const bio = getBio();

// Get all projects (sorted by featured, then date)
const projects = getAllProjects();

// Get featured projects only
const featured = getFeaturedProjects(3);

// Get all experience (sorted by current, then date)
const experience = getAllExperience();

// Get specific items by slug
const project = getProjectBySlug('portfolio-website');
const job = getExperienceBySlug('current-role');
```

## Adding New Content

1. Create a new `.md` file in the appropriate directory
2. Add required frontmatter fields
3. Write your content in Markdown
4. Save the file
5. Content will automatically be available in the app

No code changes needed! 🎉

## Example Files

See the existing files in each directory for examples:

- `/bio/bio.md`
- `/projects/portfolio-website.md`
- `/experience/current-role.md`
