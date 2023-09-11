import { useField } from 'formik';

import { cn } from '@/lib/cn';

type Props = {
  label: string;
  name: string;
  autoComplete?: string;
  component?: 'input' | 'textarea';
  placeholder?: string;
  type?: string;
};

export default function FormField({ label, name, component = 'input', ...rest }: Props) {
  const [field, meta] = useField(name);
  const className = cn(
    'px-3 py-2 shadow-sm border placeholder:text-smoky-600 placeholder:italic focus:outline-none block w-full rounded-md sm:text-sm',
    meta.touched && !!meta.error
      ? 'text-[#D41976] border-[#D41976] bg-[#F4C6DD] placeholder:text-pink-400'
      : 'text-seagreen-700 border-smoky-400 bg-smoky-50 focus:bg-light focus:border-seagreen-100 focus:ring-seagreen-300 focus:ring-1'
  );

  return (
    <div className='flex flex-col gap-y-1'>
      <label
        htmlFor={field.name}
        className='block font-medium after:ml-0.5 after:text-red-500 after:content-["*"]'
      >
        {label}
      </label>
      {component === 'input' ? (
        <input
          type='text'
          className={className}
          id={name}
          name={name}
          value={field.value as string}
          required
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...rest}
        />
      ) : (
        <textarea
          rows={3}
          className={className}
          id={name}
          name={name}
          value={field.value as string}
          required
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...rest}
        />
      )}
      {meta.touched && meta.error ? (
        <p className='text-center text-sm text-red-500'>{meta.error}</p>
      ) : (
        ''
      )}
    </div>
  );
}
