'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Heading } from '@/components/ui/heading';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'carson.workflow@gmail.com',
      href: 'mailto:carson.workflow@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/carson-antoine',
      href: 'https://linkedin.com/in/carson-antoine',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Carson0350',
      href: 'https://github.com/Carson0350',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'St. Louis, MO',
      href: null,
    },
  ];

  return (
    <Section id="contact" background="neutral" className="py-20 lg:py-32">
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
              Get In Touch
            </Heading>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's connect!
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-neutral-600 mb-8">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200 hover:border-accent-300 hover:shadow-md transition-all">
                      <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-neutral-700 mb-1">
                          {method.label}
                        </p>
                        <p className="text-neutral-900 font-medium break-words">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  );

                  return method.href ? (
                    <a
                      key={method.label}
                      href={method.href}
                      target={
                        method.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        method.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={method.label}>{content}</div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column - Contact Form Placeholder */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl border border-neutral-200 p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <p className="text-neutral-600 mb-4">
                    Contact form coming soon!
                  </p>
                  <p className="text-sm text-neutral-500">
                    For now, please use the contact methods on the left.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
