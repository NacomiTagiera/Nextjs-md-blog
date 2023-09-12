'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Formik, type FormikHelpers } from 'formik';

import { sendForm } from '@/actions';
import { ContactFormSchema } from '@/lib/formSchema';
import { type ContactFormValues } from '@/types/ContactFormValues';

import FormField from './FormField';

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setIsPending(true);

    try {
      await sendForm(values);
      toast.success('Wiadomość została wysłana!');
      resetForm();
    } catch (error) {
      if (error) {
        toast.error('Coś poszło nie tak. Spróbuj ponownie później');
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form noValidate className='mx-auto flex max-w-sm flex-col gap-y-6 px-6 py-5'>
        <FormField
          name='name'
          label='Imię'
          placeholder='Jan Kowalski'
          type='text'
          autoComplete='name'
        />
        <FormField
          name='email'
          label='Email'
          placeholder='j.kowalski@gmail.com'
          type='email'
          autoComplete='email'
        />
        <FormField component='textarea' name='message' label='Wiadomość' type='text' />
        <div className='text-center'>
          <button
            type='submit'
            className='inline-flex items-center rounded-md bg-seagreen-500 px-4 py-2 text-sm font-semibold leading-6 shadow transition-all duration-300 hover:bg-seagreen-600 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-seagreen-700'
            disabled={isPending}
          >
            {isPending ? (
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
        </div>
      </Form>
    </Formik>
  );
}
