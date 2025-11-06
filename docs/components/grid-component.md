# Grid Component

Responsive grid system component with flexible column configurations and gap spacing.

---

## Overview

The Grid component provides a flexible, responsive grid layout system built on CSS Grid with Tailwind utilities. It supports various column configurations, gap sizes, and alignment options.

---

## Grid Component

Main grid container with responsive column configurations.

### Props

| Prop        | Type                                                 | Default     | Description                    |
| ----------- | ---------------------------------------------------- | ----------- | ------------------------------ |
| `cols`      | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 'auto' \| 'autoFill'` | `3`         | Number of columns (responsive) |
| `gap`       | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'`             | `'md'`      | Gap spacing between items      |
| `align`     | `'start' \| 'center' \| 'end' \| 'stretch'`          | `'stretch'` | Vertical alignment of items    |
| `justify`   | `'start' \| 'center' \| 'end' \| 'stretch'`          | `'stretch'` | Horizontal alignment of items  |
| `as`        | `'div' \| 'section' \| 'ul'`                         | `'div'`     | HTML element to render         |
| `className` | `string`                                             | -           | Additional CSS classes         |
| `children`  | `React.ReactNode`                                    | Required    | Grid items                     |

### Column Configurations

- **1**: Single column (all screens)
- **2**: 1 col mobile, 2 cols tablet+
- **3**: 1 col mobile, 2 cols tablet, 3 cols desktop
- **4**: 1 col mobile, 2 cols tablet, 4 cols desktop
- **5**: 1 col mobile, 2 cols tablet, 3 cols desktop, 5 cols xl
- **6**: 1 col mobile, 2 cols tablet, 3 cols desktop, 6 cols xl
- **auto**: Auto-fit columns (min 250px)
- **autoFill**: Auto-fill columns (min 250px)

### Gap Sizes

- **none**: 0px
- **sm**: 16px
- **md**: 24px (default)
- **lg**: 32px
- **xl**: 48px

---

## GridItem Component

Optional component for explicit column/row spanning.

### Props

| Prop        | Type                         | Default  | Description               |
| ----------- | ---------------------------- | -------- | ------------------------- |
| `colSpan`   | `1 \| 2 \| 3 \| 4 \| 'full'` | `1`      | Number of columns to span |
| `rowSpan`   | `1 \| 2 \| 3 \| 4`           | -        | Number of rows to span    |
| `as`        | `'div' \| 'li'`              | `'div'`  | HTML element to render    |
| `className` | `string`                     | -        | Additional CSS classes    |
| `children`  | `React.ReactNode`            | Required | Item content              |

---

## Examples

### Basic Grid

```tsx
import { Grid } from '@/components/ui/grid';
import { Card } from '@/components/ui/card';

<Grid cols={3} gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
  <Card>Item 4</Card>
  <Card>Item 5</Card>
  <Card>Item 6</Card>
</Grid>;
```

### Project Grid

```tsx
<Grid cols={3} gap="lg">
  {projects.map((project) => (
    <Card key={project.id} hover="lift">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>{project.details}</Text>
      </CardContent>
    </Card>
  ))}
</Grid>
```

### Two Column Layout

```tsx
<Grid cols={2} gap="md">
  <Card>Left column</Card>
  <Card>Right column</Card>
</Grid>
```

### Four Column Grid

```tsx
<Grid cols={4} gap="sm">
  <Card>Skill 1</Card>
  <Card>Skill 2</Card>
  <Card>Skill 3</Card>
  <Card>Skill 4</Card>
</Grid>
```

### Auto-Fit Grid

Automatically fits as many columns as possible (min 250px each).

```tsx
<Grid cols="auto" gap="md">
  <Card>Auto 1</Card>
  <Card>Auto 2</Card>
  <Card>Auto 3</Card>
  <Card>Auto 4</Card>
</Grid>
```

### Custom Gap Sizes

```tsx
// Small gap
<Grid cols={4} gap="sm">
  <Card>Tight spacing</Card>
  {/* ... */}
</Grid>

// Large gap
<Grid cols={2} gap="lg">
  <Card>Wide spacing</Card>
  {/* ... */}
</Grid>

// Extra large gap
<Grid cols={3} gap="xl">
  <Card>Very wide spacing</Card>
  {/* ... */}
</Grid>
```

---

## GridItem Examples

### Column Spanning

```tsx
<Grid cols={3} gap="md">
  <GridItem colSpan={2}>
    <Card>Spans 2 columns</Card>
  </GridItem>
  <GridItem>
    <Card>Normal width</Card>
  </GridItem>
  <GridItem colSpan="full">
    <Card>Full width</Card>
  </GridItem>
  <GridItem>
    <Card>Normal</Card>
  </GridItem>
  <GridItem>
    <Card>Normal</Card>
  </GridItem>
  <GridItem>
    <Card>Normal</Card>
  </GridItem>
</Grid>
```

### Featured Content Layout

