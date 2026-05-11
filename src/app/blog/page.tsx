import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogList from '@/components/blog/BlogList';
import SectionHeading from '@/components/ui/SectionHeading';
import GamosaAccent from '@/components/ui/GamosaAccent';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stories, insights, and heritage from the tea gardens of Assam — written by the Ulkam Group editorial team.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-ahom-brown text-center px-4">
        <div
          className="h-1 mb-12"
          style={{ background: 'linear-gradient(90deg, #D42B2B, #C9A84C, #D42B2B)' }}
        />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ahom-gold mb-4">
          From the Garden
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ahom-cream">
          Stories & Insights
        </h1>
        <GamosaAccent className="max-w-xs mx-auto mt-4 mb-4" />
        <p className="text-ahom-cream/70 max-w-xl mx-auto">
          Explore the culture, craftsmanship, and heritage behind every cup of Assam tea.
        </p>
      </div>

      {/* Posts */}
      <section className="section-pad bg-[var(--bg-base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${posts.length} Articles`}
            title="Latest Articles"
            align="left"
          />
          <BlogList posts={posts} />
        </div>
      </section>
    </>
  );
}
