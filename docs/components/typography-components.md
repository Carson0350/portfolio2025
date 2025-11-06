# Typography Components

Reusable typography components with semantic HTML, responsive sizing, and design system integration.

---

## Overview

Typography components provide consistent text styling across the application with proper semantic HTML, accessibility, and responsive design.

---

## Heading Component

Semantic heading component with responsive typography.

### Props

| Prop          | Type                                           | Default         | Description                                   |
| ------------- | ---------------------------------------------- | --------------- | --------------------------------------------- |
| `level`       | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | Required        | Semantic heading level                        |
| `visualLevel` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | Same as `level` | Visual style (can differ from semantic level) |
| `className`   | `string`                                       | -               | Additional CSS classes                        |
| `children`    | `React.ReactNode`                              | Required        | Heading content                               |

### Examples

```tsx
import { Heading } from '@/components/ui/typography';

// Basic usage
<Heading level="h1">Page Title</Heading>
<Heading level="h2">Section Heading</Heading>

// Visual level different from semantic level
<Heading level="h3" visualLevel="h2">
  Visually larger H3
</Heading>

// With custom className
<Heading level="h2" className="text-accent-600">
  Colored Heading
</Heading>
```

### Responsive Sizes

- **h1**: 48px desktop / 32px mobile
- **h2**: 36px desktop / 28px mobile
- **h3**: 30px desktop / 24px mobile
- **h4**: 24px desktop / 20px mobile
- **h5**: 20px (all screens)
- **h6**: 18px (all screens)

---

## Text Component

Flexible text component with size and color variants.

### Props

| Prop        | Type                                                        | Default     | Description            |
| ----------- | ----------------------------------------------------------- | ----------- | ---------------------- |
| `size`      | `'xl' \| 'large' \| 'base' \| 'small' \| 'xs' \| 'tiny'`    | `'base'`    | Text size variant      |
| `variant`   | `'default' \| 'muted' \| 'subtle' \| 'primary' \| 'accent'` | `'default'` | Color variant          |
| `weight`    | `'light' \| 'normal' \| 'medium' \| 'semibold' \| 'bold'`   | `'normal'`  | Font weight            |
| `as`        | `'p' \| 'span' \| 'div' \| 'label'`                         | `'p'`       | HTML element to render |
| `className` | `string`                                                    | -           | Additional CSS classes |
| `children`  | `React.ReactNode`                                           | Required    | Text content           |

### Examples

```tsx
import { Text } from '@/components/ui/typography';

// Basic paragraph
<Text>Default body text</Text>

// Size variants
<Text size="xl">Extra large text (20px)</Text>
<Text size="large">Large text (18px)</Text>
<Text size="base">Base text (16px)</Text>
<Text size="small">Small text (15px)</Text>
<Text size="xs">Extra small (14px)</Text>
<Text size="tiny">Tiny text (12px)</Text>

// Color variants
<Text variant="default">Default gray (neutral-700)</Text>
<Text variant="muted">Muted gray (neutral-600)</Text>
<Text variant="subtle">Subtle gray (neutral-500)</Text>
<Text variant="primary">Primary dark (primary-800)</Text>
<Text variant="accent">Accent cyan (accent-600)</Text>

// Font weights
<Text weight="light">Light weight (300)</Text>
<Text weight="normal">Normal weight (400)</Text>
<Text weight="medium">Medium weight (500)</Text>
<Text weight="semibold">Semibold weight (600)</Text>
<Text weight="bold">Bold weight (700)</Text>

// Different HTML elements
<Text as="span">Inline text</Text>
<Text as="div">Block text</Text>
<Text as="label">Label text</Text>

// Combined variants
<Text size="large" variant="primary" weight="semibold">
  Large, primary, semibold text
</Text>
```

---

## Link Component

Link component with variants, external link handling, and icons.

### Props

| Prop               | Type                                            | Default     | Description                              |
| ------------------ | ----------------------------------------------- | ----------- | ---------------------------------------- |
| `href`             | `string`                                        | Required    | Link destination                         |
| `variant`          | `'default' \| 'subtle' \| 'muted' \| 'primary'` | `'default'` | Visual style                             |
| `underline`        | `'always' \| 'hover' \| 'never'`                | `'hover'`   | Underline behavior                       |
| `showExternalIcon` | `boolean`                                       | `false`     | Show external link icon                  |
| `internal`         | `boolean`                                       | `false`     | Use Next.js Link for internal navigation |
| `className`        | `string`                                        | -           | Additional CSS classes                   |
| `children`         | `React.ReactNode`                               | Required    | Link content                             |

### Examples

