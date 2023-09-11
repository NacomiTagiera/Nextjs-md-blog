'use server';

import { ValidationError } from 'yup';

import { ContactFormSchema } from '@/lib/formSchema';
import { insertContactForm } from '@/lib/mongodb';
import type { ContactFormValues } from '@/types/ContactFormValues';

export const sendForm = async (data: ContactFormValues) => {
  try {
    await ContactFormSchema.validate(data, { abortEarly: false });
    await insertContactForm(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      throw new Error('Validation Error');
    }

    throw new Error('Internal Server Error');
  }
};
