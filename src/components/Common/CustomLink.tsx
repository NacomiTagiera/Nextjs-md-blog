'use client';

import { type UrlObject } from 'url';

import { type Route } from 'next';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';

type Props<T extends string> = {
  children: React.ReactNode;
  href: Route | UrlObject | LinkProps<T>['href'];
  className?: string;
  activeClassName?: string;
};

export default function CustomLink({ children, activeClassName, className, href }: Props<string>) {
  const pathname = usePathname();
  const isActive = pathname === (typeof href === 'string' ? href : href.pathname);

  return (
    <Link href={href} className={cn(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
}
