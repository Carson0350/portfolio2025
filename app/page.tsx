import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Container, Section } from '@/components/ui/layout';
import { getBio, getFeaturedProjects } from '@/lib/content';

export default function Home() {
  const bio = getBio();
  const featuredProjects = getFeaturedProjects(4);

  return (
    <main className="bg-neutral-50">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About bio={bio} />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects projects={featuredProjects} />

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
