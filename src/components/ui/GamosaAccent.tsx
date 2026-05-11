import { cn } from '@/lib/utils';

interface GamosaAccentProps {
  className?: string;
  variant?: 'line' | 'thick';
}

export default function GamosaAccent({ className, variant = 'line' }: GamosaAccentProps) {
  if (variant === 'thick') {
    return (
      <div
        className={cn('w-full my-2', className)}
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #D42B2B 15%, #C9A84C 35%, #FDF8F0 50%, #C9A84C 65%, #D42B2B 85%, transparent)',
        }}
        aria-hidden="true"
      />
    );
  }
  return (
    <div
      className={cn('w-full my-2', className)}
      style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #D42B2B 20%, #C9A84C 50%, #D42B2B 80%, transparent)',
      }}
      aria-hidden="true"
    />
  );
}
