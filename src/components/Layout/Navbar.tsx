'use client';

import { useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Link from 'next/link';

import { navLinks } from '@/constants';

import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className='py-7'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Logo />
          <nav className='hidden md:block'>
            <ul className='ml-10 flex items-baseline space-x-6 lg:space-x-9'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-lg font-medium transition hover:text-secondary'
                  >
                    {link.text}
                  </Link>
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

      <div ref={mobileMenuRef}>
        {isMenuOpen && (
          <nav className='md:hidden' id='mobile-menu'>
            <ul className='space-y-8 px-2 pb-3 pt-2'>
              {navLinks.map(({ text, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className='block text-center text-base font-medium transition hover:text-secondary'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
