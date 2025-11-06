import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode for future use
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // Slate 800
        secondary: '#475569', // Slate 600
        accent: '#06b6d4', // Cyan 500
        success: '#10b981', // Emerald 500
        warning: '#f59e0b', // Amber 500
        error: '#ef4444', // Red 500
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '700' }], // 48px
        'h1-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '700' }], // 32px
        h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }], // 36px
        'h2-mobile': ['1.75rem', { lineHeight: '1.3', fontWeight: '700' }], // 28px
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px
        h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-large': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        tiny: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }], // 12px
      },
      spacing: {
        section: '6rem', // 96px - section padding desktop
        'section-mobile': '3rem', // 48px - section padding mobile
        'section-tablet': '4rem', // 64px - section padding tablet
      },
      maxWidth: {
        container: '1280px', // Primary container width
        'container-wide': '1536px', // Maximum container width
      },
    },
  },
  plugins: [],
};
export default config;
