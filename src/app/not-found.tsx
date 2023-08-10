import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nie znaleziono strony',
};

export default function NotFound() {
  return (
    <section className='container mx-auto my-8 flex h-full flex-col items-center justify-center p-16'>
      <div className='max-w-md text-center'>
        <h2 className='text-9xl font-extrabold text-secondary'>
          <span className='sr-only'>Error</span>404
        </h2>
        <p className='my-8 text-2xl font-semibold md:text-3xl'>
          Nie udało nam się znaleźć strony, której szukasz
        </p>
        <Link
          href='/'
          className='rounded-lg bg-secondary px-8 py-3 text-lg font-semibold'
        >
          Strona główna
        </Link>
      </div>
    </section>
  );
}
