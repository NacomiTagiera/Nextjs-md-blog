import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, name, ...rest }, ref) => (
    <textarea
      ref={ref}
      id={name}
      name={name}
      className={cn(
        'block h-full min-h-[100px] w-full resize-none rounded-lg border border-smoky-300 bg-smoky-50 py-2 text-smoky-900 shadow-sm placeholder:text-smoky-500 focus:border-seagreen focus:bg-light focus:outline-none focus:ring-1 focus:ring-seagreen-300 disabled:resize-none disabled:border-none disabled:bg-smoky-200',
        className
      )}
      {...rest}
    />
  )
);

Textarea.displayName = 'Textarea';
