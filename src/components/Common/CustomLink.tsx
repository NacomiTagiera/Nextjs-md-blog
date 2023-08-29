import Link, { LinkProps } from 'next/link';

import { cn } from '@/lib/cn';

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  underlineColor?: 'light' | 'seagreen';
}

export default function CustomLink({
  children,
  className,
  href,
  underline,
  underlineColor = 'light',
  ...rest
}: Props) {
  const hrefStr = href.toString();
  const isInternalLink = hrefStr.startsWith('/') || hrefStr.startsWith('#');

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={cn('text-smoky-100', className, {
          'group max-w-fit': underline,
        })}
        {...rest}
      >
        {children}
        {underline && (
          <span
            className={cn(
              'block h-0.5 max-w-0 transition-all duration-300 group-hover:max-w-full',
              underlineColor === 'light' ? 'bg-light' : 'bg-seagreen'
            )}
          ></span>
        )}
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={hrefStr}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
