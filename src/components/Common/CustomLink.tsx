import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  underline?: boolean;
  underlineColor?: string;
}

export default function CustomLink({
  children,
  className = '',
  href,
  underline,
  underlineColor = 'white',
  ...rest
}: Props) {
  const isInternalLink = href.startsWith('/') || href.startsWith('#');
  const commonLinkStyles = `transition duration-300 hover:text-white ${className}`;

  if (isInternalLink) {
    return (
      <Link
        href={href}
        className={`max-w-fit text-slate-200 ${commonLinkStyles} ${
          underline ? 'group' : ''
        }`}
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
      href={href}
      className={commonLinkStyles}
      {...rest}
    >
      {children}
    </a>
  );
}
