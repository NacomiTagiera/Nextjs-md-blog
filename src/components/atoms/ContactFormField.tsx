import { cn } from '@/lib/cn';

import { Input, type InputProps } from './Input';
import { Textarea, type TextareaProps } from './Textarea';

type BaseProps = {
  errors?: string[];
};

type InputFieldProps = BaseProps & InputProps & { component?: 'input' };

type TextareaFieldProps = BaseProps & TextareaProps & { component?: 'textarea' };

type Props = InputFieldProps | TextareaFieldProps;

export const ContactFormField = ({
  errors,
  component = 'input',
  name,
  placeholder,
  ...rest
}: Props) => {
  const className = cn('px-3', {
    'border-error bg-error-200 focus:border-error focus:bg-error-200 focus:ring-error': errors,
  });
  return (
    <div className='w-full min-w-[200px]'>
      <label htmlFor={name} className='sr-only'>
        {placeholder}
      </label>
      {component === 'input' ? (
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          className={className}
          {...(rest as InputProps)}
        />
      ) : (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={className}
          {...(rest as TextareaProps)}
        />
      )}
      {errors && (
        <p className='mt-1 text-center text-sm text-error-300' aria-live='polite'>
          {errors[0]}
        </p>
      )}
    </div>
  );
};
