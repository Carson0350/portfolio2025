'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export interface ExperienceCardProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  technologies: string[];
  index: number;
}

export function ExperienceCard({
  company,
  role,
  startDate,
  endDate,
  achievements,
  technologies,
  index,
}: ExperienceCardProps) {
  return (
    <div
      className={`ml-0 sm:ml-16 md:ml-0 ${
        index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
      }`}
    >
      <motion.div
        className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        whileHover={{ y: -4 }}
      >
        {/* Company & Role */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-6 h-6 text-accent-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">{role}</h3>
            <p className="text-lg font-semibold text-accent-600">{company}</p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
          <Calendar className="w-4 h-4" />
          <span>
            {startDate} - {endDate}
          </span>
        </div>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-700 mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, i) => (
              <li key={i} className="text-sm text-neutral-600 flex items-start">
                <span className="text-accent-500 mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="text-sm font-semibold text-neutral-700 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
