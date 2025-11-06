/**
 * Design System Tokens
 *
 * Centralized design tokens exported as TypeScript constants for programmatic access.
 * These tokens mirror the Tailwind configuration and provide type-safe access to design values.
 */

export const colors = {
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
    DEFAULT: '#1e293b',
  },
  accent: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    950: '#083344',
    DEFAULT: '#06b6d4',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
    DEFAULT: '#737373',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    DEFAULT: '#22c55e',
  },
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    DEFAULT: '#f59e0b',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    DEFAULT: '#ef4444',
  },
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    DEFAULT: '#3b82f6',
  },
} as const;

export const typography = {
  fontFamily: {
    sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
    mono: [
      'var(--font-jetbrains-mono)',
      'JetBrains Mono',
      'Fira Code',
      'monospace',
    ],
  },
  fontSize: {
    h1: {
      size: '3rem',
      lineHeight: '1.2',
      fontWeight: '700',
      letterSpacing: '-0.02em',
    },
    'h1-mobile': {
      size: '2rem',
      lineHeight: '1.2',
      fontWeight: '700',
      letterSpacing: '-0.02em',
    },
    h2: {
      size: '2.25rem',
      lineHeight: '1.3',
      fontWeight: '700',
      letterSpacing: '-0.01em',
    },
    'h2-mobile': {
      size: '1.75rem',
      lineHeight: '1.3',
      fontWeight: '700',
      letterSpacing: '-0.01em',
    },
    h3: {
      size: '1.875rem',
      lineHeight: '1.4',
      fontWeight: '600',
      letterSpacing: '-0.01em',
    },
    'h3-mobile': { size: '1.5rem', lineHeight: '1.4', fontWeight: '600' },
    h4: { size: '1.5rem', lineHeight: '1.4', fontWeight: '600' },
    'h4-mobile': { size: '1.25rem', lineHeight: '1.4', fontWeight: '600' },
    h5: { size: '1.25rem', lineHeight: '1.5', fontWeight: '600' },
    h6: { size: '1.125rem', lineHeight: '1.5', fontWeight: '600' },
    'body-xl': { size: '1.25rem', lineHeight: '1.7', fontWeight: '400' },
    'body-large': { size: '1.125rem', lineHeight: '1.7', fontWeight: '400' },
    body: { size: '1rem', lineHeight: '1.6', fontWeight: '400' },
    'body-sm': { size: '0.9375rem', lineHeight: '1.6', fontWeight: '400' },
    small: { size: '0.875rem', lineHeight: '1.5', fontWeight: '400' },
    tiny: { size: '0.75rem', lineHeight: '1.4', fontWeight: '500' },
    caption: { size: '0.875rem', lineHeight: '1.4', fontWeight: '500' },
    overline: {
      size: '0.75rem',
      lineHeight: '1.4',
      fontWeight: '600',
      letterSpacing: '0.1em',
    },
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.2,
    snug: 1.3,
    normal: 1.5,
    relaxed: 1.6,
    loose: 1.7,
  },
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.01em',
    normal: '0',
    wide: '0.01em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

export const spacing = {
  section: '6rem', // 96px
  'section-mobile': '3rem', // 48px
  'section-tablet': '4rem', // 64px
  'container-padding': '2rem', // 32px
  'container-padding-mobile': '1rem', // 16px
  'container-padding-tablet': '1.5rem', // 24px
  'card-padding': '1.5rem', // 24px
  'card-padding-sm': '1rem', // 16px
  'card-gap': '1.5rem', // 24px
} as const;

export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const maxWidth = {
  container: '1280px',
  'container-wide': '1536px',
  'container-narrow': '960px',
  'container-xs': '640px',
} as const;

export const borderRadius = {
  sm: '0.25rem', // 4px
  DEFAULT: '0.5rem', // 8px
  md: '0.5rem', // 8px
  lg: '0.75rem', // 12px
  xl: '1rem', // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem', // 32px
} as const;

export const boxShadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
  card: '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
  'card-hover':
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
} as const;

export const animation = {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'slide-down': 'slideDown 0.5s ease-out',
  'scale-in': 'scaleIn 0.3s ease-out',
} as const;

/**
 * Type exports for TypeScript consumers
 */
export type ColorPalette = typeof colors;
export type ColorShade = keyof typeof colors.primary;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Breakpoint = keyof typeof breakpoints;
export type MaxWidth = keyof typeof maxWidth;
export type BorderRadius = keyof typeof borderRadius;
export type BoxShadow = keyof typeof boxShadow;
export type Animation = keyof typeof animation;

/**
 * Design tokens object for convenient access
 */
export const designTokens = {
  colors,
  typography,
  spacing,
  breakpoints,
  maxWidth,
  borderRadius,
  boxShadow,
  animation,
} as const;

export default designTokens;
