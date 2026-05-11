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
                  src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=700&h=500&fit=crop&q=80"
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
                <p className="font-serif text-2xl font-bold">1990</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right" delay={0.15}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gamosa-red)] mb-3">
              About Ulkam Group
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--text-primary)] leading-tight mb-4">
              From Assam,<br />
              <span className="text-gradient-gold">With Purpose</span>
            </h2>
            <GamosaAccent className="max-w-xs mb-6" />
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Charaideo began with a vision to celebrate the true essence of Assamese tea through
              quality, authenticity, and thoughtful craftsmanship. Sourced from the lush
              tea-growing regions of Assam, our teas are carefully selected to deliver rich
              flavour, depth, and comfort in every cup.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-8">
              Rooted in heritage and driven by passion, Charaideo is our promise to serve the
              finest expressions of Assam tea — one cup at a time.
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
