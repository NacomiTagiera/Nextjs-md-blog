import { type IconType } from 'react-icons/lib';

type Props = {
  Icon: IconType;
  name: string;
  href: string;
};

export const FooterLink = ({ Icon, href, name }: Props) => (
  <a href={href} target='_blank' rel='noopener noreferrer' className='hover:animate-jelly'>
    <span className='sr-only'>{name}</span>
    <Icon className='h-9 w-9' aria-hidden />
  </a>
);
