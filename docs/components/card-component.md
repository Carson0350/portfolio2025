# Card Component

A flexible, reusable card component with multiple variants, hover effects, and full design system integration.

---

## Overview

The Card component is built on shadcn/ui's Card component with enhanced variants, hover effects, and accessibility features. It supports multiple visual styles and interactive states.

---

## Components

### Card (Main Container)

The root card container with variant support.

#### Props

| Prop          | Type                                               | Default     | Description                            |
| ------------- | -------------------------------------------------- | ----------- | -------------------------------------- |
| `variant`     | `'default' \| 'elevated' \| 'bordered' \| 'ghost'` | `'default'` | Visual style variant                   |
| `hover`       | `'none' \| 'lift' \| 'glow'`                       | `'none'`    | Hover effect type                      |
| `interactive` | `boolean`                                          | `false`     | Makes card clickable with focus states |
| `className`   | `string`                                           | -           | Additional CSS classes                 |
| `children`    | `React.ReactNode`                                  | Required    | Card content                           |

### CardHeader

Container for card header content with consistent spacing.

### CardTitle

Styled heading for the card (uses `text-h5` from design system).

### CardDescription

Subtitle or description text (uses `text-body-sm`).

### CardContent

Main content area with appropriate padding.

### CardFooter

Footer area for actions or additional info.

---

## Variants

### Default

Standard card with border and subtle shadow.

```tsx
<Card variant="default">
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
    <CardDescription>Standard card style</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Elevated

Card with prominent shadow, no border.

```tsx
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Stands out with shadow</p>
  </CardContent>
</Card>
```

### Bordered

Card with thicker border, minimal shadow.

```tsx
<Card variant="bordered">
  <CardHeader>
    <CardTitle>Bordered Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Emphasized border</p>
  </CardContent>
</Card>
```

### Ghost

Minimal card with no border or shadow.

```tsx
<Card variant="ghost">
  <CardHeader>
    <CardTitle>Ghost Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Subtle, minimal styling</p>
  </CardContent>
</Card>
```

---

## Hover Effects

### Lift

Card lifts up with enhanced shadow on hover.

```tsx
<Card hover="lift">
  <CardHeader>
    <CardTitle>Hover to Lift</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Elevates on hover</p>
  </CardContent>
</Card>
```

### Glow

Card border glows with accent color on hover.

```tsx
<Card hover="glow">
  <CardHeader>
    <CardTitle>Hover to Glow</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Border glows on hover</p>
  </CardContent>
</Card>
```

---

## Interactive Cards

Make cards clickable with proper accessibility.

```tsx
<Card
  interactive
  hover="lift"
  onClick={() => console.log('Card clicked')}
  onKeyDown={(e) => e.key === 'Enter' && console.log('Card activated')}
>
  <CardHeader>
    <CardTitle>Click Me</CardTitle>
    <CardDescription>This card is interactive</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Press Enter or click to activate</p>
  </CardContent>
</Card>
```

**Features:**

- Cursor changes to pointer
- Keyboard accessible (Tab to focus, Enter to activate)
- Focus ring indicator
- ARIA role="button"

---

## Common Patterns

### Project Card

```tsx
<Card variant="default" hover="lift">
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
    <CardDescription>Brief project description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Project details and technologies used...</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">View Project</Button>
  </CardFooter>
</Card>
```

### Skill Card

```tsx
<Card variant="bordered" hover="glow" className="text-center">
  <CardHeader>
    <CardTitle>React</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="text-4xl mb-2">⚛️</div>
    <p className="text-small">Expert Level</p>
  </CardContent>
</Card>
```

### Testimonial Card

```tsx
<Card variant="ghost" className="bg-primary-50">
  <CardContent className="pt-6">
    <p className="text-body italic mb-4">
      "Excellent work and great communication!"
    </p>
    <p className="text-small font-semibold">- Client Name</p>
  </CardContent>
</Card>
```

### Interactive Link Card

```tsx
<a href="/project/1" className="block">
  <Card interactive hover="lift">
    <CardHeader>
      <CardTitle>View Project Details</CardTitle>
      <CardDescription>Click to learn more</CardDescription>
    </CardHeader>
  </Card>
</a>
```

---

## Grid Layouts

### 2-Column Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <Card hover="lift">
    <CardHeader>
      <CardTitle>Card 1</CardTitle>
    </CardHeader>
    <CardContent>Content</CardContent>
  </Card>

  <Card hover="lift">
    <CardHeader>
      <CardTitle>Card 2</CardTitle>
    </CardHeader>
    <CardContent>Content</CardContent>
  </Card>
</div>
```

### 3-Column Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project) => (
    <Card key={project.id} variant="default" hover="lift">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.details}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

---

## Accessibility

### Keyboard Navigation

- **Interactive cards**: Focusable with Tab key
- **Activation**: Enter or Space key when focused
- **Focus indicators**: Visible ring on focus

### ARIA Attributes

- `role="button"` for interactive cards
- `tabIndex={0}` for keyboard access
- Semantic HTML structure

### Screen Readers

- Proper heading hierarchy with CardTitle
- Descriptive CardDescription for context
- Clear focus management

---

## Best Practices

1. **Use appropriate variants**
   - `default`: General purpose cards
   - `elevated`: Important or featured content
   - `bordered`: When you need visual separation
   - `ghost`: Subtle, background content

2. **Hover effects**
   - `lift`: For clickable/interactive cards
   - `glow`: For highlighting on hover
   - `none`: For static, informational cards

3. **Interactive cards**
   - Always provide `onClick` or `onKeyDown` handlers
   - Use with `hover="lift"` for better UX
   - Wrap in `<a>` or `<Link>` for navigation

4. **Content structure**
   - Use CardHeader for titles and descriptions
   - Use CardContent for main content
   - Use CardFooter for actions or metadata

5. **Responsive design**
   - Use grid layouts for card collections
   - Test on mobile, tablet, and desktop
   - Ensure touch targets are large enough (44px minimum)

---

## Design System Integration

The Card component uses design system tokens:

- **Colors**: `primary-800`, `neutral-600`, `accent-500`
- **Typography**: `text-h5`, `text-body-sm`
- **Shadows**: `shadow-card`, `shadow-card-hover`
- **Border Radius**: `rounded-lg`
- **Spacing**: `p-6` for consistent padding
- **Transitions**: `transition-all duration-200`

---

## Related Components

- **Button** - Use in CardFooter for actions
- **Container** - Wrap card grids for width constraints
- **Section** - Use for card collection sections
