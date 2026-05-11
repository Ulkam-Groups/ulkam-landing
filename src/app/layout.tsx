import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LaunchBanner from '@/components/ui/LaunchBanner';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ulkam Group — Premium Assam Tea',
    template: '%s | Ulkam Group',
  },
  description:
    'Ulkam Group brings the finest orthodox and CTC teas from the lush gardens of Assam, India. Rooted in heritage, crafted with care.',
  keywords: ['Assam tea', 'orthodox tea', 'CTC tea', 'BOP tea', 'Ulkam Group', 'India tea', 'Charaideo'],
  authors: [{ name: 'Ulkam Group' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ulkamgroup.com',
    siteName: 'Ulkam Group',
    title: 'Ulkam Group — Premium Assam Tea',
    description:
      'Finest orthodox and CTC teas from the heart of Assam, rooted in heritage and crafted with care.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ulkam Group — Premium Assam Tea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ulkam Group — Premium Assam Tea',
    description: 'Finest orthodox and CTC teas from the heart of Assam.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LaunchBanner />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
