import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  type Bio,
  type Project,
  type Experience,
  validateBio,
  validateProject,
  validateExperience,
} from './schemas';

// Content directory paths
const contentDirectory = path.join(process.cwd(), 'content');
const bioDirectory = path.join(contentDirectory, 'bio');
const projectsDirectory = path.join(contentDirectory, 'projects');
const experienceDirectory = path.join(contentDirectory, 'experience');

/**
 * Generic content parser
 */
function parseMarkdownFile<T>(filePath: string, slug: string): T | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as T;
  } catch (error) {
    console.error(`Error parsing markdown file: ${filePath}`, error);
    return null;
  }
}

/**
 * Get all markdown files from a directory
 */
function getMarkdownFiles(directory: string): string[] {
  try {
    if (!fs.existsSync(directory)) {
      return [];
    }
    return fs.readdirSync(directory).filter((file) => file.endsWith('.md'));
  } catch (error) {
    console.error(`Error reading directory: ${directory}`, error);
    return [];
  }
}

/**
 * Get bio content
 */
export function getBio(): Bio | null {
  try {
    const files = getMarkdownFiles(bioDirectory);
    if (files.length === 0) {
      return null;
    }

    const firstFile = files[0];
    if (!firstFile) {
      return null;
    }

    // Use the first bio file found (typically bio.md)
    const slug = firstFile.replace(/\.md$/, '');
    const filePath = path.join(bioDirectory, firstFile);

    const rawData = parseMarkdownFile<Bio>(filePath, slug);
    if (!rawData) return null;

    // Validate the parsed data
    const validation = validateBio(rawData);
    if (!validation.success) {
      console.error(`Bio validation failed:`, validation.error);
      return null;
    }

    return validation.data;
  } catch (error) {
    console.error('Error getting bio:', error);
    return null;
  }
}

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  try {
    const files = getMarkdownFiles(projectsDirectory);

    const projects = files
      .map((file) => {
        const slug = file.replace(/\.md$/, '');
        const filePath = path.join(projectsDirectory, file);
        const rawData = parseMarkdownFile<Project>(filePath, slug);

        if (!rawData) return null;

        // Validate the parsed data
        const validation = validateProject(rawData);
        if (!validation.success) {
          console.error(
            `Project validation failed for ${slug}:`,
            validation.error
          );
          return null;
        }

        return validation.data;
      })
      .filter((project): project is Project => project !== null);

    // Sort by featured first, then by start date (newest first)
    return projects.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
      const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error getting projects:', error);
    return [];
  }
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project | null {
  try {
    const filePath = path.join(projectsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    return parseMarkdownFile<Project>(filePath, slug);
  } catch (error) {
    console.error(`Error getting project: ${slug}`, error);
    return null;
  }
}

/**
 * Get all experience entries
 */
export function getAllExperience(): Experience[] {
  try {
    const files = getMarkdownFiles(experienceDirectory);

    const experiences = files
      .map((file) => {
        const slug = file.replace(/\.md$/, '');
        const filePath = path.join(experienceDirectory, file);
        const rawData = parseMarkdownFile<Experience>(filePath, slug);

        if (!rawData) return null;

        // Validate the parsed data
        const validation = validateExperience(rawData);
        if (!validation.success) {
          console.error(
            `Experience validation failed for ${slug}:`,
            validation.error
          );
          return null;
        }

        return validation.data;
      })
      .filter((exp): exp is Experience => exp !== null);

    // Sort by start date (newest first), with current positions first
    return experiences.sort((a, b) => {
      if (a.current && !b.current) return -1;
      if (!a.current && b.current) return 1;

      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error getting experience:', error);
    return [];
  }
}

/**
 * Get a single experience entry by slug
 */
export function getExperienceBySlug(slug: string): Experience | null {
  try {
    const filePath = path.join(experienceDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    return parseMarkdownFile<Experience>(filePath, slug);
  } catch (error) {
    console.error(`Error getting experience: ${slug}`, error);
    return null;
  }
}

/**
 * Get featured projects (max 3)
 */
export function getFeaturedProjects(limit: number = 3): Project[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.featured).slice(0, limit);
}
