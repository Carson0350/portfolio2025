#!/usr/bin/env node

/**
 * Story File Generator
 *
 * Reads PRD epic files and generates individual story files
 * in docs/stories/ directory with proper formatting.
 */

const fs = require('fs');
const path = require('path');

// Story point mapping (based on SPRINT-PLAN.md)
const STORY_POINTS = {
  // Epic 1
  1.1: 2,
  1.2: 2,
  1.3: 2,
  1.4: 2,
  1.5: 2,
  1.6: 2,
  1.7: 2,
  // Epic 2
  2.1: 2,
  2.2: 2,
  2.3: 2,
  2.4: 3,
  2.5: 2,
  2.6: 2,
  2.7: 3,
  // Epic 3
  3.1: 1,
  3.2: 2,
  3.3: 2,
  3.4: 2,
  3.5: 3,
  3.6: 2,
  3.7: 2,
  // Epic 4
  4.1: 2,
  4.2: 2,
  4.3: 1,
  4.4: 2,
  4.5: 2,
  4.6: 2,
  // Epic 5
  5.1: 2,
  5.2: 2,
  5.3: 1,
  5.4: 2,
  5.5: 2,
  5.6: 2,
  // Epic 6
  6.1: 2,
  6.2: 2,
  6.3: 3,
  6.4: 2,
  6.5: 2,
  6.6: 2,
  6.7: 2,
  // Epic 7
  7.1: 2,
  7.2: 1,
  7.3: 2,
  7.4: 2,
  7.5: 3,
  7.6: 2,
  7.7: 2,
  // Epic 8
  8.1: 2,
  8.2: 1,
  8.3: 2,
  8.4: 2,
  8.5: 3,
  8.6: 2,
  8.7: 2,
  // Epic 9
  9.1: 3,
  9.2: 2,
  9.3: 2,
  9.4: 2,
  9.5: 1,
  9.6: 2,
  9.7: 2,
};

// Priority mapping
const PRIORITIES = {
  1: 'P0',
  2: 'P0',
  3: 'P1',
  4: 'P1',
  5: 'P1',
  6: 'P0',
  7: 'P1',
  8: 'P2',
  9: 'P0',
};

// Epic names
const EPIC_NAMES = {
  1: 'Foundation & Project Setup',
  2: 'Core UI Framework & Design System',
  3: 'Content Infrastructure & AI-Assisted Content Creation',
  4: 'Hero & About Sections',
  5: 'Skills & Experience Showcase',
  6: 'Projects Portfolio Section',
  7: 'Contact & Communication',
  8: 'SEO, Analytics & Performance Optimization',
  9: 'Testing, Accessibility & Launch Preparation',
};

const PRD_DIR = path.join(__dirname, '../docs/prd');
const STORIES_DIR = path.join(__dirname, '../docs/stories');

// Ensure stories directory exists
if (!fs.existsSync(STORIES_DIR)) {
  fs.mkdirSync(STORIES_DIR, { recursive: true });
}

