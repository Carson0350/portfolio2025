# Global CSS Organization

## Overview

The `app/globals.css` file contains all global styles, CSS variables, and utility classes for the design system.

---

## Structure

### 1. **@theme Block** (Lines 3-146)

CSS variables for the entire design system.

#### Colors

- **Primary** (Slate): `--color-primary-{50-950}`
- **Accent** (Cyan): `--color-accent-{50-950}`
- **Neutral** (Gray): `--color-neutral-{50-950}`
- **Semantic**: Success, Warning, Error, Info

#### Typography

- **Font Families**: Sans, Mono
- **Font Sizes**: Headings (h1-h6), Body (xl, large, base, sm, small, tiny)

#### Spacing

- **Section**: Desktop (6rem), Mobile (3rem), Tablet (4rem)
- **Container Padding**: Desktop (2rem), Mobile (1rem), Tablet (1.5rem)
- **Card**: Padding, Gap

#### Layout

- **Max Widths**: Container variants (xs: 640px, narrow: 960px, default: 1280px, wide: 1536px)
- **Breakpoints**: xs, sm, md, lg, xl, 2xl

---

### 2. **@layer base** (Lines 148-173)

Base HTML element styles.

#### Global Resets

- Border color default: `neutral-200`
- Body font, color, background
- Font smoothing

#### Behavior

- **Smooth scrolling**: For anchor links
- **Focus visible**: Consistent outline for accessibility

---

### 3. **@layer utilities** (Lines 175-307)

Custom utility classes.

#### Typography Utilities

- **Headings**: `.text-h1` through `.text-h6`
  - Includes mobile variants (`.text-h1-mobile`, etc.)
  - Font size, line-height, weight, letter-spacing
- **Body Text**: `.text-body-xl` through `.text-tiny`
  - Responsive font sizes
  - Appropriate line-heights

#### Layout Utilities

- **`.container-padding`**: Responsive horizontal padding
  - Mobile: 1rem
  - Desktop: 2rem

- **`.section-padding-y`**: Responsive vertical padding
  - Mobile: 3rem
  - Desktop: 6rem

#### Interactive Utilities

- **`.focus-ring`**: Consistent focus states
  - 2px accent-500 ring
  - 2px offset

#### Visual Utilities

- **`.shadow-card`**: Standard card shadow
- **`.shadow-card-hover`**: Elevated card shadow
- **`.transition-smooth`**: All properties (0.2s)
- **`.transition-colors-smooth`**: Color properties only (0.2s)

---

## Usage Examples

### Typography

```tsx
// Using heading utilities
<h1 className="text-h1 md:text-h1">Desktop H1</h1>
<h1 className="text-h1-mobile md:text-h1">Responsive H1</h1>

// Using body text utilities
<p className="text-body">Standard paragraph</p>
<span className="text-small text-neutral-600">Small muted text</span>
```

### Layout

```tsx
// Using container padding
<div className="container-padding">
  Content with responsive padding
</div>

// Using section padding
<section className="section-padding-y">
  Section with vertical spacing
</section>
```

### Interactive Elements

```tsx
// Using focus ring
<button className="focus-ring">
  Accessible button
</button>

// Using transitions
<div className="transition-smooth hover:scale-105">
  Smooth hover effect
</div>
```

### Cards

```tsx
// Using card shadows
<div className="shadow-card hover:shadow-card-hover transition-smooth">
  Card with hover effect
</div>
```

---

## Benefits of This Organization

### 1. **Consistency**

- All colors, spacing, and typography defined in one place
- Easy to maintain design system
- Consistent across all components

### 2. **Reusability**

- Common patterns extracted to utilities
- Reduces code duplication
- Easier to apply consistent styles

### 3. **Performance**

- Utility classes are smaller than inline styles
- Better CSS caching
- Reduced bundle size

### 4. **Maintainability**

- Single source of truth for design tokens
- Easy to update theme globally
- Clear organization and documentation

### 5. **Accessibility**

- Global focus states
- Smooth scrolling
- Consistent interactive patterns

---

## Component Integration

### Components Using Global Styles

#### Direct Usage

- **Navigation**: Uses `.focus-ring`, `.transition-colors-smooth`
- **Footer**: Uses container padding patterns
- **Cards**: Uses `.shadow-card`, `.shadow-card-hover`
- **Buttons**: Uses focus ring patterns
- **Links**: Uses transition utilities

#### Through Design Tokens

- **All components**: Use color variables
- **Layout components**: Use spacing variables
- **Typography components**: Use font size variables

---

## Future Enhancements

### Potential Additions

1. **Animation utilities**: Fade-in, slide-up, etc.
2. **Grid utilities**: Common grid patterns
3. **Aspect ratio utilities**: For images/videos
4. **Print styles**: For printable pages
5. **Dark mode**: Theme switching support

### Maintenance Notes

- Keep utilities minimal and focused
- Document new additions
- Remove unused utilities
- Test across all breakpoints
- Ensure accessibility compliance

---

## Related Files

- `/tailwind.config.ts` - Tailwind configuration (fallback)
- `/lib/design-tokens.ts` - TypeScript design tokens
- `/docs/components/` - Component documentation
- `/components/ui/` - UI components using these styles

---

**Last Updated:** November 6, 2025
