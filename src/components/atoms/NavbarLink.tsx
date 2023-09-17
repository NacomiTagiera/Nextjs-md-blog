import { type Route } from 'next';

import { ActiveLink } from './ActiveLink';

type Props<T extends string> = {
  href: Route<T> | URL;
  text: string;
};

export const NavbarLink = <T extends string>({ href, text }: Props<T>) => {
  return (
    <li>
      <ActiveLink
        href={href}
        className='text-lg font-medium text-smoky-100 hover:text-smoky-50'
        activeClassName='text-smoky-50'
        underlineClassName='bg-seagreen'
      >
        {text}
      </ActiveLink>
    </li>
  );
};
