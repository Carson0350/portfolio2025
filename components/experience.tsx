'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { ExperienceCard } from '@/components/ui/experience-card';
import { experienceData } from '@/lib/data/experience';
import { motion } from 'framer-motion';

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
              {experienceData.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.startDate}`}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg -translate-x-1/2 hidden sm:block" />

                  {/* Content card */}
                  <ExperienceCard
                    company={exp.company}
                    role={exp.role}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    achievements={exp.achievements}
                    technologies={exp.technologies}
                    index={index}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
