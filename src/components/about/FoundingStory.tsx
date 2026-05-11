import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GamosaAccent from '@/components/ui/GamosaAccent';

const TIMELINE = [
  { year: '1947', event: 'Founded in Dibrugarh', detail: 'Ulkam Group was established by Ratneswar Bora, a tea-garden worker who saved to purchase his first plot along the Brahmaputra plains.' },
  { year: '1972', event: 'First Orthodox Export', detail: 'The second generation expanded operations, shipping BP-BOP grade teas to buyers in Kolkata, marking Ulkam\'s debut in export markets.' },
  { year: '1998', event: 'CTC Processing Plant', detail: 'A modern CTC processing facility was commissioned, enabling large-scale production while retaining the hand-crafted quality of orthodox grades.' },
  { year: '2015', event: 'Spiced & Blend Range', detail: 'Third-generation leadership introduced the Spiced Masala and Signature Blend lines, expanding into the retail and HoReCa segments.' },
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
                src="https://picsum.photos/seed/teamassam/700/520"
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
                A Legacy Brewed Over Generations
              </h2>
              <GamosaAccent className="max-w-xs mb-6" />
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                What began as a single tea plot in Dibrugarh has grown into one of Assam's most trusted
                tea producers. Through three generations, Ulkam Group has stayed true to the land —
                honouring the Ahom Kingdom's reverence for nature while embracing the craftsmanship
                demanded by modern palates.
              </p>
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
