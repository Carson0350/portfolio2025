'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { ProjectCard } from '@/components/ui/project-card';
import { ProjectDetailModal } from '@/components/project-detail-modal';
import { type Project } from '@/lib/schemas';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  if (projects.length === 0) {
    return null;
  }

  // Extract all unique technologies from projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies || []))
  ).sort();

  // Filter projects based on active filters
  const filteredProjects =
    activeFilters.length === 0
      ? projects
      : projects.filter((project) =>
          activeFilters.every((filter) =>
            project.technologies?.includes(filter)
          )
        );

  const toggleFilter = (tech: string) => {
    setActiveFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
    setCurrentPage(0); // Reset to first page when filtering
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setCurrentPage(0);
  };

  // Carousel logic
  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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

          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={clearFilters}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilters.length === 0
                    ? 'bg-accent-600 text-white shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                aria-label="Show all projects"
              >
                All Projects
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilters.includes(tech)
                      ? 'bg-accent-600 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                  aria-label={`Filter by ${tech}`}
                  aria-pressed={activeFilters.includes(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
            {activeFilters.length > 0 && (
              <div className="text-center mt-4">
                <button
                  onClick={clearFilters}
                  className="text-sm text-neutral-600 hover:text-neutral-900 underline"
                >
                  Clear filters ({activeFilters.length})
                </button>
              </div>
            )}
          </div>

          {/* Projects Carousel */}
          {filteredProjects.length > 0 ? (
            <div className="relative px-16">
              {/* Navigation Arrows */}
              {totalPages > 1 && (
                <>
                  <button
                    onClick={goToPrevPage}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    aria-label="Previous projects"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNextPage}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    aria-label="Next projects"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Projects Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                >
                  {visibleProjects.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={index}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Page Indicators */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPage
                          ? 'bg-accent-600 w-8'
                          : 'bg-neutral-300 hover:bg-neutral-400'
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No projects found with the selected technologies.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-accent-600 hover:text-accent-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </Section>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
