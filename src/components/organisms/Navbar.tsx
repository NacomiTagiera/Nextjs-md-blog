import { navLinks } from '@/utils/constants';

import { NavbarLink } from '../atoms/NavbarLink';
import { NavbarLogo } from '../atoms/NavbarLogo';

export const Navbar = () => {
  return (
    <header className='py-7 duration-300 animate-in slide-in-from-top'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <NavbarLogo />
          <nav className='ml-10'>
            <ul className='flex items-baseline space-x-6 lg:space-x-9'>
              {navLinks.map((link) => (
                <NavbarLink key={link.href} {...link} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
