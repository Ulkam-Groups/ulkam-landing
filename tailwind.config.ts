import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif:   ['var(--font-cormorant)', ...defaultTheme.fontFamily.serif],
        sans:    ['var(--font-inter)',      ...defaultTheme.fontFamily.sans],
        display: ['var(--font-cormorant)', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        cream:        'var(--cream)',
        'dark-brown': 'var(--dark-brown)',
        'gamosa-red': 'var(--gamosa-red)',
        gold:         'var(--gold)',
        ahom: {
          cream:        '#FDF8F0',
          ivory:        '#F5EBD9',
          red:          '#D42B2B',
          crimson:      '#B01E1E',
          gold:         '#C9A84C',
          'gold-light': '#E0C06E',
          brown:        '#2C1A0E',
          'brown-mid':  '#4A2E1A',
          'brown-light':'#7A5230',
          offwhite:     '#FFFFFF',
        },
      },
      boxShadow: {
        gold:        '0 0 30px rgba(201,168,76,0.25), 0 4px 16px rgba(201,168,76,0.15)',
        red:         '0 0 30px rgba(192,57,43,0.20), 0 4px 12px rgba(192,57,43,0.12)',
        card:        '0 4px 24px rgba(44,26,14,0.12), 0 1px 4px rgba(44,26,14,0.08)',
        'card-hover':'0 8px 40px rgba(44,26,14,0.18), 0 2px 8px rgba(44,26,14,0.10)',
      },
      animation: {
        'float-leaf':   'float-leaf 8s ease-in-out infinite',
        shimmer:        'shimmer 2.5s ease-in-out infinite',
        'fade-up':      'fade-up 0.6s ease-out forwards',
        'gamosa-glow':  'gamosa-glow 3s ease-in-out infinite',
        'bounce-slow':  'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        'float-leaf': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%':       { transform: 'translateY(-24px) rotate(3deg)' },
        },
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to:   { transform: 'translateX(100%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'gamosa-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(192,57,43,0.3)' },
          '50%':       { boxShadow: '0 0 20px rgba(192,57,43,0.6), 0 0 8px rgba(201,168,76,0.3)' },
        },
      },
      backgroundImage: {
        'gamosa-gradient': 'linear-gradient(90deg, transparent, #C0392B 20%, #C9A84C 50%, #C0392B 80%, transparent)',
        'hero-vignette':   'radial-gradient(ellipse at center bottom, rgba(44,26,14,0.85) 0%, rgba(44,26,14,0.3) 60%, transparent 100%)',
        'gold-sheen':      'linear-gradient(135deg, #C9A84C, #E0C06E, #C9A84C)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
