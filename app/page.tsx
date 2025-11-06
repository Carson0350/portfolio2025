import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Container, Section } from '@/components/ui/layout';

export default function Home() {
  return (
    <main className="bg-neutral-50">
      {/* Hero Section */}
      <Section
        as="div"
        spacing="none"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <Container>
          <div className="text-center space-y-8">
            <h1 className="text-h1-mobile md:text-h1 text-primary-800">
              Carson Antoine
            </h1>
            <p className="text-body-large text-primary-600">
              Full Stack Developer Portfolio
            </p>
            <p className="text-small text-neutral-600">Coming soon...</p>

            {/* Component Demo */}
            <Card className="mx-auto max-w-md shadow-card mt-12">
              <CardHeader>
                <CardTitle>shadcn/ui Components</CardTitle>
                <CardDescription>
                  Testing base components installation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="flex-1 min-w-fit">Primary Button</Button>
                  <Button variant="outline" className="flex-1 min-w-fit">
                    Outline Button
                  </Button>
                  <Button variant="ghost" className="flex-1 min-w-fit">
                    Ghost Button
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        background="white"
        className="min-h-screen flex items-center justify-center"
      >
        <Container>
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            About
          </h2>
          <Container size="narrow" padding={false}>
            <p className="text-body-large text-neutral-700">
              This is the About section. Navigation should highlight this
              section when scrolled into view.
            </p>
          </Container>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        background="neutral"
        className="min-h-screen flex items-center justify-center"
      >
        <Container>
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-primary-800 h-12 w-12 rounded-lg shadow-sm"></div>
            <div className="bg-accent-500 h-12 w-12 rounded-lg shadow-sm"></div>
            <div className="bg-success-500 h-12 w-12 rounded-lg shadow-sm"></div>
            <div className="bg-warning-500 h-12 w-12 rounded-lg shadow-sm"></div>
            <div className="bg-error-500 h-12 w-12 rounded-lg shadow-sm"></div>
            <div className="bg-info-500 h-12 w-12 rounded-lg shadow-sm"></div>
          </div>
        </Container>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        background="white"
        className="min-h-screen flex items-center justify-center"
      >
        <Container>
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Projects
          </h2>
          <p className="text-body-large text-neutral-700">
            This is the Projects section.
          </p>
        </Container>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        background="neutral"
        className="min-h-screen flex items-center justify-center"
      >
        <Container>
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Experience
          </h2>
          <p className="text-body-large text-neutral-700">
            This is the Experience section.
          </p>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        background="white"
        className="min-h-screen flex items-center justify-center"
      >
        <Container>
          <h2 className="text-h2-mobile md:text-h2 text-primary-800 mb-8">
            Contact
          </h2>
          <p className="text-body-large text-neutral-700">
            This is the Contact section.
          </p>
        </Container>
      </Section>
    </main>
  );
}
