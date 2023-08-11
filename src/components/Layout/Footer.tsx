import { socials } from '@/constants';

export default function Footer() {
  return (
    <footer className='mt-auto'>
      <div className='flex justify-center gap-2 py-2 text-secondary'>
        {socials.map(({ icon, href }) => (
          <a
            key={href}
            href={href}
            target='_blank'
            rel='noreferrer noopener'
            className='transition hover:opacity-80'
          >
            {icon}
          </a>
        ))}
      </div>
      <p className='px-3 pb-4 text-center text-lg font-medium md:text-xl'>
        Jakub Pawlak - przyszły frontend developer &copy; Wszelkie prawa
        zastrzeżone
      </p>
    </footer>
  );
}
