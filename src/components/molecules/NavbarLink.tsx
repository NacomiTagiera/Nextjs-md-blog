import { type UrlObject } from 'url';

import { type Route } from 'next';

import { ActiveLink } from '../atoms/ActiveLink';

type Props<T extends string> = {
  href: Route<T> | UrlObject;
  text: string;
};

export const NavbarLink = <T extends string>({ href, text }: Props<T>) => {
  return (
    <li>
      <ActiveLink
        href={href}
        exact={false}
        className='text-lg font-medium text-smoky-100 hover:text-smoky-50'
        activeClassName='text-smoky-50'
        underlineClassName='bg-seagreen'
      >
        {text}
      </ActiveLink>
    </li>
  );
};
