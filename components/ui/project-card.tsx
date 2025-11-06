'use client';

import { motion } from 'framer-motion';
import { type Project } from '@/lib/schemas';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

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

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: index * 0.1 },
    },
  };

  return (
    <motion.article
      variants={cardVariants}
      className="flex flex-col bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -4 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Project Image */}
      {project.imageUrl && (
        <div className="relative w-full h-48 bg-neutral-200 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
          {project.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-1">
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
              onClick={(e) => e.stopPropagation()}
            >
              View Live →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
