import { cn } from '@/lib/cn';

type BaseProps = {
  label: string;
  errors?: string[];
};

type InputProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement> & { component?: 'input' };

type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { component?: 'textarea' };

type Props = InputProps | TextareaProps;

export const ContactFormField = ({ label, errors, name, component = 'input', ...rest }: Props) => {
  const className = cn(
    'px-3 py-2 shadow-sm border focus:outline-none block w-full rounded-md sm:text-sm',
    errors
      ? 'text-error border-error bg-error-200'
      : 'text-seagreen-700 border-smoky-400 bg-smoky-50 focus:bg-light focus:border-seagreen-100 focus:ring-seagreen-300 focus:ring-1'
  );
  return (
    <div className='flex flex-col gap-y-1'>
      <label
        htmlFor={name}
        className='block font-medium after:ml-0.5 after:text-error-300 after:content-["*"]'
      >
        {label}
      </label>
      {component === 'input' ? (
        <input
          id={name}
          name={name}
          className={className}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      ) : (
        <textarea
          id={name}
          name={name}
          className={className}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
      {errors && (
        <p className='text-center text-sm text-error-300' aria-live='polite'>
          {errors[0]}
        </p>
      )}
    </div>
  );
};
