import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    size: {
      xl: 'text-body-xl',
      large: 'text-body-large',
      base: 'text-body',
      small: 'text-body-sm',
      xs: 'text-small',
      tiny: 'text-tiny',
    },
    variant: {
      default: 'text-neutral-700',
      muted: 'text-neutral-600',
      subtle: 'text-neutral-500',
      primary: 'text-primary-800',
      accent: 'text-accent-600',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'default',
    weight: 'normal',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  /**
   * Render as a different HTML element
   */
  as?: 'p' | 'span' | 'div' | 'label';
}

/**
 * Text component with size and color variants
 *
 * @example
 * ```tsx
 * <Text>Default body text</Text>
 * <Text size="large" variant="primary">Large primary text</Text>
 * <Text size="small" variant="muted">Small muted text</Text>
 * <Text as="span" weight="semibold">Inline semibold text</Text>
 * ```
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    { as: Component = 'p', size, variant, weight, className, ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref as any}
        className={cn(textVariants({ size, variant, weight }), className)}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
