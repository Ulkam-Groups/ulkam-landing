import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GamosaAccent from '@/components/ui/GamosaAccent';

export default function AboutSnippet() {
  return (
    <section className="section-pad bg-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="relative overflow-hidden rounded-sm"
                style={{
                  outline: '2px solid var(--gold)',
                  outlineOffset: '10px',
                }}
              >
                <Image
                  src="https://picsum.photos/seed/assamtea/700/500"
                  alt="Assam tea garden at sunrise"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--gamosa-red)] text-ahom-cream px-4 py-3 rounded-sm shadow-red">
                <p className="text-xs font-semibold tracking-widest uppercase">Since</p>
                <p className="font-serif text-2xl font-bold">1947</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.15}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gamosa-red)] mb-3">
              About Ulkam Group
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--text-primary)] leading-tight mb-4">
              Three Generations of<br />
              <span className="text-gradient-gold">Tea Mastery</span>
            </h2>
            <GamosaAccent className="max-w-xs mb-6" />
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Nestled in the verdant plains of Assam — the birthplace of India's tea industry —
              Ulkam Group has been cultivating, processing, and delivering premium teas for over
              seven decades. Our gardens draw their character from the rich alluvial soil of the
              Brahmaputra valley, a legacy shaped by the ancient Ahom Kingdom.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              From the bold, malty character of our BP-BOP to the warming embrace of our
              Spiced Masala blend, every cup tells a story of land, lineage, and craft.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[var(--gamosa-red)] font-medium hover:gap-3 transition-all duration-200"
            >
              Discover Our Heritage
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
