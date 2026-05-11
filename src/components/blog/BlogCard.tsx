import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-[var(--bg-elevated)] rounded-sm border border-[var(--border-subtle)] shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage ?? `https://picsum.photos/seed/${post.slug}/800/400`}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString('en-IN', {
              day: 'numeric', month: 'short', year: 'numeric'
            })}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime} min read
            </span>
          )}
        </div>

        <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--gamosa-red)] transition-colors leading-snug mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2 flex-1 mb-4">
          {post.excerpt}
        </p>

        <span className="inline-flex items-center gap-1 text-sm text-[var(--gamosa-red)] font-medium group-hover:gap-2 transition-all duration-200">
          Read More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
