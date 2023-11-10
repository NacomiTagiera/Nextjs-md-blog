import {
  AiFillFacebook,
  AiFillHome,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineGithub,
  AiOutlineMail,
} from 'react-icons/ai';

import { type Route } from 'next';

import { type ContactInfoItem } from '@/components/atoms/ContactInfoItem';
import { type SortingOption } from '@/types';

export const navLinks: { text: string; href: Route }[] = [
  { text: 'Posty', href: '/posty' },
  { text: 'Kontakt', href: '/kontakt' },
];

export const sortingOptions: { value: SortingOption; label: string }[] = [
  { value: 'najnowsze', label: 'Od najnowszych' },
  { value: 'najstarsze', label: 'Od najstarszych' },
  { value: 'alfabetycznie', label: 'Alfabetycznie' },
];

export const contactInfo: ContactInfoItem[] = [
  {
    Icon: AiFillHome,
    text: 'Białystok, Polska',
    type: 'lokalizacja',
  },
  {
    Icon: AiFillPhone,
    text: '123 456 789',
    type: 'telefon',
  },
  {
    Icon: AiOutlineMail,
    text: 'kpawlak02@wp.pl',
    type: 'e-mail',
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
