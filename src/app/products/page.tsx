import type { Metadata } from 'next';
import { PRODUCTS } from '@/lib/products';
import ProductGrid from '@/components/products/ProductGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import GamosaAccent from '@/components/ui/GamosaAccent';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Explore Ulkam Group\'s premium Assam tea portfolio — BP-BOP, BOPSM, CTC, Spiced Masala, and Signature Blend teas.',
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-16 bg-ahom-brown text-center px-4">
        <div
          className="h-1 mb-12"
          style={{ background: 'linear-gradient(90deg, #D42B2B, #C9A84C, #D42B2B)' }}
        />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ahom-gold mb-4">
          Garden to Cup
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ahom-cream">
          Our Tea Portfolio
        </h1>
        <GamosaAccent className="max-w-xs mx-auto mt-4 mb-4" />
        <p className="text-ahom-cream/70 max-w-xl mx-auto">
          Five exceptional grades, one uncompromising standard — the finest teas of Assam's Brahmaputra valley.
        </p>
      </div>

      {/* Products */}
      <section className="section-pad bg-[var(--bg-base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${PRODUCTS.length} Varieties`}
            title="Choose Your Brew"
            subtitle="Each grade has been carefully selected and processed to preserve its unique character."
            align="left"
          />
          <ProductGrid products={PRODUCTS} />
        </div>
      </section>

      {/* Bulk enquiry */}
      <section className="py-16 bg-[var(--bg-elevated)] text-center px-4">
        <p className="text-sm text-[var(--text-muted)] mb-2">Looking for bulk quantities?</p>
        <a
          href="/contact"
          className="text-[var(--gamosa-red)] font-semibold hover:underline"
        >
          Contact us for wholesale pricing →
        </a>
      </section>
    </>
  );
}
