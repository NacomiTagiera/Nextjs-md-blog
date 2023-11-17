'use client';

import { useFormStatus } from 'react-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const ContactFormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='mt-5 inline-flex max-w-fit items-center rounded-md bg-seagreen-300 px-4 py-2 text-sm font-semibold leading-6 text-smoky-900 shadow transition-all duration-300 hover:bg-seagreen-400 hover:shadow-lg aria-disabled:cursor-wait aria-disabled:bg-seagreen-500'
      aria-disabled={pending}
      data-cy='contact-submit-btn'
    >
      {pending ? (
        <>
          <AiOutlineLoading3Quarters className='-ms-1 me-3 h-5 w-5 animate-spin text-smoky-900' />
          Wysyłanie...
        </>
      ) : (
        'Wyślij'
      )}
    </button>
  );
};