```tsx
import { Link } from '@/components/ui/typography';

// Internal link (uses Next.js Link)
<Link href="/about" internal>About Page</Link>

// External link (opens in new tab)
<Link href="https://github.com">GitHub</Link>

// External link with icon
<Link href="https://github.com" showExternalIcon>
  GitHub Profile
</Link>

// Link variants
<Link href="/contact" variant="default" internal>
  Default link (cyan, underline on hover)
</Link>

<Link href="/projects" variant="subtle" internal>
  Subtle link (gray to cyan on hover)
</Link>

<Link href="/blog" variant="muted" internal>
  Muted link (light gray)
</Link>

<Link href="/work" variant="primary" internal>
  Primary link (dark, semibold)
</Link>

// Underline variants
<Link href="/home" underline="always" internal>
  Always underlined
</Link>

<Link href="/home" underline="hover" internal>
  Underline on hover
</Link>

<Link href="/home" underline="never" internal>
  Never underlined
</Link>
```

### External Link Behavior

- Automatically detects external URLs (starts with `http` or `mailto:`)
- Opens in new tab (`target="_blank"`)
- Includes security attributes (`rel="noopener noreferrer"`)
- Optional external link icon

---

## Common Patterns

### Page Header

```tsx
<header>
  <Heading level="h1">Portfolio</Heading>
  <Text size="large" variant="muted">
    Full Stack Developer
  </Text>
</header>
```

### Section with Description

```tsx
<section>
  <Heading level="h2">About Me</Heading>
  <Text size="large" className="mt-4">
    I'm a passionate developer with expertise in modern web technologies.
  </Text>
  <Text variant="muted" className="mt-2">
    Specializing in React, TypeScript, and Node.js
  </Text>
</section>
```

### Card with Typography

```tsx
<Card>
  <CardHeader>
    <Heading level="h3" visualLevel="h4">
      Project Name
    </Heading>
    <Text size="small" variant="muted">
      Web Application • 2024
    </Text>
  </CardHeader>
  <CardContent>
    <Text>A modern web application built with Next.js and TypeScript.</Text>
    <Link href="/projects/1" internal className="mt-4">
      View Project →
    </Link>
  </CardContent>
</Card>
```

### Footer Links

```tsx
<footer>
  <Text size="small" variant="muted">
    © 2025 Carson Antoine. All rights reserved.
  </Text>
  <div className="flex gap-4 mt-4">
    <Link href="/privacy" variant="subtle" underline="never" internal>
      Privacy
    </Link>
    <Link href="/terms" variant="subtle" underline="never" internal>
      Terms
    </Link>
    <Link href="https://github.com" showExternalIcon>
      GitHub
    </Link>
  </div>
</footer>
```

---

## Accessibility

### Heading Hierarchy

Always maintain proper heading hierarchy:

```tsx
// ✅ Good
<Heading level="h1">Page Title</Heading>
<Heading level="h2">Section</Heading>
<Heading level="h3">Subsection</Heading>

// ❌ Bad (skips h2)
<Heading level="h1">Page Title</Heading>
<Heading level="h3">Subsection</Heading>
```

### Visual vs Semantic Levels

Use `visualLevel` when you need different visual styling while maintaining semantic hierarchy:

```tsx
<Heading level="h3" visualLevel="h2">
  Visually looks like h2, but semantically h3
</Heading>
```

### Link Accessibility

- Links have focus states with ring indicators
- External links open in new tab with proper security
- Keyboard accessible (Tab to focus, Enter to activate)

---

## Best Practices

### Headings

1. **One H1 per page** - Use for main page title only
2. **Maintain hierarchy** - Don't skip heading levels
3. **Use visualLevel sparingly** - Only when design requires it
4. **Responsive by default** - H1-H4 automatically adjust on mobile

### Text

1. **Use appropriate sizes** - `base` for body text, `small` for captions
2. **Choose variants wisely** - `default` for body, `muted` for secondary info
3. **Combine variants** - Size + variant + weight for precise control
4. **Use semantic elements** - `as="label"` for form labels, `as="span"` for inline

### Links

1. **Mark internal links** - Use `internal` prop for Next.js routing
2. **Show external icons** - Use `showExternalIcon` for external links
3. **Consistent styling** - Use same variant throughout similar contexts
4. **Descriptive text** - Avoid "click here", use descriptive link text

---

## Design System Integration

All typography components use design system tokens:

### Colors

- `primary-800` - Dark headings and primary text
- `neutral-700` - Default body text
- `neutral-600` - Muted text
- `accent-600` - Links and accent text

### Font Sizes

- `text-h1` through `text-h6` - Heading sizes
- `text-body-xl` through `text-tiny` - Body text sizes

### Font Weights

- `font-light` (300) through `font-bold` (700)

### Responsive Typography

- Mobile-first approach
- Automatic size adjustments at `md` breakpoint (768px)

---

## Related Components

- **Card** - Use Heading and Text in CardHeader and CardContent
- **Container** - Wrap typography in Container for width constraints
- **Section** - Use for page sections with headings
- **Button** - Complement links with button CTAs
