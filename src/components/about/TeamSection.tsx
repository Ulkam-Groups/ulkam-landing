import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const TEAM = [
  {
    name: 'Kamalika Biswas',
    role: 'CEO & Founder',
    image: 'https://picsum.photos/seed/kamalika/400/400',
    bio: 'Founder of Ulkam Group, driving the vision to bring the finest Assam teas to the world.',
    linkedin: 'https://www.linkedin.com/in/kamalika-biswas/',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-pad bg-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The People"
            title="Meet the Founder"
            subtitle="The passionate individual behind every cup of Ulkam tea."
          />
        </ScrollReveal>

        <div className="flex justify-center">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <div className="text-center group max-w-xs">
                <div className="relative w-32 h-32 mx-auto mb-5 overflow-hidden rounded-full border-2 border-[var(--gold)] group-hover:border-[var(--gamosa-red)] transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium tracking-wide text-[var(--gamosa-red)] mt-1 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--gold)] border border-[var(--gold)] px-4 py-1.5 rounded-sm hover:bg-[var(--gold)] hover:text-ahom-brown transition-all duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
