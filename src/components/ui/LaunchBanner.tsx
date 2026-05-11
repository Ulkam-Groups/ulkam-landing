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
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-[60]"
          style={{
            background: 'rgba(192, 57, 43, 0.82)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-center relative">
            {/* Dot + text */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <p className="text-white text-sm font-medium tracking-wide">
                🍃 &nbsp;Ulkam Group is&nbsp;
                <span className="font-bold tracking-wider uppercase">Launching Soon</span>
                &nbsp;— stay tuned for something special from the heart of Assam.
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss banner"
              className="absolute right-4 text-white/70 hover:text-white transition-colors"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
