import { GiConsoleController } from 'react-icons/gi';

import CustomLink from '../Common/CustomLink';

export default function Logo() {
  return (
    <CustomLink
      href='/'
      className='flex flex-shrink-0 flex-row justify-center py-5 text-4xl font-bold md:text-5xl'
    >
      <GiConsoleController size={50} className='mr-2' />
      <h1 className='hidden sm:block'>
        <span className='text-secondary'>KOCHAM </span>
        GRY
      </h1>
    </CustomLink>
  );
}
