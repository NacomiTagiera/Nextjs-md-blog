'use server';

import { ContactFormSchema } from '@/lib/formSchema';
import { insertContactForm } from '@/lib/mongodb';

export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    serverError?: boolean;
  };
  message?: string;
};

export const sendForm = async (_prevState: FormState, formData: FormData) => {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Popraw pola formularza i spróbuj ponownie',
    };
  }

  try {
    await insertContactForm(validatedFields.data);

    return {
      message: 'Wiadomość została wysyłana!',
    };
  } catch (error) {
    return {
      errors: { serverError: true },
      message: 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie później.',
    };
  }
};
