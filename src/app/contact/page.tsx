import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';
import GamosaAccent from '@/components/ui/GamosaAccent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Ulkam Group for bulk tea orders, wholesale enquiries, or general information about our Assam tea products.',
};

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['Ownguri Gaon, Rupai Siding', 'Assam – 786153, India'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['kamalika@ulkamgroup.com', 'contact@ulkamgroup.com'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 84319 88910'],
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM IST', 'Sunday: Closed'],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-ahom-brown text-center px-4">
        <div
          className="h-1 mb-12"
          style={{ background: 'linear-gradient(90deg, #D42B2B, #C9A84C, #D42B2B)' }}
        />
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ahom-gold mb-4">
          Get in Touch
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ahom-cream">
          Contact Ulkam Group
        </h1>
        <GamosaAccent className="max-w-xs mx-auto mt-4 mb-4" />
        <p className="text-ahom-cream/70 max-w-xl mx-auto">
          Whether you're a bulk buyer, retailer, or tea enthusiast — we'd love to hear from you.
        </p>
      </div>

      <section className="section-pad bg-[var(--bg-base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="lg:col-span-1">
              <SectionHeading
                eyebrow="Our Office"
                title="Find Us"
                align="left"
              />
              <div className="space-y-6">
                {INFO_ITEMS.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-sm bg-[var(--bg-elevated)] border border-[var(--border-default)] flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-[var(--gamosa-red)]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--gold)] mb-1">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} className="text-sm text-[var(--text-secondary)]">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Send a Message"
                title="Drop Us a Line"
                align="left"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
