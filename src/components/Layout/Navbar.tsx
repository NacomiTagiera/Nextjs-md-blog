import { navLinks } from '@/utils/constants';

import ActiveLink from '../Common/ActiveLink';

import Logo from './Logo';

export default function Navbar() {
  return (
    <header className='py-7 duration-300 animate-in slide-in-from-top'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Logo />
          <nav className='ml-10'>
            <ul className='flex items-baseline space-x-6 lg:space-x-9'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <ActiveLink
                    href={link.href}
                    className='group max-w-fit text-lg font-medium text-smoky-100 hover:text-smoky-50'
                    activeClassName='text-smoky-50 underline decoration-seagreen decoration-2 underline-offset-8'
                  >
                    {link.text}
                    <span className='block h-0.5 max-w-0 bg-seagreen transition-all duration-300 group-hover:max-w-full'></span>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
