'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/blog',     label: 'Blog' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[var(--bg-elevated)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-sm bg-[var(--gamosa-red)] flex items-center justify-center">
              <Leaf size={16} className="text-ahom-cream rotate-45" />
            </div>
            <span className="font-serif font-semibold text-xl text-[var(--text-primary)] group-hover:text-[var(--gamosa-red)] transition-colors">
              Ulkam Group
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200',
                  'hover:text-[var(--gamosa-red)] hover:bg-[var(--border-subtle)]',
                  pathname === link.href
                    ? 'text-[var(--gamosa-red)]'
                    : 'text-[var(--text-secondary)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden md:flex" />
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium rounded-sm bg-[var(--gamosa-red)] text-ahom-cream hover:bg-ahom-crimson transition-colors"
            >
              Get a Sample
            </Link>
            {/* Mobile hamburger */}
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-[var(--text-primary)]"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[var(--bg-elevated)] border-b border-[var(--border-default)] shadow-lg md:hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 text-base font-medium rounded-sm transition-all duration-200',
                    pathname === link.href
                      ? 'text-[var(--gamosa-red)] bg-[var(--border-subtle)]'
                      : 'text-[var(--text-primary)] hover:text-[var(--gamosa-red)] hover:bg-[var(--border-subtle)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-sm text-[var(--text-muted)]">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
