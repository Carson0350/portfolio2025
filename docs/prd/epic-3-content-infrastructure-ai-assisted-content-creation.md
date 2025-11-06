# Epic 3: Content Infrastructure & AI-Assisted Content Creation

**Expanded Goal:** Create the content management structure using markdown files with frontmatter, define TypeScript schemas for content validation, and generate AI-drafted content (professional bio, 3-5 project case studies) based on Carson's resume. This epic can be worked in parallel with Epic 2.

## Story 3.1: Set Up Content Directory Structure and Markdown Parser

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

## Story 3.2: Define Content Schemas and Validation

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

## Story 3.3: AI-Generate Professional Bio Content

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

## Story 3.4: AI-Generate Project Case Study #1 (Integrity Web Consulting)

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

## Story 3.5: AI-Generate Project Case Study #2 (Sogeti Serverless Integration)

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

## Story 3.6: AI-Generate Project Case Study #3 (RK Mechanical Inventory System)

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

## Story 3.7: Source and Optimize Project Images

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
