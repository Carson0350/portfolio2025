'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { motion } from 'framer-motion';
import {
  Code2,
  Lightbulb,
  Users,
  Zap,
  Mountain,
  Tent,
  Snowflake,
  Gamepad2,
  Disc,
  Flag,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

          {/* Bio Content - Full Width Card Style */}
          <motion.div className="space-y-4 mb-12" variants={itemVariants}>
            {bio?.content ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Custom paragraph component - each in a card
                  p: ({ children }) => (
                    <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                      <p className="text-neutral-700 leading-relaxed">
                        {children}
                      </p>
                    </div>
                  ),
                  // Custom heading components
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
                  // Custom link component - open external links in new tab
                  a: (props) => (
                    <a
                      {...props}
                      className="text-accent-600 hover:underline font-medium"
                      target={
                        props.href?.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        props.href?.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    />
                  ),
                  // Custom strong component
                  strong: ({ children }) => (
                    <strong className="font-semibold text-neutral-900">
                      {children}
                    </strong>
                  ),
                  // Custom list components
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
                {bio.content}
              </ReactMarkdown>
            ) : (
              <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed">
                  Full Stack Developer with a passion for creating elegant,
                  efficient, and user-friendly web applications.
                </p>
              </div>
            )}
          </motion.div>

          {/* Highlights Cards - Grid Below */}
          <motion.div
            className="grid md:grid-cols-2 gap-4 mb-16"
            variants={itemVariants}
          >
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

          {/* When I'm Not Coding Section */}
          <motion.div className="mt-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
              When I'm Not Coding
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Mountain, label: 'Hiking', color: 'text-green-600' },
                { icon: Tent, label: 'Camping', color: 'text-orange-600' },
                {
                  icon: Snowflake,
                  label: 'Snow Skiing',
                  color: 'text-blue-600',
                },
                {
                  icon: Gamepad2,
                  label: 'Video Games',
                  color: 'text-purple-600',
                },
                { icon: Disc, label: 'Disc Golf', color: 'text-yellow-600' },
                { icon: Flag, label: 'F1 Racing', color: 'text-red-600' },
              ].map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={hobby.label}
                    className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center ${hobby.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium text-neutral-700 text-center">
                      {hobby.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
