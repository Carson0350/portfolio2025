import { z } from 'zod';

/**
 * Bio content schema
 */
export const BioSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  metadata: z
    .object({
      lastUpdated: z.string().optional(),
    })
    .catchall(z.any())
    .optional(),
});

/**
 * Project content schema
 */
export const ProjectSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  content: z.string().min(1, 'Content is required'),
  technologies: z
    .array(z.string())
    .min(1, 'At least one technology is required'),
  liveUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  githubUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  imageUrl: z.string().optional(),
  featured: z.boolean().optional().default(false),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  status: z
    .enum(['completed', 'in-progress', 'archived'])
    .optional()
    .default('completed'),
  metadata: z.record(z.string(), z.any()).optional(),
});

/**
 * Experience content schema
 */
export const ExperienceSchema = z.object({
  slug: z.string().min(1, 'Slug is required'),
  company: z.string().min(1, 'Company is required'),
  position: z.string().min(1, 'Position is required'),
  content: z.string().min(1, 'Content is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  current: z.boolean().optional().default(false),
  location: z.string().optional(),
  companyUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
  technologies: z.array(z.string()).optional(),
  achievements: z.array(z.string()).optional(),
  metadata: z.record(z.string(), z.any()).optional(),
});

/**
 * Infer TypeScript types from schemas
 */
export type Bio = z.infer<typeof BioSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;

/**
 * Validation result type
 */
export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; issues: z.ZodIssue[] };

/**
 * Validate bio content
 */
export function validateBio(data: unknown): ValidationResult<Bio> {
  const result = BioSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return {
    success: false,
    error: formatZodError(result.error),
    issues: result.error.issues,
  };
}

/**
 * Validate project content
 */
export function validateProject(data: unknown): ValidationResult<Project> {
  const result = ProjectSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return {
    success: false,
    error: formatZodError(result.error),
    issues: result.error.issues,
  };
}

/**
 * Validate experience content
 */
export function validateExperience(
  data: unknown
): ValidationResult<Experience> {
  const result = ExperienceSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  return {
    success: false,
    error: formatZodError(result.error),
    issues: result.error.issues,
  };
}

/**
 * Format Zod error into readable message
 */
function formatZodError(error: z.ZodError): string {
  const issues = error.issues.map((issue) => {
    const path = issue.path.join('.');
    return `${path}: ${issue.message}`;
  });

  return `Validation failed:\n${issues.join('\n')}`;
}

/**
 * Validate and parse content with schema
 */
export function validateContent<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  context: string
): T | null {
  const result = schema.safeParse(data);

  if (result.success) {
    return result.data;
  }

  console.error(`Content validation failed for ${context}:`);
  result.error.issues.forEach((issue) => {
    console.error(`  - ${issue.path.join('.')}: ${issue.message}`);
  });

  return null;
}
