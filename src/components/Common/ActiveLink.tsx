'use client';

import { type Route } from 'next';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';

type Props<T extends string> = {
  href: Route<T> | URL;
  children?: React.ReactNode;
  className?: string;
  activeClassName?: string;
} & LinkProps<T>;

export default function ActiveLink<T extends string>({
  children,
  activeClassName,
  className,
  href,
}: Props<T>) {
  const pathname = usePathname();
  const isActive = pathname === (typeof href === 'object' ? href.pathname : href);

  return (
    <Link href={href} className={cn(className, isActive && activeClassName)}>
      {children}
    </Link>
  );
}
