import { GiConsoleController } from 'react-icons/gi';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href='/'
      className='flex flex-shrink-0 flex-row justify-center py-5 text-4xl font-bold md:text-5xl'
    >
      <GiConsoleController size={50} className='mr-2' />
      <h1 className='hidden sm:block'>
        <span className='text-secondary'>KOCHAM </span>
        GRY
      </h1>
    </Link>
  );
}
