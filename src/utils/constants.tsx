import { AiFillFacebook, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';

import { type Route } from 'next';

export const POPULAR_POSTS_COUNT = 3;

export const navLinks: { text: string; href: Route }[] = [
  { text: 'Posty', href: '/posty' },
  { text: 'Kontakt', href: '/kontakt' },
];

export const socials = [
  {
    icon: AiFillLinkedin,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jakub-pawlak-frontend-dev',
  },
  {
    icon: AiOutlineGithub,
    name: 'GitHub',
    href: 'https://github.com/NacomiTagiera',
  },
  {
    icon: AiFillFacebook,
    name: 'Facebook',
    href: 'https://www.facebook.com/kubapawlak123321',
  },
];
