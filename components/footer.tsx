import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/carsonantoine',
    icon: Linkedin,
    label: 'Visit Carson Antoine on LinkedIn',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Carson0350',
    icon: Github,
    label: 'Visit Carson Antoine on GitHub',
  },
  {
    name: 'Email',
    href: 'mailto:carson.antoine@example.com',
    icon: Mail,
    label: 'Send an email to Carson Antoine',
  },
];

const footerLinks = [
  { name: 'Components', href: '/components' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-100 border-t border-primary-800">
      <div className="max-w-container mx-auto px-container-padding-mobile md:px-container-padding py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Branding & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-body font-semibold text-white mb-2">
              Carson Antoine
            </p>
            <p className="text-small text-primary-300">Full Stack Developer</p>
            <p className="text-small text-primary-400 mt-2">
              &copy; {currentYear} Carson Antoine. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-small font-medium text-primary-300">
              Connect with me
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    aria-label={link.label}
                    className="p-2 text-primary-300 hover:text-accent-400 transition-colors rounded-lg hover:bg-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Secondary Navigation */}
        {footerLinks.length > 0 && (
          <div className="mt-8 pt-8 border-t border-primary-800">
            <nav
              className="flex flex-wrap justify-center gap-6"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-small text-primary-300 hover:text-accent-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 rounded-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </footer>
  );
}
