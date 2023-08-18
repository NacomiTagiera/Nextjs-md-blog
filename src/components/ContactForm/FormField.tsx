import { ErrorMessage, Field } from 'formik';

interface Props {
  fieldName: string;
  label: string;
  large?: boolean;
  type?: string;
}

export default function FormField({
  fieldName,
  label,
  large = false,
  type = 'text',
}: Props) {
  return (
    <div>
      <label htmlFor={fieldName} className='mb-2 block font-medium'>
        {label}
      </label>
      <Field
        id={fieldName}
        className='appearance-none rounded border-2 border-gray-300 bg-gray-200 px-4 py-2 leading-tight text-primary focus:border-slate-500 focus:bg-white focus:outline-none'
        as={large ? 'textarea' : 'input'}
        type={type}
        name={fieldName}
        required={true}
      />
      <ErrorMessage
        className='mt-2 text-sm text-red-500'
        name={fieldName}
        component='p'
      />
    </div>
  );
}
