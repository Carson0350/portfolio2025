'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { type Project } from '@/lib/schemas';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect } from 'react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-title"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
                  aria-label="Close project details"
                >
                  <X className="w-6 h-6 text-neutral-700" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh]">
                  {/* Hero Image */}
                  {project.imageUrl && (
                    <div className="relative w-full h-64 md:h-80 bg-neutral-200">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    {/* Title */}
                    <h2
                      id="project-title"
                      className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
                    >
                      {project.title}
                    </h2>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-neutral-200">
                      <div>
                        <span className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                          Status
                        </span>
                        <p className="text-neutral-900 capitalize">
                          {project.status}
                        </p>
                      </div>
                      {project.startDate && (
                        <div>
                          <span className="text-sm font-semibold text-neutral-700 uppercase tracking-wide">
                            Timeline
                          </span>
                          <p className="text-neutral-900">
                            {new Date(project.startDate).toLocaleDateString(
                              'en-US',
                              { month: 'short', year: 'numeric' }
                            )}
                            {project.endDate &&
                              ` - ${new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wide mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium border border-accent-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Markdown Content - Card Style */}
                    <div className="space-y-4">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          // Paragraphs in cards
                          p: ({ children }) => (
                            <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                              <p className="text-neutral-700 leading-relaxed">
                                {children}
                              </p>
                            </div>
                          ),
                          // Headings outside cards
                          h2: ({ children }) => (
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4 mt-8 first:mt-0">
                              {children}
                            </h3>
                          ),
                          h3: ({ children }) => (
                            <h4 className="text-xl font-semibold text-neutral-800 mb-3 mt-6">
                              {children}
                            </h4>
                          ),
                          // Links
                          a: (props) => (
                            <a
                              {...props}
                              className="text-accent-600 hover:underline font-medium"
                              target={
                                props.href?.startsWith('http')
                                  ? '_blank'
                                  : undefined
                              }
                              rel={
                                props.href?.startsWith('http')
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                            />
                          ),
                          // Strong text
                          strong: ({ children }) => (
                            <strong className="font-semibold text-neutral-900">
                              {children}
                            </strong>
                          ),
                          // Lists in cards
                          ul: ({ children }) => (
                            <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                              <ul className="space-y-2">{children}</ul>
                            </div>
                          ),
                          li: ({ children }) => (
                            <li className="text-neutral-700 leading-relaxed flex items-start">
                              <span className="text-accent-500 mr-2">•</span>
                              <span>{children}</span>
                            </li>
                          ),
                        }}
                      >
                        {project.content}
                      </ReactMarkdown>
                    </div>

                    {/* External Links */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="mt-8 pt-8 border-t border-neutral-200 flex gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors"
                          >
                            View Live Project →
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                          >
                            View on GitHub →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
