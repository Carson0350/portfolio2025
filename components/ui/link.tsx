import * as React from 'react';
import NextLink from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

const linkVariants = cva(
  'inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 rounded-sm',
  {
    variants: {
      variant: {
        default:
          'text-accent-600 hover:text-accent-700 underline-offset-4 hover:underline',
        subtle: 'text-neutral-700 hover:text-accent-600',
        muted: 'text-neutral-600 hover:text-neutral-900',
        primary: 'text-primary-800 hover:text-accent-600 font-semibold',
      },
      underline: {
        always: 'underline',
        hover: 'hover:underline',
        never: 'no-underline',
      },
    },
    defaultVariants: {
      variant: 'default',
      underline: 'hover',
    },
  }
);

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof linkVariants> {
  /**
   * Link destination
   */
  href: string;
  /**
   * Show external link icon
   */
  showExternalIcon?: boolean;
  /**
   * Use Next.js Link for internal navigation
   */
  internal?: boolean;
}

/**
 * Link component with variants and external link handling
 *
 * @example
 * ```tsx
 * <Link href="/about" internal>About Page</Link>
 * <Link href="https://github.com" showExternalIcon>GitHub</Link>
 * <Link href="/contact" variant="primary" internal>Contact</Link>
 * ```
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      variant,
      underline,
      showExternalIcon,
      internal = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    const shouldShowIcon = showExternalIcon && isExternal;

    const linkClasses = cn(linkVariants({ variant, underline }), className);

    const content = (
      <>
        {children}
        {shouldShowIcon && <ExternalLink size={16} className="inline-block" />}
      </>
    );

    if (internal || !isExternal) {
      return (
        <NextLink ref={ref} href={href} className={linkClasses} {...props}>
          {content}
        </NextLink>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }
);

Link.displayName = 'Link';
