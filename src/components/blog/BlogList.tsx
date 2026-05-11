import type { BlogPost } from '@/lib/types';
import BlogCard from './BlogCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (!posts.length) {
    return (
      <p className="text-center text-[var(--text-muted)] py-16">
        No articles yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <ScrollReveal key={post.slug} delay={i * 0.08}>
          <BlogCard post={post} />
        </ScrollReveal>
      ))}
    </div>
  );
}
