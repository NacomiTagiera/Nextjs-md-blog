import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const inputVariants = cva(
  'peer h-full w-full border-smoky-200 bg-transparent font-sans text-sm font-normal text-smoky-300 outline outline-0 transition-all placeholder-shown:border-smoky-200 focus:border-seagreen-500 focus:outline-0 disabled:border-0 disabled:bg-smoky-600',
  {
    variants: {
      variant: {
        standard: 'border-b pb-1.5 pt-4',
        outlined:
          'border px-3 py-2.5 placeholder-shown:border placeholder-shown:border-t-smoky-200 focus:border-2 focus:border-t-transparent',
      },
    },
    defaultVariants: {
      variant: 'standard',
    },
  }
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, name, ...rest }, ref) => (
    <input
      ref={ref}
      id={name}
      name={name}
      className={cn(inputVariants({ variant, className }))}
      {...rest}
    />
  )
);

Input.displayName = 'Input';
