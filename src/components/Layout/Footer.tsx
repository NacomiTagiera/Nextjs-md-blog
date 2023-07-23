import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className='mt-auto'>
      <div className='flex justify-center py-2 text-secondary'>
        <a
          href='https://github.com/NacomiTagiera'
          target='_blank'
          className='transition hover:opacity-80'
        >
          <AiOutlineGithub size={45} />
        </a>
        <a
          href='https://www.facebook.com/kubapawlak123321/'
          target='_blank'
          className='mx-5 transition hover:opacity-80'
        >
          <AiFillFacebook size={45} />
        </a>
        <a
          href='https://www.linkedin.com/in/jakub-pawlak-frontend-dev/'
          target='_blank'
          className='transition hover:opacity-80'
        >
          <AiFillLinkedin size={45} />
        </a>
      </div>
      <p className='px-3 pb-4 text-center text-lg font-semibold md:text-xl'>
        Jakub Pawlak - przyszły frontend developer &copy; Wszelkie prawa
        zastrzeżone
      </p>
    </footer>
  );
}
