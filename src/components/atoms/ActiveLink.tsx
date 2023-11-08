'use client';

import { type Route } from 'next';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';

type Props<T extends string> = {
  href: Route<T> | URL;
  children?: React.ReactNode;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  underlineClassName?: string;
} & LinkProps<T>;

export const ActiveLink = <T extends string>({
  href,
  children,
  exact = true,
  activeClassName,
  className,
  underlineClassName,
  ...rest
}: Props<T>) => {
  const pathname = usePathname();
  const url = typeof href === 'object' ? href.pathname : href;
  const query = typeof href === 'object' ? href.query : {};
  const isActive = exact ? pathname === url : pathname.includes(url);

  return (
    <Link
      href={{
        pathname: url,
        query,
      }}
      className={cn('group max-w-fit', className, activeClassName && isActive)}
      {...rest}
    >
      {children}
      <span
        className={cn(
          'block h-0.5 max-w-0 transition-all duration-300 group-hover:max-w-full',
          underlineClassName,
          {
            'max-w-full': isActive,
          }
        )}
      ></span>
    </Link>
  );
};
