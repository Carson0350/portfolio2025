'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function formatDate(date?: string | null) {
  if (!date) return null;

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(parsed);
}

function formatProjectDates(startDate?: string, endDate?: string) {
  const formattedStart = formatDate(startDate);
  const formattedEnd = formatDate(endDate);

  if (!formattedStart && !formattedEnd) {
    return 'Timeline unavailable';
  }

  if (!formattedEnd) {
    return `${formattedStart ?? 'Start TBD'} – Present`;
  }

  if (!formattedStart) {
    return formattedEnd;
  }

  return `${formattedStart} – ${formattedEnd}`;
}

export function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <Section id="projects" background="white" className="py-20 lg:py-32">
      <Container>
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4">
            Featured Projects
          </Heading>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Highlighting select case studies that showcase craftsmanship across
            architecture, experience, and delivery.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={gridVariants}
          className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              className="flex flex-col bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                      Engagement
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {formatProjectDates(project.startDate, project.endDate)}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-2">
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((technology) => (
                        <span
                          key={technology}
                          className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="border-t border-neutral-200 bg-white p-6 flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent-600 hover:text-accent-700"
                    >
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
