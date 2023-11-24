import { type Route } from 'next';

import { convertText } from '@/utils/convertText';

import { ActiveLink } from '../atoms/ActiveLink';

type Props<T extends string> = {
  href: Route<T>;
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
        data-cy={`navbar-link-${text}`}
      >
        {convertText(text, { capitalize: true })}
      </ActiveLink>
    </li>
  );
};
