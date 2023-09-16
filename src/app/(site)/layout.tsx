import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';

import { Footer } from '@/components/Layout/Footer';
import { Navbar } from '@/components/Layout/Navbar';

import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://https://kocham-gry.vercel.app/'),
  title: {
    default: 'Kocham Gry',
    template: '%s | Kocham Gry',
  },
  description:
    'Witajcie na moim blogu poświęconym fascynującemu światu gier! Chciałbym podzielić się z Wami moimi ulubionymi grami z różnych kategorii, które z pewnością zapewnią Wam wiele godzin rozrywki i niezapomnianych chwil. Niezależnie od tego, czy jesteście miłośnikami gier akcji, RPG, czy strzelanek, znajdziecie tutaj propozycje, które zachwycą Was swoją jakością i niepowtarzalnym klimatem.',
  applicationName: 'Kocham Gry',
  referrer: 'origin-when-cross-origin',
  keywords: ['Kocham Gry', 'Blog o grach', 'Blog', 'Gry komputerowe', 'Jakub Pawlak'],
  authors: {
    name: 'Jakub Pawlak',
    url: 'https://www.linkedin.com/in/jakub-pawlak-frontend-dev',
  },
  themeColor: '#303030',
  colorScheme: 'dark',
  creator: 'Jakub Pawlak',
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    siteName: 'Kocham Gry',
    url: 'https://kocham-gry.vercel.app',
    locale: 'pl_PL',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 0,
      'max-image-preview': 'large',
      'max-snippet': 0,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
      },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pl'>
      <body className='flex min-h-screen flex-col overflow-x-hidden bg-smoky text-light'>
        <Toaster position='top-right' />
        <Navbar />
        <main className='mx-auto mb-32 max-w-4xl flex-grow px-4 sm:px-6 xl:max-w-6xl xl:px-0'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
