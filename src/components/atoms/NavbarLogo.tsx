import { GiConsoleController } from 'react-icons/gi';

import Link from 'next/link';

export const NavbarLogo = () => {
  return (
    <Link
      href='/'
      className='flex flex-shrink-0 flex-row justify-center py-5 text-4xl font-bold md:text-5xl'
    >
      <span className='sr-only'>Strona Główna</span>
      <GiConsoleController size={50} className='me-2' aria-hidden='true' />
      <h1 className='hidden uppercase sm:block'>
        <span className='text-seagreen'>Kocham </span>
        Gry
      </h1>
    </Link>
  );
};
