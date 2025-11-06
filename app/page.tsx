import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
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
      <Contact />
    </main>
  );
}
