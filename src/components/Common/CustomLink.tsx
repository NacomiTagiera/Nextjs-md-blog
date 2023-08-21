import Link, { LinkProps } from 'next/link';

import { cn } from '@/lib/cn';

interface Props extends LinkProps {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
  underlineColor?: string;
}

export default function CustomLink({
  children,
  className,
  href,
  underline,
  underlineColor = 'white',
  ...rest
}: Props) {
  const hrefStr = href.toString();
  const isInternalLink = hrefStr.startsWith('/') || hrefStr.startsWith('#');
  const commonLinkStyles = cn(
    'transition duration-300 hover:text-white',
    className
  );

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={cn('text-slate-200', commonLinkStyles, {
          'group max-w-fit': underline,
        })}
        {...rest}
      >
        {children}
        {underline && (
          <span
            className={`block h-0.5 max-w-0 bg-${underlineColor} transition-all duration-300 group-hover:max-w-full`}
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
      className={commonLinkStyles}
      {...rest}
    >
      {children}
    </a>
  );
}
