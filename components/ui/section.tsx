import { cn } from '@/lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /**
   * HTML id attribute for anchor links
   */
  id?: string;
  /**
   * Vertical padding variant
   * @default 'default'
   */
  spacing?: 'none' | 'sm' | 'default' | 'lg';
  /**
   * Background color variant
   * @default 'transparent'
   */
  background?: 'transparent' | 'white' | 'neutral' | 'primary';
  /**
   * Render as specific HTML element
   * @default 'section'
   */
  as?: 'section' | 'div' | 'article' | 'main';
}

const spacingClasses = {
  none: '',
  sm: 'py-8 md:py-12',
  default: 'py-section-mobile md:py-section',
  lg: 'py-16 md:py-24 lg:py-32',
};

const backgroundClasses = {
  transparent: 'bg-transparent',
  white: 'bg-white',
  neutral: 'bg-neutral-50',
  primary: 'bg-primary-50',
};

/**
 * Section component for consistent vertical spacing and background colors
 *
 * @example
 * ```tsx
 * <Section id="about" background="white">
 *   <Container>
 *     <h2>About</h2>
 *   </Container>
 * </Section>
 *
 * <Section spacing="lg" background="neutral">
 *   <Container size="narrow">
 *     <p>Content with large spacing</p>
 *   </Container>
 * </Section>
 * ```
 */
export function Section({
  children,
  className,
  id,
  spacing = 'default',
  background = 'transparent',
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </Component>
  );
}
