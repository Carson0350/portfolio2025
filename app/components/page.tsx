import { Container, Section } from '@/components/ui/layout';
import { Heading, Text, Link } from '@/components/ui/typography';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Grid, GridItem } from '@/components/ui/grid';

export default function ComponentLibrary() {
  return (
    <main className="pt-20 pb-16">
      {/* Header */}
      <Section background="white" spacing="sm">
        <Container>
          <Heading level="h1">Component Library</Heading>
          <Text size="large" variant="muted" className="mt-2">
            Showcase of all design system components
          </Text>
        </Container>
      </Section>

      {/* Typography Section */}
      <Section background="neutral">
        <Container>
          <Heading level="h2" className="mb-8">
            Typography
          </Heading>

          {/* Headings */}
          <div className="bg-white p-6 rounded-lg shadow-card mb-8">
            <Heading level="h3" className="mb-6">
              Headings
            </Heading>
            <div className="space-y-4">
              <div>
                <Heading level="h1">Heading 1</Heading>
                <Text size="small" variant="muted">
                  text-h1 (48px / 32px mobile)
                </Text>
              </div>
              <div>
                <Heading level="h2">Heading 2</Heading>
                <Text size="small" variant="muted">
                  text-h2 (36px / 28px mobile)
                </Text>
              </div>
              <div>
                <Heading level="h3">Heading 3</Heading>
                <Text size="small" variant="muted">
                  text-h3 (30px / 24px mobile)
                </Text>
              </div>
              <div>
                <Heading level="h4">Heading 4</Heading>
                <Text size="small" variant="muted">
                  text-h4 (24px / 20px mobile)
                </Text>
              </div>
              <div>
                <Heading level="h5">Heading 5</Heading>
                <Text size="small" variant="muted">
                  text-h5 (20px)
                </Text>
              </div>
              <div>
                <Heading level="h6">Heading 6</Heading>
                <Text size="small" variant="muted">
                  text-h6 (18px)
                </Text>
              </div>
            </div>
          </div>

          {/* Text Sizes */}
          <div className="bg-white p-6 rounded-lg shadow-card mb-8">
            <Heading level="h3" className="mb-6">
              Text Sizes
            </Heading>
            <div className="space-y-3">
              <div>
                <Text size="xl">Extra Large Text (20px)</Text>
              </div>
              <div>
                <Text size="large">Large Text (18px)</Text>
              </div>
              <div>
                <Text size="base">Base Text (16px)</Text>
              </div>
              <div>
                <Text size="small">Small Text (15px)</Text>
              </div>
              <div>
                <Text size="xs">Extra Small Text (14px)</Text>
              </div>
              <div>
                <Text size="tiny">Tiny Text (12px)</Text>
              </div>
            </div>
          </div>

          {/* Text Variants */}
          <div className="bg-white p-6 rounded-lg shadow-card mb-8">
            <Heading level="h3" className="mb-6">
              Text Variants
            </Heading>
            <div className="space-y-3">
              <Text variant="default">Default text (neutral-700)</Text>
              <Text variant="muted">Muted text (neutral-600)</Text>
              <Text variant="subtle">Subtle text (neutral-500)</Text>
              <Text variant="primary">Primary text (primary-800)</Text>
              <Text variant="accent">Accent text (accent-600)</Text>
            </div>
          </div>

          {/* Links */}
          <div className="bg-white p-6 rounded-lg shadow-card">
            <Heading level="h3" className="mb-6">
              Links
            </Heading>
            <div className="space-y-3">
              <div>
                <Link href="#" variant="default">
                  Default Link
                </Link>
              </div>
              <div>
                <Link href="#" variant="subtle">
                  Subtle Link
                </Link>
              </div>
              <div>
                <Link href="#" variant="muted">
                  Muted Link
                </Link>
              </div>
              <div>
                <Link href="#" variant="primary">
                  Primary Link
                </Link>
              </div>
              <div>
                <Link href="https://github.com" showExternalIcon>
                  External Link with Icon
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons Section */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">
            Buttons
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Button Variants */}
            <div className="bg-neutral-50 p-6 rounded-lg">
              <Heading level="h4" className="mb-4">
                Variants
              </Heading>
              <div className="space-y-3">
                <div>
                  <Button>Default Button</Button>
                </div>
                <div>
                  <Button variant="destructive">Destructive Button</Button>
                </div>
                <div>
                  <Button variant="outline">Outline Button</Button>
                </div>
                <div>
                  <Button variant="secondary">Secondary Button</Button>
                </div>
                <div>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
                <div>
                  <Button variant="link">Link Button</Button>
                </div>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="bg-neutral-50 p-6 rounded-lg">
              <Heading level="h4" className="mb-4">
                Sizes
              </Heading>
              <div className="space-y-3">
                <div>
                  <Button size="sm">Small Button</Button>
                </div>
                <div>
                  <Button size="default">Default Button</Button>
                </div>
                <div>
                  <Button size="lg">Large Button</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Cards Section */}
      <Section background="neutral">
        <Container>
          <Heading level="h2" className="mb-8">
            Cards
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Default Card */}
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard border and shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="small">
                  This is the default card variant with border and subtle
                  shadow.
                </Text>
              </CardContent>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Prominent shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="small">
                  This card has a more prominent shadow and no border.
                </Text>
              </CardContent>
            </Card>

            {/* Bordered Card */}
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Bordered Card</CardTitle>
                <CardDescription>Thick border</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="small">
                  This card has a thicker, more prominent border.
                </Text>
              </CardContent>
            </Card>
          </div>

          {/* Hover Effects */}
          <Heading level="h3" className="mb-6">
            Hover Effects
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card hover="lift">
              <CardHeader>
                <CardTitle>Lift on Hover</CardTitle>
                <CardDescription>Hover to see elevation</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="small">
                  This card lifts up when you hover over it.
                </Text>
              </CardContent>
            </Card>

            <Card hover="glow">
              <CardHeader>
                <CardTitle>Glow on Hover</CardTitle>
                <CardDescription>Hover to see border glow</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="small">
                  This card's border glows with accent color on hover.
                </Text>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Layout Components */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">
            Layout Components
          </Heading>

          <div className="space-y-6">
            {/* Container Sizes */}
            <div>
              <Heading level="h4" className="mb-4">
                Container Sizes
              </Heading>
              <div className="space-y-4">
                <div className="bg-accent-100 p-4 rounded">
                  <Container size="xs" padding={false}>
                    <Text size="small">XS Container (640px)</Text>
                  </Container>
                </div>
                <div className="bg-accent-100 p-4 rounded">
                  <Container size="narrow" padding={false}>
                    <Text size="small">Narrow Container (960px)</Text>
                  </Container>
                </div>
                <div className="bg-accent-100 p-4 rounded">
                  <Container size="default" padding={false}>
                    <Text size="small">Default Container (1280px)</Text>
                  </Container>
                </div>
              </div>
            </div>

            {/* Section Backgrounds */}
            <div>
              <Heading level="h4" className="mb-4">
                Section Backgrounds
              </Heading>
              <div className="space-y-2">
                <Section background="white" spacing="sm">
                  <Text size="small">White Background</Text>
                </Section>
                <Section background="neutral" spacing="sm">
                  <Text size="small">Neutral Background</Text>
                </Section>
                <Section background="primary" spacing="sm">
                  <Text size="small">Primary Background</Text>
                </Section>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Colors */}
      <Section background="neutral">
        <Container>
          <Heading level="h2" className="mb-8">
            Color Palette
          </Heading>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="space-y-2">
              <div className="bg-primary-800 h-20 rounded-lg shadow-card"></div>
              <Text size="small" weight="semibold">
                Primary
              </Text>
            </div>
            <div className="space-y-2">
              <div className="bg-accent-500 h-20 rounded-lg shadow-card"></div>
              <Text size="small" weight="semibold">
                Accent
              </Text>
            </div>
            <div className="space-y-2">
              <div className="bg-success-500 h-20 rounded-lg shadow-card"></div>
              <Text size="small" weight="semibold">
                Success
              </Text>
            </div>
            <div className="space-y-2">
              <div className="bg-warning-500 h-20 rounded-lg shadow-card"></div>
              <Text size="small" weight="semibold">
                Warning
              </Text>
            </div>
            <div className="space-y-2">
              <div className="bg-error-500 h-20 rounded-lg shadow-card"></div>
              <Text size="small" weight="semibold">
                Error
              </Text>
            </div>
            <div className="space-y-2">
              <div className="bg-info-500 h-20 rounded-lg shadow-card"></div>
              <Text size="small" weight="semibold">
                Info
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Grid System */}
      <Section background="white">
        <Container>
          <Heading level="h2" className="mb-8">
            Grid System
          </Heading>

          {/* 3 Column Grid */}
          <div className="mb-12">
            <Heading level="h4" className="mb-4">
              3 Column Grid
            </Heading>
            <Grid cols={3} gap="md">
              <Card>
                <CardContent className="pt-6">
                  <Text>Grid Item 1</Text>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Text>Grid Item 2</Text>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Text>Grid Item 3</Text>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Text>Grid Item 4</Text>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Text>Grid Item 5</Text>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Text>Grid Item 6</Text>
                </CardContent>
              </Card>
            </Grid>
          </div>

          {/* 4 Column Grid */}
          <div className="mb-12">
            <Heading level="h4" className="mb-4">
              4 Column Grid
            </Heading>
            <Grid cols={4} gap="sm">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} variant="bordered">
                  <CardContent className="pt-6 text-center">
                    <Text size="small">Item {i}</Text>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </div>

          {/* Column Spanning */}
          <div className="mb-12">
            <Heading level="h4" className="mb-4">
              Column Spanning
            </Heading>
            <Grid cols={3} gap="md">
              <GridItem colSpan={2}>
                <Card variant="elevated">
                  <CardContent className="pt-6">
                    <Text weight="semibold">Spans 2 Columns</Text>
                  </CardContent>
                </Card>
              </GridItem>
              <GridItem>
                <Card>
                  <CardContent className="pt-6">
                    <Text>Normal</Text>
                  </CardContent>
                </Card>
              </GridItem>
              <GridItem>
                <Card>
                  <CardContent className="pt-6">
                    <Text>Normal</Text>
                  </CardContent>
                </Card>
              </GridItem>
              <GridItem>
                <Card>
                  <CardContent className="pt-6">
                    <Text>Normal</Text>
                  </CardContent>
                </Card>
              </GridItem>
              <GridItem>
                <Card>
                  <CardContent className="pt-6">
                    <Text>Normal</Text>
                  </CardContent>
                </Card>
              </GridItem>
            </Grid>
          </div>

          {/* Auto-Fit Grid */}
          <div>
            <Heading level="h4" className="mb-4">
              Auto-Fit Grid
            </Heading>
            <Grid cols="auto" gap="lg">
              {[1, 2, 3, 4, 5].map((i) => (
                <Card key={i} hover="lift">
                  <CardContent className="pt-6">
                    <Text>Auto Item {i}</Text>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>
    </main>
  );
}
