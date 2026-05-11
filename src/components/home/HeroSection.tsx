'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import TeaLeafCanvas from '@/components/ui/TeaLeafCanvas';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero-eyebrow',  { y: 24, opacity: 0, duration: 0.6, delay: 0.3 })
      .from('.hero-headline', { y: 50, opacity: 0, duration: 0.9, stagger: 0.12 }, '-=0.3')
      .from('.hero-sub',      { y: 24, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.hero-cta',      { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
      .from('.hero-scroll',   { opacity: 0, duration: 0.5 }, '-=0.1');
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-ahom-brown"
    >
      {/* Particle background */}
      <TeaLeafCanvas />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-hero-vignette pointer-events-none" />
      <div className="absolute inset-0 bg-ahom-brown/40 pointer-events-none" />

      {/* Gamosa-inspired top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ background: 'linear-gradient(90deg, #D42B2B, #C9A84C, #D42B2B)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="hero-eyebrow text-xs font-semibold tracking-[0.3em] uppercase text-ahom-gold mb-6">
          Rooted in the Ahom Kingdom · Est. Assam, India
        </p>

        <h1 className="font-serif font-semibold leading-[1.1] mb-6">
          <span className="hero-headline block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ahom-cream">
            From the Heart
          </span>
          <span className="hero-headline block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-gold">
            of Assam
          </span>
        </h1>

        <p className="hero-sub text-base sm:text-lg md:text-xl text-ahom-cream/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Premium Orthodox &amp; CTC Teas — cultivated across the lush Brahmaputra valley for generations,
          guided by the timeless heritage of the Ahom Kingdom.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/products" variant="primary" size="lg">
            Explore Our Teas
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ahom-cream/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce-slow" />
      </div>
    </section>
  );
}
