import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, ...rest }, ref) => (
    <input
      ref={ref}
      id={name}
      name={name}
      className={cn(
        'block w-full rounded-lg border border-smoky-300 bg-smoky-50 py-2 text-smoky-900 shadow-sm placeholder:text-smoky-500 focus:border-seagreen focus:bg-light focus:outline-none focus:ring-1 focus:ring-seagreen-300 disabled:border-none disabled:bg-smoky-200',
        className
      )}
      {...rest}
    />
  )
);

Input.displayName = 'Input';
