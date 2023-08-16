'use client';

import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { usePathname } from 'next/navigation';

import { navLinks } from '@/constants';

import CustomLink from '../Common/CustomLink';

import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className='py-7 duration-300 animate-in slide-in-from-top'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Logo />
          <nav role='main' className='hidden md:block'>
            <ul className='ml-10 flex items-baseline space-x-6 lg:space-x-9'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <CustomLink
                    href={link.href}
                    className='text-lg font-medium'
                    underline
                    underlineColor='secondary'
                  >
                    {link.text}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type='button'
            aria-controls='mobile-menu'
            aria-label='Menu'
            aria-expanded={isMenuOpen}
            className='mr-2 md:hidden'
            onClick={handleToggleMenu}
          >
            <span className='sr-only'>Open menu</span>
            <AiOutlineMenu size={30} className='transition hover:opacity-75' />
          </button>
        </div>
      </div>

      <div>
        {isMenuOpen && (
          <nav className='md:hidden' id='mobile-menu'>
            <ul className='space-y-8 px-2 pb-3 pt-2'>
              {navLinks.map(({ text, href }) => (
                <li key={href}>
                  <CustomLink
                    href={href}
                    className='mx-auto block text-base font-medium'
                    underline
                    underlineColor='secondary'
                  >
                    {text}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
