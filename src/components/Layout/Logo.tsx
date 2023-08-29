import { GiConsoleController } from 'react-icons/gi';

import CustomLink from '../Common/CustomLink';

export default function Logo() {
  return (
    <CustomLink
      href='/'
      className='flex flex-shrink-0 flex-row justify-center py-5 text-4xl font-bold md:text-5xl'
    >
      <span className='sr-only'>Strona Główna</span>
      <GiConsoleController size={50} className='mr-2' aria-hidden='true' />
      <h1 className='hidden sm:block'>
        <span className='text-seagreen'>KOCHAM </span>
        GRY
      </h1>
    </CustomLink>
  );
}
