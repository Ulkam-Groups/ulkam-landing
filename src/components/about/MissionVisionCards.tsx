import { Target, Eye } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function MissionVisionCards() {
  return (
    <section id="mission" className="section-pad bg-ahom-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Purpose"
            title="Mission & Vision"
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <ScrollReveal delay={0.1}>
            <div className="group p-8 bg-ahom-brown-mid border border-ahom-gold/20 rounded-sm hover:border-ahom-gold/50 hover:shadow-gold transition-all duration-300">
              <div className="w-12 h-12 rounded-sm bg-[var(--gamosa-red)]/20 border border-[var(--gamosa-red)]/40 flex items-center justify-center mb-6">
                <Target size={22} className="text-[var(--gamosa-red)]" />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ahom-gold mb-3">
                Mission
              </p>
              <h3 className="font-serif text-2xl font-semibold text-ahom-cream mb-4">
                To Bring Assam to Every Table
              </h3>
              <p className="text-ahom-cream/70 leading-relaxed">
                Our mission is to deliver the authentic, uncompromised flavours of Assam's tea estates
                directly to households, HoReCa partners, and export buyers — preserving traditional
                cultivation methods while meeting the standards of today's discerning consumer.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal delay={0.2}>
            <div className="group p-8 bg-ahom-brown-mid border border-ahom-gold/20 rounded-sm hover:border-ahom-gold/50 hover:shadow-gold transition-all duration-300">
              <div className="w-12 h-12 rounded-sm bg-ahom-gold/20 border border-ahom-gold/40 flex items-center justify-center mb-6">
                <Eye size={22} className="text-ahom-gold" />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-ahom-gold mb-3">
                Vision
              </p>
              <h3 className="font-serif text-2xl font-semibold text-ahom-cream mb-4">
                Ahom Heritage, Global Stage
              </h3>
              <p className="text-ahom-cream/70 leading-relaxed">
                We envision Ulkam Group as the foremost ambassador of Assam's tea culture on the world
                stage — a brand synonymous with the Ahom Kingdom's legacy of excellence, where every
                garden-to-cup journey is traceable, sustainable, and steeped in centuries of pride.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
