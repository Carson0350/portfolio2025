import { cn } from '@/lib/utils';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Max width variant
   * @default 'default'
   */
  size?: 'xs' | 'narrow' | 'default' | 'wide' | 'full';
  /**
   * Apply horizontal padding
   * @default true
   */
  padding?: boolean;
}

const sizeClasses = {
  xs: 'max-w-container-xs',
  narrow: 'max-w-container-narrow',
  default: 'max-w-container',
  wide: 'max-w-container-wide',
  full: 'max-w-full',
};

/**
 * Container component for constraining content width and applying consistent horizontal padding
 *
 * @example
 * ```tsx
 * <Container>
 *   <h1>Content</h1>
 * </Container>
 *
 * <Container size="narrow" padding={false}>
 *   <p>Narrow content without padding</p>
 * </Container>
 * ```
 */
export function Container({
  children,
  className,
  size = 'default',
  padding = true,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        padding && 'px-container-padding-mobile md:px-container-padding',
        className
      )}
    >
      {children}
    </div>
  );
}
