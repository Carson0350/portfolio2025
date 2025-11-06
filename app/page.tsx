import { Hero } from '@/components/hero';
import { Container, Section } from '@/components/ui/layout';

export default function Home() {
  return (
    <main className="bg-neutral-50">
      {/* Hero Section */}
      <Hero />

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
