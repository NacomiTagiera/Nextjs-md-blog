'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';

import { type FormState, sendForm } from '@/actions';

import { ContactFormField } from '../atoms/ContactFormField';
import { ContactFormSubmitButton } from '../atoms/ContactFormSubmitButton';

export const ContactForm = () => {
  const initialState: FormState = { errors: undefined, message: undefined };
  const [state, formAction] = useFormState(sendForm, initialState);
  const { pending } = useFormStatus();
  const ref = useRef<HTMLFormElement>(null);

  const { errors, message } = state;

  useEffect(() => {
    if (message) {
      if (!errors) {
        ref.current?.reset();
      }

      toast(message, {
        toastId: 'contact-form-message',
        type: errors ? 'error' : 'success',
      });
    }
  }, [errors, message]);

  return (
    <form ref={ref} action={formAction} className='mx-auto max-w-sm pt-5'>
      <fieldset className='mb-5 flex flex-col items-center gap-y-6'>
        <ContactFormField
          name='name'
          label='Imię'
          autoComplete='name'
          type='text'
          errors={errors?.name}
          disabled={pending}
        />
        <ContactFormField
          name='email'
          label='E-mail'
          autoComplete='email'
          type='email'
          errors={errors?.email}
          disabled={pending}
        />
        <ContactFormField
          component='textarea'
          name='message'
          label='Wiadomość'
          rows={3}
          errors={errors?.message}
          disabled={pending}
        />
      </fieldset>
      <ContactFormSubmitButton />
    </form>
  );
};
