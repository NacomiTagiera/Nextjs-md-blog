'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Form, Formik, type FormikHelpers } from 'formik';

import { sendForm } from '@/actions';
import { ContactFormSchema } from '@/lib/formSchema';
import { type ContactFormValues } from '@/types/ContactFormValues';

import { ContactFormField } from './ContactFormField';
import { ContactFormSubmitButton } from './ContactFormSubmitButton';

export const ContactForm = () => {
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
      <Form noValidate className='mx-auto flex max-w-sm flex-col items-center gap-y-6 px-6 py-5'>
        <ContactFormField
          name='name'
          label='Imię'
          placeholder='Wprowadź swoje imię'
          type='text'
          autoComplete='name'
        />
        <ContactFormField
          name='email'
          label='Email'
          placeholder='Wprowadź adres email'
          type='email'
          autoComplete='email'
        />
        <ContactFormField
          component='textarea'
          name='message'
          label='Wiadomość'
          placeholder='Napisz wiadomość'
          type='text'
        />
        <ContactFormSubmitButton disabled={isPending} />
      </Form>
    </Formik>
  );
};
