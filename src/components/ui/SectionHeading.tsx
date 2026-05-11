import { cn } from '@/lib/utils';
import GamosaAccent from './GamosaAccent';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'text-xs font-semibold tracking-[0.2em] uppercase mb-3',
            light ? 'text-ahom-gold' : 'text-[var(--gamosa-red)]'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-serif font-semibold leading-tight',
          'text-3xl md:text-4xl lg:text-5xl',
          light ? 'text-ahom-cream' : 'text-[var(--text-primary)]'
        )}
      >
        {title}
      </h2>
      <div className={cn('mt-4', align === 'center' ? 'mx-auto max-w-xs' : 'max-w-xs')}>
        <GamosaAccent />
      </div>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-ahom-cream/80' : 'text-[var(--text-secondary)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
