'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: ScrollRevealProps) {
  const initialMap = {
    up:    { opacity: 0, y: 40 },
    left:  { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    none:  { opacity: 0 },
  };

  const animateMap = {
    up:    { opacity: 1, y: 0 },
    left:  { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    none:  { opacity: 1 },
  };

  return (
    <motion.div
      className={cn(className)}
      initial={initialMap[direction]}
      whileInView={animateMap[direction]}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
