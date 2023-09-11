import { socials } from '@/utils/constants';

export default function Footer() {
  return (
    <footer className='mx-auto max-w-6xl text-smoky-200'>
      <hr className='border-smoky-200' />
      <div className='px-4 pb-10 pt-8 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex items-center justify-center space-x-6 md:order-2'>
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:animate-jelly'
            >
              <span className='sr-only'>{social.name}</span>
              <social.icon className='h-9 w-9' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-center text-base uppercase md:order-1 md:mt-0 md:text-lg lg:text-left'>
          Jakub Pawlak &copy; 2023
        </p>
      </div>
    </footer>
  );
}
