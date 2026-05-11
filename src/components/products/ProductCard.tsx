import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

const tagStyles: Record<string, string> = {
  bestseller: 'bg-[var(--gamosa-red)] text-ahom-cream',
  premium:    'bg-ahom-gold text-ahom-brown',
  new:        'bg-ahom-brown text-ahom-cream',
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      id={product.id}
      className={cn(
        'group relative bg-[var(--bg-elevated)] rounded-sm overflow-hidden',
        'border border-[var(--border-subtle)]',
        'shadow-card hover:shadow-card-hover',
        'transition-all duration-300 hover:-translate-y-1'
      )}
    >
      {/* Tag */}
      {product.tag && (
        <span
          className={cn(
            'absolute top-3 right-3 z-10 px-2 py-0.5 text-xs font-semibold tracking-wider uppercase rounded-sm',
            tagStyles[product.tag]
          )}
        >
          {product.tag}
        </span>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-medium tracking-widest uppercase text-[var(--gamosa-red)] mb-1">
          {product.grade}
        </p>
        <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-4">
          {product.description}
        </p>

        {/* Flavor notes */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.flavorNotes.map((note) => (
            <span
              key={note}
              className="px-2 py-0.5 text-xs border border-[var(--gold)] text-[var(--gold)] rounded-sm"
            >
              {note}
            </span>
          ))}
        </div>

        <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
          <span className="text-[var(--gold)]">⚑</span> {product.origin}
        </p>
      </div>
    </div>
  );
}
