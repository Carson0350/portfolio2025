'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const skillBadgeVariants = cva(
  'flex items-center justify-center gap-2 p-4 rounded-xl border transition-all',
  {
    variants: {
      variant: {
        default:
          'bg-white border-neutral-200 hover:border-accent-300 hover:shadow-md',
        highlighted:
          'bg-accent-50 border-accent-300 hover:border-accent-400 hover:shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface SkillBadgeProps
  extends VariantProps<typeof skillBadgeVariants> {
  name: string;
  icon?: LucideIcon;
  className?: string;
  delay?: number;
}

export function SkillBadge({
  name,
  icon: Icon,
  variant,
  className,
  delay = 0,
}: SkillBadgeProps) {
  return (
    <motion.div
      className={skillBadgeVariants({ variant, className })}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.4,
      }}
      whileHover={{ scale: 1.05, y: -4 }}
      role="listitem"
      aria-label={`${name} skill`}
    >
      {Icon && (
        <Icon
          className={
            variant === 'highlighted'
              ? 'w-5 h-5 text-accent-600'
              : 'w-5 h-5 text-neutral-600'
          }
          aria-hidden="true"
        />
      )}
      <span
        className={
          variant === 'highlighted'
            ? 'text-sm font-semibold text-accent-900'
            : 'text-sm font-medium text-neutral-700'
        }
      >
        {name}
      </span>
    </motion.div>
  );
}
