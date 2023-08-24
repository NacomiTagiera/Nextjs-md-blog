'use server';

import { ValidationError } from 'yup';

import ContactFormValues from '@/interfaces/ContactFormValues';
import ContactFormSchema from '@/lib/formSchema';
import { insertContactForm } from '@/lib/mongodb';

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