function parseEpicFile(epicNumber) {
  const files = fs
    .readdirSync(PRD_DIR)
    .filter((f) => f.startsWith(`epic-${epicNumber}-`));

  if (files.length === 0) {
    console.warn(`⚠️  Epic ${epicNumber} file not found`);
    return [];
  }

  const content = fs.readFileSync(path.join(PRD_DIR, files[0]), 'utf-8');
  const stories = [];

  // Split by story headers (## Story X.Y:)
  const storyRegex =
    /## Story (\d+\.\d+): (.+?)\n\n([\s\S]+?)(?=\n## Story|\n---|\n$)/g;
  let match;

  while ((match = storyRegex.exec(content)) !== null) {
    const [, storyId, title, body] = match;

    // Extract user story
    const userStoryMatch = body.match(
      /As a (.+?),\nI want to (.+?),\nso that (.+?)\./s
    );
    const userStory = userStoryMatch
      ? {
          role: userStoryMatch[1].trim(),
          action: userStoryMatch[2].trim(),
          benefit: userStoryMatch[3].trim(),
        }
      : null;

    // Extract acceptance criteria
    const criteriaMatch = body.match(
      /\*\*Acceptance Criteria:\*\*\n([\s\S]+?)(?=\n\n##|\n---|\n$)/
    );
    const criteria = [];
    if (criteriaMatch) {
      const lines = criteriaMatch[1].split('\n');
      lines.forEach((line) => {
        const match = line.match(/^\d+\.\s+(.+)$/);
        if (match) criteria.push(match[1].trim());
      });
    }

    stories.push({
      id: storyId,
      title: title.trim(),
      userStory,
      criteria,
      epicNumber,
    });
  }

  return stories;
}

function generateStoryFile(story) {
  const { id, title, userStory, criteria, epicNumber } = story;
  const points = STORY_POINTS[id] || 2;
  const priority = PRIORITIES[epicNumber] || 'P1';
  const epicName = EPIC_NAMES[epicNumber];

  // Create filename
  const filename = `${id.replace('.', '-')}-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`;
  const filepath = path.join(STORIES_DIR, filename);

  // Skip if file already exists
  if (fs.existsSync(filepath)) {
    console.warn(`⏭️  Skipping ${filename} (already exists)`);
    return;
  }

  // Generate content
  let content = `# Story ${id}: ${title}\n\n`;
  content += `**Epic:** ${epicNumber} - ${epicName}  \n`;
  content += `**Story Points:** ${points}  \n`;
  content += `**Priority:** ${priority} (${priority === 'P0' ? 'Critical' : priority === 'P1' ? 'High' : 'Medium'})  \n`;
  content += `**Status:** Ready for Dev  \n`;
  content += `**Assignee:** TBD\n\n`;
  content += `---\n\n`;

  // User story
  content += `## User Story\n\n`;
  if (userStory) {
    content += `**As a** ${userStory.role},  \n`;
    content += `**I want to** ${userStory.action},  \n`;
    content += `**so that** ${userStory.benefit}.\n\n`;
  } else {
    content += `[User story not parsed - see PRD]\n\n`;
  }
  content += `---\n\n`;

  // Acceptance criteria
  content += `## Acceptance Criteria\n\n`;
  criteria.forEach((criterion) => {
    content += `- [ ] ${criterion}\n`;
  });
  content += `\n---\n\n`;

  // Technical notes
  content += `## Technical Notes\n\n`;
  content += `See PRD: \`docs/prd/epic-${epicNumber}-*.md\` - Story ${id}\n\n`;
  content += `---\n\n`;

  // Definition of Done
  content += `## Definition of Done\n\n`;
  content += `- [ ] Code implemented and passes TypeScript compilation\n`;
  content += `- [ ] All acceptance criteria met\n`;
  content += `- [ ] Code passes ESLint and Prettier checks\n`;
  content += `- [ ] Component/feature tested manually\n`;
  content += `- [ ] Responsive design verified (mobile, tablet, desktop)\n`;
  content += `- [ ] Accessibility checked (keyboard nav, screen reader)\n`;
  content += `- [ ] Code committed with conventional commit message\n`;
  content += `- [ ] Deployed to Vercel preview (if applicable)\n\n`;
  content += `---\n\n`;

  // Related stories
  content += `## Related Stories\n\n`;
  content += `- **Epic:** Epic ${epicNumber} - ${epicName}\n`;
  content += `- **PRD Reference:** \`docs/prd/epic-${epicNumber}-*.md\`\n\n`;
  content += `---\n\n`;

  content += `**Created:** November 5, 2025  \n`;
  content += `**Last Updated:** November 5, 2025\n`;

  // Write file
  fs.writeFileSync(filepath, content);
  console.error(`✅ Created ${filename}`);
}

// Main execution
console.error('🚀 Generating story files from PRD epics...\n');

let totalStories = 0;
for (let epicNumber = 1; epicNumber <= 9; epicNumber++) {
  console.error(`\n📖 Processing Epic ${epicNumber}...`);
  const stories = parseEpicFile(epicNumber);

  stories.forEach((story) => {
    generateStoryFile(story);
    totalStories++;
  });

  console.error(`   Found ${stories.length} stories in Epic ${epicNumber}`);
}

console.error(
  `\n✨ Complete! Generated ${totalStories} story files in ${STORIES_DIR}`
);
console.error(`\n📁 Next steps:`);
console.error(`   1. Review generated files in docs/stories/`);
console.error(`   2. Add technical notes to stories as needed`);
console.error(`   3. Start development with Story 1.1`);
