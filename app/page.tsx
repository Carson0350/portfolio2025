import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Container, Section } from '@/components/ui/layout';
import { getBio } from '@/lib/content';

export default function Home() {
  const bio = getBio();

  return (
    <main className="bg-neutral-50">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About bio={bio} />

      {/* Skills Section */}
      <Skills />

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
      <Experience />

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
