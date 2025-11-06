import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold text-primary-800', {
  variants: {
    level: {
      h1: 'text-h1-mobile md:text-h1',
      h2: 'text-h2-mobile md:text-h2',
      h3: 'text-h3-mobile md:text-h3',
      h4: 'text-h4-mobile md:text-h4',
      h5: 'text-h5',
      h6: 'text-h6',
    },
  },
  defaultVariants: {
    level: 'h2',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /**
   * Semantic heading level (h1-h6)
   */
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Visual style can differ from semantic level
   */
  visualLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

/**
 * Heading component with semantic HTML and responsive typography
 *
 * @example
 * ```tsx
 * <Heading level="h1">Page Title</Heading>
 * <Heading level="h2">Section Heading</Heading>
 * <Heading level="h3" visualLevel="h2">Visually Larger H3</Heading>
 * ```
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, visualLevel, className, children, ...props }, ref) => {
    const Component = level;
    const styleLevel = visualLevel || level;

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level: styleLevel }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';
