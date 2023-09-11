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
      if (error instanceof Error) {
        toast.error('Coś poszło nie tak. Spróbuj ponownie później');
      }
    }

    setIsPending(false);
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
            className='rounded bg-gradient-to-r from-seagreen to-seagreen-700 px-4 py-2 font-bold shadow transition-all duration-300 hover:scale-95 hover:opacity-80 disabled:opacity-50'
            disabled={isPending}
          >
            {isPending ? 'Wysyłanie...' : 'Wyślij'}
          </button>
        </div>
      </Form>
    </Formik>
  );
}
