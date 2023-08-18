'use client';

import { Fragment, useEffect, useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import ContactFormValues from '@/interfaces/ContactFormValues';
import ContactFormSchema from '@/lib/formSchema';

import FormField from './FormField';

async function sendContactData(contactDetails: ContactFormValues) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

export default function ContactForm() {
  const [requestStatus, setRequestStatus] = useState<
    'success' | 'pending' | 'error' | undefined
  >(undefined);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(undefined);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setRequestStatus('pending');
    try {
      await sendContactData(values);
      setRequestStatus('success');
      resetForm();
    } catch (error) {
      if (error instanceof Error) {
        setRequestStatus('error');
      }
    }
  };

  return (
    <Fragment>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className='space-y-6 text-center'>
          <FormField fieldName='name' label='Imię' />
          <FormField fieldName='email' label='Email' type='email' />
          <FormField fieldName='message' label='Wiadomość' large />

          {requestStatus === 'error' && (
            <p className='text-sm text-red-500'>
              Coś poszło nie tak. Spróbuj ponownie później
            </p>
          )}

          <button
            type='submit'
            className='mx-auto rounded bg-secondary px-4 py-2 font-bold transition duration-500 hover:bg-red-500'
            disabled={requestStatus === 'pending'}
          >
            {requestStatus === 'pending' ? 'Wysyłanie...' : 'Wyślij'}
          </button>
        </Form>
      </Formik>

      {requestStatus === 'success' && (
        <p className='py-3 text-center text-lg text-green-500'>
          Wiadomość została wysłana
        </p>
      )}
    </Fragment>
  );
}
