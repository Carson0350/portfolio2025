'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { motion } from 'framer-motion';

export function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React',
        'TypeScript',
        'JavaScript',
        'Next.js',
        'HTML/CSS',
        'Tailwind CSS',
        'Redux',
        'React Query',
      ],
    },
    {
      title: 'Backend',
      skills: [
        '.NET',
        'C#',
        'Node.js',
        'Python',
        'Django',
        'RESTful APIs',
        'GraphQL',
        'SQL',
      ],
    },
    {
      title: 'Tools & Other',
      skills: [
        'Azure',
        'Docker',
        'Git',
        'CI/CD',
        'PostgreSQL',
        'MongoDB',
        'Agile/Scrum',
        'Testing',
      ],
    },
  ];

  return (
    <Section id="skills" background="neutral" className="py-20 lg:py-32">
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
              Technical Skills
            </Heading>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web
              applications
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="space-y-6"
              >
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-neutral-900">
                  {category.title}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center justify-center p-4 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      <span className="text-sm font-medium text-neutral-700 text-center">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
