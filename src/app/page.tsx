import HeroSection from '@/components/home/HeroSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import ProductsTeaser from '@/components/home/ProductsTeaser';
import BlogTeaser from '@/components/home/BlogTeaser';
import { getAllPosts } from '@/lib/blog';
import GamosaAccent from '@/components/ui/GamosaAccent';
import Button from '@/components/ui/Button';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ProductsTeaser />
      <BlogTeaser posts={posts} />

      {/* CTA Band */}
      <section className="py-20 bg-ahom-brown text-center px-4">
        <GamosaAccent variant="thick" className="mb-10 opacity-60" />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ahom-gold mb-4">
          Bulk & B2B Enquiries
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ahom-cream mb-4">
          Ready to Source Premium Assam Tea?
        </h2>
        <p className="text-ahom-cream/70 max-w-xl mx-auto mb-8">
          Whether you're a distributor, retailer, or HoReCa partner — Ulkam Group has the grades,
          volumes, and quality certifications you need.
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          Get in Touch
        </Button>
        <GamosaAccent variant="thick" className="mt-10 opacity-60" />
      </section>
    </>
  );
}
