import { socials } from '@/constants';

import CustomLink from '../Common/CustomLink';

export default function Footer() {
  return (
    <footer className='mx-auto max-w-6xl text-slate-300'>
      <hr className='border-slate-300' />
      <div className='px-4 pb-10 pt-8 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex items-center justify-center space-x-6 md:order-2'>
          {socials.map((social) => (
            <CustomLink key={social.href} href={social.href}>
              <span className='sr-only'>{social.name}</span>
              <social.icon className='h-8 w-8' aria-hidden='true' />
            </CustomLink>
          ))}
        </div>
        <p className='mt-8 text-center text-base uppercase md:order-1 md:mt-0 lg:text-left'>
          Jakub Pawlak &copy; 2023
        </p>
      </div>
    </footer>
  );
}
