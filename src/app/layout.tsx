import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import { cn } from '@/lib/cn';

import '../styles/globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kocham Gry',
  description: 'Witaj na moim blogu poświęconym najlepszym grom komputerowym!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl'>
      <body
        className={cn(
          'min-h-screen overflow-x-hidden bg-primary text-white',
          roboto.className
        )}
      >
        <Navbar />
        <main className='mx-auto mb-32 max-w-4xl flex-grow px-4 sm:px-6 xl:max-w-6xl xl:px-0'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
