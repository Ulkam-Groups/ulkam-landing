'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LaunchBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          style={{
            background: 'linear-gradient(135deg, #1a0e06 0%, #2C1A0E 50%, #1a0e06 100%)',
          }}
        >
          {/* Gamosa accent — top */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5"
            style={{ background: 'linear-gradient(90deg, #D42B2B, #C9A84C, #D42B2B)' }}
          />

          {/* Dismiss button */}
          <button
            onClick={() => setVisible(false)}
            aria-label="Dismiss banner"
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* Content */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Pulsing dot */}
            <div className="flex items-center justify-center gap-2.5 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ahom-gold opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ahom-gold" />
              </span>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ahom-gold">
                Coming Soon
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-semibold leading-[1.1] mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ahom-cream mb-2">
                Ulkam Group is
              </span>
              <span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ background: 'linear-gradient(90deg, #C9A84C, #E0C06E, #C9A84C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                Launching Soon
              </span>
            </h1>

            {/* Divider */}
            <div
              className="w-24 h-0.5 mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
            />

            {/* Subtext */}
            <p className="text-ahom-cream/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
              Stay tuned for something special from the heart of Assam.
            </p>

            {/* CTA */}
            <button
              onClick={() => setVisible(false)}
              className="inline-flex items-center gap-2 px-8 py-3 border border-ahom-gold/60 text-ahom-gold font-medium tracking-wide text-sm hover:bg-ahom-gold hover:text-ahom-brown transition-all duration-300 rounded-sm"
            >
              Enter the Site
            </button>
          </div>

          {/* Gamosa accent — bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1.5"
            style={{ background: 'linear-gradient(90deg, #D42B2B, #C9A84C, #D42B2B)' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
