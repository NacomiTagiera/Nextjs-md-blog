import { AiFillFacebook, AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { GiSmartphone } from 'react-icons/gi';

import { type Route } from 'next';

import { type ContactInfoItem } from '@/components/atoms/ContactInfoItem';
import { type SortingOption } from '@/components/atoms/SortPostsSelect';

export const navLinks: { text: string; href: Route }[] = [
  { text: 'Posty', href: '/posty' },
  { text: 'Kontakt', href: '/kontakt' },
];

export const sortingOptions: { value: SortingOption; label: string }[] = [
  { value: 'najnowsze', label: 'Najnowsze' },
  { value: 'najstarsze', label: 'Najstarsze' },
  { value: 'alfabetycznie', label: 'Alfabetycznie' },
];

export const contactInfo: ContactInfoItem[] = [
  {
    Icon: CiLocationOn,
    text: 'Białystok, Podlaskie',
    type: 'adres',
  },
  {
    Icon: AiOutlineMail,
    text: 'kubapawlak1051@wp.pl',
    type: 'email',
  },
  {
    Icon: GiSmartphone,
    text: '+48 123 456 789',
    type: 'numer telefonu',
  },
];

export const socials = [
  {
    Icon: AiFillLinkedin,
    href: 'https://www.linkedin.com/in/jakub-pawlak-frontend-dev',
    name: 'LinkedIn',
  },
  {
    Icon: AiOutlineGithub,
    href: 'https://github.com/NacomiTagiera',
    name: 'GitHub',
  },
  {
    Icon: AiFillFacebook,
    href: 'https://www.facebook.com/kubapawlak123321',
    name: 'Facebook',
  },
];
