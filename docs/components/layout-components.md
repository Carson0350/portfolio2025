# Layout Components

Reusable layout components for consistent spacing, width constraints, and responsive design.

---

## Container

The `Container` component constrains content width and applies consistent horizontal padding.

### Props

| Prop        | Type                                                | Default     | Description                            |
| ----------- | --------------------------------------------------- | ----------- | -------------------------------------- |
| `children`  | `React.ReactNode`                                   | Required    | Content to render inside the container |
| `className` | `string`                                            | -           | Additional CSS classes                 |
| `size`      | `'xs' \| 'narrow' \| 'default' \| 'wide' \| 'full'` | `'default'` | Max width variant                      |
| `padding`   | `boolean`                                           | `true`      | Apply horizontal padding               |

### Size Variants

- **xs**: `640px` - Forms, modals, small content
- **narrow**: `960px` - Text-heavy content, blog posts
- **default**: `1280px` - Main content areas
- **wide**: `1536px` - Full-width sections
- **full**: No max-width constraint

### Examples

```tsx
import { Container } from '@/components/ui/layout';

// Default container
<Container>
  <h1>Content</h1>
</Container>

// Narrow container without padding
<Container size="narrow" padding={false}>
  <p>Text content</p>
</Container>

// Wide container with custom class
<Container size="wide" className="bg-white">
  <div>Wide content</div>
</Container>
```

---

## Section

The `Section` component provides consistent vertical spacing and background colors for page sections.

### Props

| Prop         | Type                                                 | Default         | Description                          |
| ------------ | ---------------------------------------------------- | --------------- | ------------------------------------ |
| `children`   | `React.ReactNode`                                    | Required        | Content to render inside the section |
| `className`  | `string`                                             | -               | Additional CSS classes               |
| `id`         | `string`                                             | -               | HTML id for anchor links             |
| `spacing`    | `'none' \| 'sm' \| 'default' \| 'lg'`                | `'default'`     | Vertical padding variant             |
| `background` | `'transparent' \| 'white' \| 'neutral' \| 'primary'` | `'transparent'` | Background color                     |
| `as`         | `'section' \| 'div' \| 'article' \| 'main'`          | `'section'`     | HTML element to render               |

### Spacing Variants

- **none**: No padding
- **sm**: `32px` mobile, `48px` desktop
- **default**: `48px` mobile, `96px` desktop
- **lg**: `64px` mobile, `128px` desktop

### Background Variants

- **transparent**: No background
- **white**: White background
- **neutral**: Light gray background (`neutral-50`)
- **primary**: Light primary background (`primary-50`)

### Examples

```tsx
import { Section, Container } from '@/components/ui/layout';

// Section with ID for navigation
<Section id="about" background="white">
  <Container>
    <h2>About</h2>
  </Container>
</Section>

// Section with large spacing
<Section spacing="lg" background="neutral">
  <Container size="narrow">
    <p>Content</p>
  </Container>
</Section>

// Section as main element
<Section as="main" spacing="none" className="min-h-screen">
  <Container>
    <div>Hero content</div>
  </Container>
</Section>
```

---

## Common Patterns

### Full-width section with constrained content

```tsx
<Section background="white">
  <Container>
    <h2>Section Title</h2>
    <p>Content constrained to container width</p>
  </Container>
</Section>
```

### Nested containers for different widths

```tsx
<Section background="neutral">
  <Container>
    <h2>Wide heading</h2>
    <Container size="narrow" padding={false}>
      <p>Narrow text for better readability</p>
    </Container>
  </Container>
</Section>
```

### Hero section with custom styling

```tsx
<Section
  as="div"
  spacing="none"
  className="min-h-screen flex items-center justify-center"
>
  <Container>
    <h1>Hero Title</h1>
  </Container>
</Section>
```

---

## Best Practices

1. **Use Section for vertical rhythm** - Apply consistent spacing between major page sections
2. **Use Container for width constraints** - Prevent content from becoming too wide on large screens
3. **Nest containers sparingly** - Only nest when you need different width constraints within the same section
4. **Combine with design system** - Use with typography and spacing tokens for consistency
5. **Semantic HTML** - Use the `as` prop to render appropriate HTML elements (`section`, `article`, `main`)

---

## Accessibility

- Use semantic HTML elements (`<section>`, `<article>`, `<main>`)
- Provide `id` attributes for sections that are navigation targets
- Ensure sufficient color contrast for background variants
- Maintain logical heading hierarchy within sections

---

## Related Components

- **Navigation** - Uses Container for width constraints
- **Footer** - Uses Container for content layout
- **Card** - Can be used within Container/Section for content cards
