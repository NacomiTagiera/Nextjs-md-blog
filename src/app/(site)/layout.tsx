import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import { cn } from '@/lib/cn';

import '@/styles/globals.css';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Kocham Gry',
    template: '%s | Kocham Gry',
  },
  description: 'Witaj na moim blogu poświęconym najlepszym grom komputerowym!',
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
    title: {
      default: 'Kocham Gry',
      template: `%s | Kocham Gry`,
    },
    description: 'Witaj na moim blogu poświęconym najlepszym grom komputerowym!',
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
      <body
        className={cn(
          'flex min-h-screen flex-col overflow-x-hidden bg-smoky text-light',
          robotoFlex.className
        )}
      >
        <Navbar />
        <main className='mx-auto mb-32 max-w-4xl flex-grow px-4 sm:px-6 xl:max-w-6xl xl:px-0'>
          {children}
        </main>
        <Footer />
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
