import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GamosaAccent from '@/components/ui/GamosaAccent';

const TIMELINE = [
  {
    year: '1990',
    event: 'Founded in Rupai, Tinsukia',
    detail: 'Roots laid in tea garden cultivation — hand-plucking fresh leaves at dawn, guided by a reverence for the land and its bold, unmistakably Assamese character.',
  },
  {
    year: '2026',
    event: 'Charaideo — Born to Export',
    detail: 'A return to roots. Charaideo was created to carry the spirit of Assam to modern tea lovers across the world — authentic, meaningful, and deeply connected to its origin.',
  },
];

export default function FoundingStory() {
  return (
    <section className="section-pad bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <ScrollReveal direction="left">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ outline: '2px solid var(--gold)', outlineOffset: '10px' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=700&h=520&fit=crop&q=80"
                alt="Ulkam Group founding family"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </ScrollReveal>

          {/* Story + Timeline */}
          <div>
            <ScrollReveal direction="right">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--gamosa-red)] mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--text-primary)] leading-tight mb-4">
                Rooted in Assam. Inspired by Heritage.
              </h2>
              <GamosaAccent className="max-w-xs mb-6" />

              {/* Opening */}
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Charaideo was born from a deep emotional connection to Assam — its land, its culture, and its timeless tea legacy.
              </p>

              {/* Founder's voice — highlighted */}
              <blockquote className="border-l-4 border-[var(--gamosa-red)] pl-5 mb-6 space-y-4">
                <p className="text-[var(--text-primary)] leading-relaxed italic">
                  "Growing up in a family of tea planters, tea was never simply a profession for us; it was a way of life. Some of my earliest memories are woven into the tea gardens of Assam — walking through endless green estates, visiting tea factories with my father, and witnessing the journey of tea from leaf to cup. Those experiences created a bond with the land that only grew stronger with time."
                </p>
                <p className="text-[var(--text-primary)] leading-relaxed italic">
                  "No matter where life led me, Assam always remained home. While building a corporate career, there was always a quiet dream within me — to return to my roots and create something that would honour the heritage I was raised with. That dream eventually became Charaideo."
                </p>
                <p className="text-[var(--text-primary)] leading-relaxed italic">
                  "Leaving behind the corporate world was more than a career shift; it was a conscious decision to come back to the soil, stories, and traditions that shaped my identity. Through Charaideo, I wanted to carry the spirit of Assam forward — blending heritage with contemporary craftsmanship to create teas that feel authentic, meaningful, and deeply connected to their origin."
                </p>
              </blockquote>

            </ScrollReveal>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-[var(--gold)] space-y-8">
              {TIMELINE.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-[calc(1.5rem+1px)] w-3 h-3 rounded-full bg-[var(--gamosa-red)] border-2 border-[var(--gold)]" />
                    <p className="text-xs font-bold tracking-widest uppercase text-[var(--gold)] mb-0.5">
                      {item.year}
                    </p>
                    <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] mb-1">
                      {item.event}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
