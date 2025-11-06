'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { SkillBadge } from '@/components/ui/skill-badge';
import { motion } from 'framer-motion';
import {
  Code2,
  Braces,
  FileCode,
  Layers,
  Palette,
  Wind,
  Database,
  Server,
  Globe,
  Network,
  Cloud,
  Container as ContainerIcon,
  GitBranch,
  Workflow,
  TestTube,
  Users,
} from 'lucide-react';

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
        { name: 'React', icon: Code2, highlighted: true },
        { name: 'TypeScript', icon: Braces, highlighted: true },
        { name: 'JavaScript', icon: FileCode },
        { name: 'Next.js', icon: Layers, highlighted: true },
        { name: 'HTML/CSS', icon: Palette },
        { name: 'Tailwind CSS', icon: Wind },
        { name: 'Redux', icon: Database },
        { name: 'React Query', icon: Network },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: '.NET', icon: Server, highlighted: true },
        { name: 'C#', icon: Braces, highlighted: true },
        { name: 'Node.js', icon: Globe },
        { name: 'Python', icon: FileCode },
        { name: 'Django', icon: Server },
        { name: 'RESTful APIs', icon: Network },
        { name: 'GraphQL', icon: Network },
        { name: 'SQL', icon: Database },
      ],
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Azure', icon: Cloud, highlighted: true },
        { name: 'Docker', icon: ContainerIcon },
        { name: 'Git', icon: GitBranch },
        { name: 'CI/CD', icon: Workflow },
        { name: 'PostgreSQL', icon: Database },
        { name: 'MongoDB', icon: Database },
        { name: 'Agile/Scrum', icon: Users },
        { name: 'Testing', icon: TestTube },
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
                <div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                  role="list"
                  aria-label={`${category.title} skills`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      variant={skill.highlighted ? 'highlighted' : 'default'}
                      delay={categoryIndex * 0.2 + skillIndex * 0.05}
                    />
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
