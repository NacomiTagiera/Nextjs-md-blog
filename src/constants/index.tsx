import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

export const POPULAR_POSTS_COUNT = 3;

export const navLinks = [
  { text: 'Strona główna', href: '/' },
  { text: 'Posty', href: '/posty' },
  { text: 'Kontakt', href: '/kontakt' },
];

export const socials = [
  {
    icon: AiOutlineGithub,
    name: 'GitHub',
    href: 'https://github.com/NacomiTagiera',
  },
  {
    icon: AiFillLinkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jakub-pawlak-frontend-dev',
  },
  {
    icon: AiFillFacebook,
    name: 'Facebook',
    href: 'https://www.facebook.com/kubapawlak123321',
  },
];
