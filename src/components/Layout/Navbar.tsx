import { navLinks } from '@/utils/constants';

import { ActiveLink } from '../Common/ActiveLink';

import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header className='py-7 duration-300 animate-in slide-in-from-top'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Logo />
          <nav className='ml-10'>
            <ul className='flex items-baseline space-x-6 lg:space-x-9'>
              {navLinks.map(({ text, href }) => (
                <li key={href}>
                  <ActiveLink
                    href={href}
                    className='text-lg font-medium text-smoky-100 hover:text-smoky-50'
                    activeClassName='text-smoky-50'
                    underlineClassName='bg-seagreen'
                  >
                    {text}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
