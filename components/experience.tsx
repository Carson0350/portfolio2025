'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Placeholder experience data
  const experiences = [
    {
      company: 'Company Name',
      role: 'Senior Full Stack Developer',
      startDate: '2023',
      endDate: 'Present',
      achievements: [
        'Led development of key features',
        'Improved performance by 40%',
        'Mentored junior developers',
      ],
      technologies: ['React', 'TypeScript', '.NET', 'Azure'],
    },
    {
      company: 'Previous Company',
      role: 'Full Stack Developer',
      startDate: '2021',
      endDate: '2023',
      achievements: [
        'Built scalable web applications',
        'Implemented CI/CD pipelines',
        'Collaborated with cross-functional teams',
      ],
      technologies: ['JavaScript', 'Node.js', 'Docker'],
    },
  ];

  return (
    <Section id="experience" background="white" className="py-20 lg:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <Heading level="h2" className="mb-4">
              Professional Experience
            </Heading>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A track record of delivering impactful solutions across diverse
              industries
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -translate-x-1/2 hidden sm:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.startDate}`}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg -translate-x-1/2 hidden sm:block" />

                  {/* Content card */}
                  <div
                    className={`ml-0 sm:ml-16 md:ml-0 ${
                      index % 2 === 0
                        ? 'md:mr-[calc(50%+2rem)]'
                        : 'md:ml-[calc(50%+2rem)]'
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
                          <h3 className="text-xl font-bold text-neutral-900 mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg font-semibold text-accent-600">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-neutral-700 mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm text-neutral-600 flex items-start"
                            >
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
                          {exp.technologies.map((tech) => (
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
