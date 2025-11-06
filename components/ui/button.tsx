import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-accent-500 text-white shadow-md hover:bg-accent-600 hover:shadow-lg active:bg-accent-700',
        destructive:
          'bg-error-500 text-white shadow-md hover:bg-error-600 hover:shadow-lg active:bg-error-700',
        outline:
          'border-2 border-primary-800 bg-transparent text-primary-800 shadow-sm hover:bg-primary-800 hover:text-white active:bg-primary-900',
        secondary:
          'bg-primary-100 text-primary-800 shadow-sm hover:bg-primary-200 active:bg-primary-300',
        ghost:
          'text-primary-700 hover:bg-primary-100 hover:text-primary-900 active:bg-primary-200',
        link: 'text-accent-600 underline-offset-4 hover:underline hover:text-accent-700',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-8 rounded-md px-4 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
