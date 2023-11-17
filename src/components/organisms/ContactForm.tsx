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
    <form ref={ref} action={formAction} className='mx-auto md:col-span-3 md:mx-0'>
      <h2 className='text-heading -mt-1 pb-6 text-2xl font-bold sm:text-3xl md:pb-10 md:text-4xl lg:pb-7'>
        Napisz wiadomość
      </h2>
      <fieldset className='mb-5 flex flex-col items-center gap-y-6'>
        <ContactFormField
          name='name'
          placeholder='Imię'
          autoComplete='name'
          type='text'
          required
          max={50}
          errors={errors?.name}
          disabled={pending}
          data-cy='contact-name-input'
        />
        <ContactFormField
          name='email'
          placeholder='E-mail'
          autoComplete='email'
          type='email'
          required
          errors={errors?.email}
          disabled={pending}
          data-cy='contact-email-input'
        />
        <ContactFormField
          component='textarea'
          name='message'
          placeholder='Wiadomość'
          rows={3}
          required
          maxLength={500}
          errors={errors?.message}
          disabled={pending}
          data-cy='contact-message-input'
        />
      </fieldset>
      <ContactFormSubmitButton />
    </form>
  );
};
