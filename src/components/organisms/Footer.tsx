import { socials } from '@/utils/constants';

import { FooterLink } from '../atoms/FooterLink';

export const Footer = () => {
  return (
    <footer className='text-smoky-200'>
      <div className='mx-auto mt-8 max-w-6xl'>
        <hr className='border-smoky-200' />
        <div className='px-4 pb-10 pt-8 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex items-center justify-center space-x-6 md:order-2'>
            {socials.map((social) => (
              <FooterLink key={social.name} {...social} />
            ))}
          </div>
          <p className='mt-8 text-center text-base uppercase md:order-1 md:mt-0 md:text-lg lg:text-left'>
            Jakub Pawlak &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
