'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { ProjectCard } from '@/components/ui/project-card';
import { ProjectDetailModal } from '@/components/project-detail-modal';
import { type Project } from '@/lib/schemas';
import { motion } from 'framer-motion';

interface ProjectsProps {
  projects: Project[];
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (projects.length === 0) {
    return null;
  }

  return (
    <>
      <Section id="projects" background="white" className="py-20 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <Heading level="h2" className="mb-4">
              Featured Projects
            </Heading>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Highlighting select case studies that showcase craftsmanship
              across architecture, experience, and delivery.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={gridVariants}
            className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </Container>
      </Section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
