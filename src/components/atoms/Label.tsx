import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const labelVariants = cva(
  'after:content-[" "] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-smoky-300 transition-all after:block peer-placeholder-shown:text-sm peer-placeholder-shown:text-smoky-300 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-seagreen-500 peer-focus:after:scale-x-100 peer-focus:after:border-seagreen-500 peer-disabled:peer-placeholder-shown:text-smoky-300',
  {
    variants: {
      variant: {
        standard:
          'after:absolute after:-bottom-1.5 after:w-full after:scale-x-0 after:border-b-2 after:border-seagreen-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-[4.25]',
        outlined:
          'before:content[" "] before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:border-l before:border-t before:border-smoky-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:h-1.5 after:w-2.5 after:flex-grow after:border-r after:border-t after:border-smoky-200 after:transition-all peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-seagreen-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2',
      },
    },
    defaultVariants: {
      variant: 'standard',
    },
  }
);

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, variant, htmlFor, ...rest }, ref) => (
    <label
      htmlFor={htmlFor}
      ref={ref}
      className={cn(labelVariants({ variant, className }))}
      {...rest}
    >
      {children}
    </label>
  )
);

Label.displayName = 'Label';
