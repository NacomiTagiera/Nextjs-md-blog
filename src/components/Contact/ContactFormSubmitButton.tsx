'use client';

export const ContactFormSubmitButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <button
      type='submit'
      className='inline-flex max-w-fit items-center rounded-md bg-seagreen-500 px-4 py-2 text-sm font-semibold leading-6 shadow transition-all duration-300 hover:bg-seagreen-600 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-seagreen-700'
      disabled={disabled}
    >
      {disabled ? (
        <>
          <svg
            className='-ml-1 mr-3 h-5 w-5 animate-spin text-light'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
          Wysyłanie...
        </>
      ) : (
        'Wyślij'
      )}
    </button>
  );
};
