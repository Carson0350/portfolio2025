# Design System Documentation

**Version:** 1.0  
**Last Updated:** November 6, 2025

---

## Overview

This design system provides a comprehensive set of design tokens, components, and guidelines for building a consistent, accessible, and performant portfolio website. All tokens are defined in both Tailwind CSS configuration and TypeScript constants for flexible usage.

---

## Color Palette

### Primary Colors (Slate-based)

Professional, neutral tones for primary UI elements, text, and backgrounds.

```tsx
import { colors } from '@/lib/design-tokens';

// Usage in components
<div className="bg-primary-800 text-primary-50">Primary content</div>;

// Programmatic access
const primaryColor = colors.primary[800]; // '#1e293b'
```

**Shades:**

- `50` - `#f8fafc` - Lightest backgrounds
- `100` - `#f1f5f9` - Light backgrounds
- `200` - `#e2e8f0` - Borders, dividers
- `300` - `#cbd5e1` - Disabled states
- `400` - `#94a3b8` - Placeholder text
- `500` - `#64748b` - Secondary text
- `600` - `#475569` - Body text
- `700` - `#334155` - Headings
- `800` - `#1e293b` - **DEFAULT** - Primary dark
- `900` - `#0f172a` - Darkest elements
- `950` - `#020617` - Maximum contrast

### Accent Colors (Cyan)

Vibrant accent color for CTAs, links, and interactive elements.

```tsx
<button className="bg-accent-500 hover:bg-accent-600 text-white">
  Call to Action
</button>
```

**Shades:** 50-950 (same structure as primary)

- **DEFAULT:** `#06b6d4` (500)

### Neutral Colors

True grays for backgrounds and subtle UI elements.

**Shades:** 50-950

- **DEFAULT:** `#737373` (500)

### Semantic Colors

#### Success (Green)

```tsx
<div className="bg-success-100 text-success-800 border-success-500">
  Success message
</div>
```

#### Warning (Amber)

```tsx
<div className="bg-warning-100 text-warning-800 border-warning-500">
  Warning message
</div>
```

#### Error (Red)

```tsx
<div className="bg-error-100 text-error-800 border-error-500">
  Error message
</div>
```

#### Info (Blue)

```tsx
<div className="bg-info-100 text-info-800 border-info-500">Info message</div>
```

---

## Typography

### Font Families

```tsx
// Sans-serif (default)
<p className="font-sans">Body text using Inter font</p>

// Monospace (code)
<code className="font-mono">Code snippet</code>
```

**Fonts:**

- **Sans:** Inter (variable font with fallbacks)
- **Mono:** JetBrains Mono (for code blocks)

### Heading Sizes

Responsive heading sizes with mobile variants.

```tsx
// Desktop
<h1 className="text-h1">Main Heading (48px)</h1>
<h2 className="text-h2">Section Heading (36px)</h2>
<h3 className="text-h3">Subsection (30px)</h3>
<h4 className="text-h4">Card Title (24px)</h4>

// Mobile (use with responsive classes)
<h1 className="text-h1-mobile md:text-h1">Responsive Heading</h1>
```

**Scale:**

- `h1`: 48px / 32px (mobile) - Page titles
- `h2`: 36px / 28px (mobile) - Section headings
- `h3`: 30px / 24px (mobile) - Subsections
- `h4`: 24px / 20px (mobile) - Card titles
- `h5`: 20px - Small headings
- `h6`: 18px - Smallest headings

### Body Text Sizes

```tsx
<p className="text-body-xl">Extra large body (20px)</p>
<p className="text-body-large">Large body (18px)</p>
<p className="text-body">Default body (16px)</p>
<p className="text-body-sm">Small body (15px)</p>
<p className="text-small">Small text (14px)</p>
<p className="text-tiny">Tiny text (12px)</p>
```

### Utility Text Styles

```tsx
<p className="text-caption">Caption text (14px, medium weight)</p>
<p className="text-overline">OVERLINE TEXT (12px, uppercase, wide spacing)</p>
```

### Font Weights

```tsx
<p className="font-light">Light (300)</p>
<p className="font-normal">Normal (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
<p className="font-extrabold">Extrabold (800)</p>
```

