import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/types';
import BlogCard from '@/components/blog/BlogCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface BlogTeaserProps {
  posts: BlogPost[];
}

export default function BlogTeaser({ posts }: BlogTeaserProps) {
  if (!posts.length) return null;

  return (
    <section className="section-pad bg-[var(--bg-sunken)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="From the Garden"
            title="Stories & Insights"
            subtitle="Explore the rich heritage, cultivation techniques, and culture behind every cup of Assam tea."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {posts.slice(0, 2).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--gamosa-red)] font-medium hover:gap-3 transition-all duration-200"
          >
            Read All Articles
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