```tsx
<Grid cols={3} gap="lg">
  {/* Featured item spans 2 columns */}
  <GridItem colSpan={2}>
    <Card variant="elevated" className="h-full">
      <CardHeader>
        <CardTitle>Featured Project</CardTitle>
        <CardDescription>Main highlight</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Large featured content...</Text>
      </CardContent>
    </Card>
  </GridItem>

  {/* Regular items */}
  <GridItem>
    <Card>Project 2</Card>
  </GridItem>
  <GridItem>
    <Card>Project 3</Card>
  </GridItem>
  <GridItem>
    <Card>Project 4</Card>
  </GridItem>
  <GridItem>
    <Card>Project 5</Card>
  </GridItem>
</Grid>
```

---

## Alignment Examples

### Center Aligned Items

```tsx
<Grid cols={3} gap="md" align="center" justify="center">
  <Card>Centered item</Card>
  <Card>Centered item</Card>
  <Card>Centered item</Card>
</Grid>
```

### Start Aligned

```tsx
<Grid cols={2} gap="lg" align="start">
  <Card>Top aligned</Card>
  <Card className="h-64">Tall card</Card>
</Grid>
```

---

## Common Patterns

### Skills Grid

```tsx
<Section>
  <Container>
    <Heading level="h2">Skills</Heading>
    <Grid cols={4} gap="md" className="mt-8">
      {skills.map((skill) => (
        <Card
          key={skill.id}
          variant="bordered"
          hover="glow"
          className="text-center"
        >
          <CardHeader>
            <CardTitle>{skill.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Text size="small">{skill.level}</Text>
          </CardContent>
        </Card>
      ))}
    </Grid>
  </Container>
</Section>
```

### Blog Post Grid

```tsx
<Grid cols={3} gap="lg">
  {posts.map((post) => (
    <Card key={post.id} hover="lift">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <Text size="small">{post.excerpt}</Text>
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${post.slug}`} internal>
          Read More →
        </Link>
      </CardFooter>
    </Card>
  ))}
</Grid>
```

### Team Grid

```tsx
<Grid cols={3} gap="xl">
  {team.map((member) => (
    <Card key={member.id} variant="ghost" className="text-center">
      <CardContent className="pt-6">
        <div className="w-24 h-24 rounded-full bg-primary-200 mx-auto mb-4" />
        <Heading level="h4">{member.name}</Heading>
        <Text size="small" variant="muted">
          {member.role}
        </Text>
      </CardContent>
    </Card>
  ))}
</Grid>
```

### Masonry-Style Layout

```tsx
<Grid cols="auto" gap="md">
  <Card className="h-48">Short card</Card>
  <Card className="h-64">Medium card</Card>
  <Card className="h-48">Short card</Card>
  <Card className="h-80">Tall card</Card>
  <Card className="h-56">Medium card</Card>
</Grid>
```

---

## Responsive Behavior

### Breakpoint Behavior

| Cols | Mobile (<768px) | Tablet (768px+) | Desktop (1024px+) | XL (1280px+) |
| ---- | --------------- | --------------- | ----------------- | ------------ |
| 1    | 1 col           | 1 col           | 1 col             | 1 col        |
| 2    | 1 col           | 2 cols          | 2 cols            | 2 cols       |
| 3    | 1 col           | 2 cols          | 3 cols            | 3 cols       |
| 4    | 1 col           | 2 cols          | 4 cols            | 4 cols       |
| 5    | 1 col           | 2 cols          | 3 cols            | 5 cols       |
| 6    | 1 col           | 2 cols          | 3 cols            | 6 cols       |

### Testing Responsive Grids

1. Start with mobile (375px)
2. Test tablet (768px)
3. Test desktop (1024px)
4. Test XL screens (1280px+)

---

## Accessibility

### Semantic HTML

Use appropriate HTML elements:

```tsx
// For lists
<Grid as="ul" cols={3}>
  <GridItem as="li">Item 1</GridItem>
  <GridItem as="li">Item 2</GridItem>
</Grid>

// For sections
<Grid as="section" cols={2}>
  <article>Content 1</article>
  <article>Content 2</article>
</Grid>
```

### Keyboard Navigation

- Grid items should be keyboard accessible
- Use proper focus management
- Ensure interactive items have focus states

---

## Best Practices

1. **Choose appropriate column counts**
   - 2-3 cols for text-heavy content
   - 4-6 cols for image galleries or skill badges
   - Auto for flexible, content-driven layouts

2. **Use consistent gaps**
   - `sm` (16px) for tight layouts
   - `md` (24px) for general use
   - `lg` (32px) for spacious layouts

3. **Consider content**
   - Equal-height cards work best
   - Use GridItem for featured content
   - Test with varying content lengths

4. **Responsive design**
   - Always test on mobile first
   - Ensure single column works well on mobile
   - Use auto-fit for flexible layouts

5. **Performance**
   - Avoid too many grid items on one page
   - Use pagination or infinite scroll for large lists
   - Lazy load images in grid items

---

## Related Components

- **Card** - Perfect for grid items
- **Container** - Wrap grids for width constraints
- **Section** - Use for grid sections
- **Heading** - Section titles above grids
