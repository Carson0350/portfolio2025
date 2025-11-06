# Epic 4: Hero & About Sections

**Expanded Goal:** Implement the hero section with value proposition headline, professional headshot, and CTA button, plus the About section that tells Carson's career transition story. These sections create the critical first impression and establish credibility.

## Story 4.1: Build Hero Section Component

As a visitor,
I want to see an impactful hero section when I land on the portfolio,
so that I immediately understand Carson's value proposition and expertise.

**Acceptance Criteria:**

1. Hero component created with full-viewport height and centered content
2. Headline displays: "Senior Full-Stack Engineer specializing in .NET/React/Azure"
3. Subheadline provides brief context (e.g., "Building scalable, performant web applications")
4. Professional headshot image displayed with proper sizing and optimization
5. Primary CTA button ("Get In Touch") scrolls to contact section
6. Responsive layout (stacked on mobile, side-by-side on desktop)
7. Semantic HTML with proper heading hierarchy (h1 for headline)

## Story 4.2: Implement Hero Section Animations

As a visitor,
I want subtle animations in the hero section,
so that the portfolio feels polished and modern.

**Acceptance Criteria:**

1. Framer Motion installed and configured
2. Fade-in animation for headline and subheadline (staggered timing)
3. Slide-in animation for headshot image
4. Hover effect on CTA button (scale, color transition)
5. Animations respect `prefers-reduced-motion` media query
6. Animation timing feels natural (not too fast or slow)
7. No layout shift during animations (CLS < 0.1)

## Story 4.3: Source and Optimize Professional Headshot

As Carson,
I want a professional headshot image in the hero section,
so that visitors can put a face to the name and feel a personal connection.

**Acceptance Criteria:**

1. Professional headshot image sourced (existing photo, new session, or high-quality AI avatar)
2. Image cropped to appropriate aspect ratio (square or portrait)
3. Image optimized for web (WebP format, multiple sizes for responsive)
4. Next.js Image component used with proper width/height attributes
5. Alt text written for accessibility
6. Image saved in `/public/images/headshot.webp`
7. Image displays correctly across all device sizes

## Story 4.4: Build About Section Component

As a visitor,
I want to read Carson's professional bio and career story,
so that I understand his background, expertise, and what makes him unique.

**Acceptance Criteria:**

1. About section component created with Section and Container layout
2. Section heading: "About Me" or similar
3. Bio content loaded from `/content/bio/about.md`
4. Markdown content rendered with proper typography styling
5. Two-column layout on desktop (bio text + optional image/graphic)
6. Single column on mobile with proper spacing
7. Semantic HTML with proper heading hierarchy (h2 for section title)

## Story 4.5: Integrate Bio Content and Markdown Rendering

As a developer,
I want to render markdown bio content with proper styling,
so that the About section displays formatted text beautifully.

**Acceptance Criteria:**

1. Markdown rendering library installed (react-markdown or similar)
2. Bio content from `/content/bio/about.md` parsed and rendered
3. Custom styling applied to markdown elements (paragraphs, links, lists)
4. Links open in new tab with proper security attributes
5. Typography components used for consistent styling
6. Content updates without code changes (edit markdown file only)
7. Error handling if bio content is missing or invalid

## Story 4.6: Add Personal Touches to About Section

As a visitor,
I want to see Carson's personality and interests,
so that I get a sense of who he is beyond his technical skills.

**Acceptance Criteria:**

1. Hobbies/interests section added (Hiking, Camping, Snow Skiing, Video Games, Disc Golf, F1)
2. Icons or visual elements represent each hobby (Lucide React icons)
3. Optional: "Fun Facts" or "When I'm Not Coding" subsection
4. Content maintains professional tone while showing personality
5. Section is visually distinct but cohesive with overall design
6. Responsive layout (grid on desktop, stacked on mobile)
7. Adds human element without detracting from professional focus

---
