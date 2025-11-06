'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

interface AboutProps {
  bio?: {
    title: string;
    excerpt: string;
    content: string;
  } | null;
}

export function About({ bio }: AboutProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description:
        'Expert in React, TypeScript, .NET, and Azure cloud solutions',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: '40% faster delivery through optimization and automation',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description:
        'Mentoring developers and fostering collaborative environments',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Unique perspective from healthcare to software engineering',
    },
  ];

  return (
    <Section id="about" background="white" className="py-20 lg:py-32">
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
              About Me
            </Heading>
            {bio?.excerpt && (
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                {bio.excerpt}
              </p>
            )}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            {/* Bio Content */}
            <motion.div variants={itemVariants}>
              <div className="prose prose-lg max-w-none">
                {bio?.content ? (
                  // Split content into paragraphs and render
                  bio.content.split('\n\n').map((paragraph, index) => {
                    // Check if it's a heading
                    if (paragraph.startsWith('# ')) {
                      return (
                        <h3
                          key={index}
                          className="text-2xl font-bold text-neutral-900 mt-8 mb-4"
                        >
                          {paragraph.replace('# ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h4
                          key={index}
                          className="text-xl font-semibold text-neutral-800 mt-6 mb-3"
                        >
                          {paragraph.replace('## ', '')}
                        </h4>
                      );
                    }
                    // Regular paragraph
                    return (
                      <p
                        key={index}
                        className="text-neutral-700 leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    );
                  })
                ) : (
                  <p className="text-neutral-700 leading-relaxed">
                    Full Stack Developer with a passion for creating elegant,
                    efficient, and user-friendly web applications.
                  </p>
                )}
              </div>
            </motion.div>

            {/* Highlights Cards */}
            <motion.div className="space-y-4" variants={itemVariants}>
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={highlight.title}
                    className="flex gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-200"
            variants={itemVariants}
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '40%', label: 'Performance Boost' },
              { value: '5+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl font-bold text-primary-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
