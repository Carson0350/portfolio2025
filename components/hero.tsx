'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-600"></span>
              </span>
              Available for opportunities
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Senior Full-Stack Engineer
              <span className="block text-primary-700 mt-2">
                specializing in .NET/React/Azure
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Building scalable, performant web applications that solve real
              business problems. From healthcare to enterprise solutions, I
              bring a unique perspective to every project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToContact} className="group">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View My Work
              </Button>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start">
              {[
                'React',
                'TypeScript',
                '.NET',
                'Azure',
                'Node.js',
                'Next.js',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full blur-2xl opacity-20"></div>

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center shadow-2xl border-8 border-white">
                {/* Placeholder for headshot */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">CA</span>
                  </div>
                  <p className="text-sm text-neutral-600 font-medium">
                    Professional headshot
                    <br />
                    coming soon
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 font-medium">
                      Projects Delivered
                    </p>
                    <p className="text-lg font-bold text-neutral-900">50+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