### Line Heights

```tsx
<p className="leading-tight">Tight (1.2)</p>
<p className="leading-snug">Snug (1.3)</p>
<p className="leading-normal">Normal (1.5)</p>
<p className="leading-relaxed">Relaxed (1.6)</p>
<p className="leading-loose">Loose (1.7)</p>
```

### Letter Spacing

```tsx
<h1 className="tracking-tighter">Tighter (-0.02em)</h1>
<h2 className="tracking-tight">Tight (-0.01em)</h2>
<p className="tracking-normal">Normal (0)</p>
<p className="tracking-wide">Wide (0.01em)</p>
<p className="tracking-wider">Wider (0.05em)</p>
<p className="tracking-widest">Widest (0.1em)</p>
```

---

## Spacing

### Section Spacing

Vertical spacing for page sections.

```tsx
<section className="py-section">Desktop section (96px)</section>
<section className="py-section-tablet md:py-section">Tablet (64px)</section>
<section className="py-section-mobile md:py-section">Mobile (48px)</section>
```

### Container Padding

Horizontal padding for containers.

```tsx
<div className="px-container-padding-mobile md:px-container-padding">
  Responsive container padding
</div>
```

**Values:**

- `container-padding`: 32px (desktop)
- `container-padding-tablet`: 24px (tablet)
- `container-padding-mobile`: 16px (mobile)

### Component Spacing

```tsx
<div className="p-card-padding">Card with standard padding (24px)</div>
<div className="p-card-padding-sm">Card with small padding (16px)</div>
<div className="gap-card-gap">Grid with card gap (24px)</div>
```

### Custom Spacing Scale

Extended spacing values beyond Tailwind defaults.

```tsx
<div className="mt-18">Margin top 72px</div>
<div className="mb-22">Margin bottom 88px</div>
<div className="py-26">Padding y 104px</div>
<div className="px-30">Padding x 120px</div>
```

---

## Layout

### Breakpoints

```tsx
// Responsive design breakpoints
xs: 475px   // Extra small devices
sm: 640px   // Small devices (mobile landscape)
md: 768px   // Medium devices (tablets)
lg: 1024px  // Large devices (laptops)
xl: 1280px  // Extra large devices (desktops)
2xl: 1536px // 2X large devices (large desktops)
```

**Usage:**

```tsx
<div className="w-full md:w-1/2 lg:w-1/3">Responsive width</div>
```

### Max Widths

Container constraints for content.

```tsx
<div className="max-w-container mx-auto">Standard container (1280px)</div>
<div className="max-w-container-wide mx-auto">Wide container (1536px)</div>
<div className="max-w-container-narrow mx-auto">Narrow container (960px)</div>
<div className="max-w-container-xs mx-auto">XS container (640px)</div>
```

**Use Cases:**

- `container` (1280px): Main content areas
- `container-wide` (1536px): Full-width sections
- `container-narrow` (960px): Text-heavy content, blog posts
- `container-xs` (640px): Forms, modals

---

## Border Radius

```tsx
<div className="rounded-sm">Small radius (4px)</div>
<div className="rounded">Default radius (8px)</div>
<div className="rounded-md">Medium radius (8px)</div>
<div className="rounded-lg">Large radius (12px)</div>
<div className="rounded-xl">XL radius (16px)</div>
<div className="rounded-2xl">2XL radius (24px)</div>
<div className="rounded-3xl">3XL radius (32px)</div>
```

---

## Shadows

### Standard Shadows

```tsx
<div className="shadow-sm">Small shadow</div>
<div className="shadow">Default shadow</div>
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">XL shadow</div>
<div className="shadow-2xl">2XL shadow</div>
<div className="shadow-inner">Inner shadow</div>
```

### Custom Shadows

```tsx
<div className="shadow-card">Card shadow (subtle)</div>
<div className="shadow-card-hover">Card hover shadow (elevated)</div>
```

**Use Cases:**

- `shadow-card`: Default card state
- `shadow-card-hover`: Interactive card hover state

---

## Animations

### Built-in Animations

