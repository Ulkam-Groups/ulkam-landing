import Image from 'next/image';

export default function HeritageBanner() {
  return (
    <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      <Image
        src="https://picsum.photos/seed/ahomheritage/1600/600"
        alt="Ahom Kingdom heritage of Assam"
        fill
        className="object-cover"
        unoptimized
        priority
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-ahom-brown/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ahom-brown/30 via-transparent to-ahom-brown/50" />

      {/* Gamosa accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, #D42B2B, #C9A84C, #D42B2B)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ahom-gold mb-4">
          Our Heritage
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-ahom-cream leading-tight">
          Rooted in the Ahom Kingdom
        </h1>
        <p className="mt-4 text-ahom-cream/70 max-w-xl mx-auto">
          600 years of Ahom legacy, three generations of tea mastery — this is the story of Ulkam Group.
        </p>
      </div>

      {/* Bottom gamosa */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #D42B2B 20%, #C9A84C 50%, #D42B2B 80%, transparent)' }}
      />
    </section>
  );
}
