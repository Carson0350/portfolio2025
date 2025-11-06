import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Carson Antoine - Full Stack Developer',
  description:
    'Professional portfolio showcasing full-stack development expertise',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Carson Antoine' }],
  creator: 'Carson Antoine',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carsonantoine.com',
    title: 'Carson Antoine - Full Stack Developer',
    description:
      'Professional portfolio showcasing full-stack development expertise',
    siteName: 'Carson Antoine Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carson Antoine - Full Stack Developer',
    description:
      'Professional portfolio showcasing full-stack development expertise',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
