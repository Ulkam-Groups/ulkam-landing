import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import GamosaAccent from '@/components/ui/GamosaAccent';

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us',  href: '/about' },
    { label: 'Mission & Vision', href: '/about#mission' },
    { label: 'Our Team',  href: '/about#team' },
    { label: 'Blog',      href: '/blog' },
  ],
  Products: [
    { label: 'BP-BOP Tea',    href: '/products#bp-bop' },
    { label: 'BOPSM Tea',     href: '/products#bopsm' },
    { label: 'CTC Tea',       href: '/products#ctc' },
    { label: 'Spiced Tea',    href: '/products#spiced-tea' },
    { label: 'Blend Tea',     href: '/products#blend-tea' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ahom-brown text-ahom-cream">
      <GamosaAccent variant="thick" className="my-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[var(--gamosa-red)] flex items-center justify-center">
                <Leaf size={16} className="text-ahom-cream rotate-45" />
              </div>
              <span className="font-serif font-semibold text-xl text-ahom-cream">
                Ulkam Group
              </span>
            </Link>
            <p className="text-sm text-ahom-cream/70 leading-relaxed mb-5">
              Rooted in the heritage of the Ahom Kingdom. Bringing the finest teas of Assam to tables across the world.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="text-ahom-cream/60 hover:text-ahom-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ahom-cream/60 hover:text-ahom-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ahom-cream/60 hover:text-ahom-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-ahom-gold mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ahom-cream/70 hover:text-ahom-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-ahom-gold mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-ahom-cream/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-ahom-gold" />
                <span>Ownguri Gaon, Rupai Siding,<br />Assam – 786153, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="shrink-0 text-ahom-gold" />
                <a href="mailto:contact@ulkamgroup.com" className="hover:text-ahom-gold transition-colors">
                  contact@ulkamgroup.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-ahom-gold" />
                <a href="tel:+918431988910" className="hover:text-ahom-gold transition-colors">
                  +91 84319 88910
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <GamosaAccent className="my-0 opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ahom-cream/50">
        <p>© {new Date().getFullYear()} Ulkam Group. All rights reserved.</p>
        <p>Made with love in Assam 🍃</p>
      </div>
    </footer>
  );
}
