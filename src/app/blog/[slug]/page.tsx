import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import CommentsSection from '@/components/blog/CommentsSection';
import GamosaAccent from '@/components/ui/GamosaAccent';
import '@/styles/mdx.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch {
    return { title: 'Post Not Found' };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  // Compile MDX using @mdx-js/mdx (same React instance — no duplicate React issue)
  const compiled = await compile(post.content, { outputFormat: 'function-body' });
  const { default: MDXContent } = await run(String(compiled), {
    ...runtime,
    baseUrl: import.meta.url,
  } as Parameters<typeof run>[1]);

  return (
    <>
      {/* Cover */}
      {post.coverImage && (
        <div className="relative h-[40vh] min-h-[240px] mt-16 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-ahom-brown/50" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--gamosa-red)] transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Meta */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gamosa-red)] mb-3">
          {post.tags?.join(' · ')}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] leading-tight mb-4">
          {post.title}
        </h1>
        <GamosaAccent className="max-w-xs mb-6" />

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mb-10">
          <span className="flex items-center gap-1.5">
            <User size={14} /> {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString('en-IN', {
              day: 'numeric', month: 'long', year: 'numeric'
            })}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime} min read
            </span>
          )}
        </div>

        {/* MDX Content */}
        <div className="prose prose-lg max-w-none">
          <MDXContent />
        </div>

        {/* Comments */}
        <CommentsSection postSlug={slug} />
      </article>
    </>
  );
}