```tsx
<div className="animate-fade-in">Fade in animation</div>
<div className="animate-slide-up">Slide up animation</div>
<div className="animate-slide-down">Slide down animation</div>
<div className="animate-scale-in">Scale in animation</div>
```

**Keyframes:**

- `fade-in`: Opacity 0 → 1 (0.5s ease-in-out)
- `slide-up`: Translate Y 20px → 0 (0.5s ease-out)
- `slide-down`: Translate Y -20px → 0 (0.5s ease-out)
- `scale-in`: Scale 0.95 → 1 (0.3s ease-out)

---

## Programmatic Access

### TypeScript Usage

```tsx
import { designTokens, colors, typography, spacing } from '@/lib/design-tokens';

// Access specific tokens
const primaryColor = colors.primary.DEFAULT; // '#1e293b'
const headingSize = typography.fontSize.h1.size; // '3rem'
const sectionSpacing = spacing.section; // '6rem'

// Type-safe access
import type { ColorShade, Breakpoint } from '@/lib/design-tokens';

const shade: ColorShade = 500;
const breakpoint: Breakpoint = 'md';
```

### Component Example

```tsx
import { colors, spacing } from '@/lib/design-tokens';

export function CustomComponent() {
  return (
    <div
      style={{
        backgroundColor: colors.primary[800],
        padding: spacing['card-padding'],
        color: colors.primary[50],
      }}
    >
      Custom styled component
    </div>
  );
}
```

---

## Best Practices

### Color Usage

1. **Primary colors** for main UI elements, navigation, footers
2. **Accent colors** for CTAs, links, interactive elements
3. **Neutral colors** for backgrounds, borders, subtle UI
4. **Semantic colors** for status messages, alerts, feedback

### Typography Hierarchy

1. Use **one H1** per page for main title
2. Use **H2** for major sections
3. Use **H3-H4** for subsections and card titles
4. Use **body text** sizes for readability (16px minimum)
5. Maintain **consistent line heights** (1.6 for body, 1.2-1.4 for headings)

### Spacing Consistency

1. Use **section spacing** for vertical rhythm between major sections
2. Use **container padding** for consistent horizontal spacing
3. Use **card spacing** for component internal padding
4. Maintain **consistent gaps** in grids and flexbox layouts

### Responsive Design

1. **Mobile-first approach**: Start with mobile styles, enhance for larger screens
2. Use **responsive typography**: `text-h1-mobile md:text-h1`
3. Use **responsive spacing**: `py-section-mobile md:py-section`
4. Test at **all breakpoints**: xs, sm, md, lg, xl, 2xl

### Accessibility

1. Maintain **4.5:1 contrast ratio** for body text (WCAG AA)
2. Maintain **3:1 contrast ratio** for large text and UI components
3. Use **semantic HTML** with proper heading hierarchy
4. Ensure **focus states** are visible for keyboard navigation
5. Use **sufficient spacing** for touch targets (44px minimum)

---

## Examples

### Card Component

```tsx
<div className="bg-white rounded-lg shadow-card hover:shadow-card-hover p-card-padding transition-shadow">
  <h3 className="text-h4 text-primary-800 mb-4">Card Title</h3>
  <p className="text-body text-neutral-600 leading-relaxed">
    Card content with proper typography and spacing.
  </p>
</div>
```

### Section Layout

```tsx
<section className="py-section-mobile md:py-section bg-neutral-50">
  <div className="max-w-container mx-auto px-container-padding-mobile md:px-container-padding">
    <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
      Section Title
    </h2>
    <p className="text-body-large text-neutral-600 max-w-container-narrow">
      Section content with optimal reading width.
    </p>
  </div>
</section>
```

### Button Variants

```tsx
// Primary button
<button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">
  Primary Action
</button>

// Secondary button
<button className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold px-6 py-3 rounded-lg transition-colors">
  Secondary Action
</button>

// Outline button
<button className="border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all">
  Outline Action
</button>
```

---

## Resources

- **Tailwind CSS Documentation:** https://tailwindcss.com/docs
- **Design Tokens File:** `/lib/design-tokens.ts`
- **Tailwind Config:** `/tailwind.config.ts`
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

**Maintained by:** Development Team  
**Questions?** Refer to the design tokens file or Tailwind config for implementation details.
