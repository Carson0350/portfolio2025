import { z } from 'zod';

/**
 * Environment Variable Schema
 * Validates and provides type-safe access to environment variables
 */
const envSchema = z.object({
  // Site Configuration
  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default('http://localhost:3000')
    .describe('The base URL of the site'),

  // Contact Form (Epic 7)
  RESEND_API_KEY: z
    .string()
    .optional()
    .describe('Resend API key for sending emails'),

  // Rate Limiting (Epic 7)
  UPSTASH_REDIS_REST_URL: z
    .string()
    .url()
    .optional()
    .describe('Upstash Redis REST URL for rate limiting'),
  UPSTASH_REDIS_REST_TOKEN: z
    .string()
    .optional()
    .describe('Upstash Redis REST token'),

  // Analytics (Epic 8)
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z
    .string()
    .optional()
    .describe('Google Analytics measurement ID'),
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z
    .string()
    .optional()
    .describe('Plausible Analytics domain'),
});

/**
 * Validated environment variables
 * @throws {Error} if environment variables are invalid
 */
const parseEnv = () => {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  });

  if (!parsed.success) {
    console.error(
      '❌ Invalid environment variables:',
      parsed.error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
};

/**
 * Type-safe environment variables
 * Use this instead of process.env for type safety
 */
export const env = parseEnv();

/**
 * Check if required environment variables are configured
 */
export const isContactFormConfigured = () => {
  return !!(
    env.RESEND_API_KEY &&
    env.UPSTASH_REDIS_REST_URL &&
    env.UPSTASH_REDIS_REST_TOKEN
  );
};

/**
 * Check if analytics is configured
 */
export const isAnalyticsConfigured = () => {
  return !!(
    env.NEXT_PUBLIC_GA_MEASUREMENT_ID || env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  );
};
