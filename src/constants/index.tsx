import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

export const navLinks = [
  { text: 'Strona główna', href: '/' },
  { text: 'Posty', href: '/posty' },
  { text: 'Kontakt', href: '/kontakt' },
];

export const socials = [
  {
    icon: <AiOutlineGithub size={45} />,
    href: 'https://github.com/NacomiTagiera',
  },
  {
    icon: <AiFillLinkedin size={45} />,
    href: 'https://www.linkedin.com/in/jakub-pawlak-frontend-dev',
  },
  {
    icon: <AiFillFacebook size={45} />,
    href: 'https://www.facebook.com/kubapawlak123321',
  },
];
