import { object, string } from 'zod';

export const ContactFormSchema = object({
  name: string()
    .trim()
    .min(1, 'Imię jest wymagane')
    .max(50, 'Imię nie może mieć więcej niż 50 liter'),
  email: string().trim().min(1, 'E-mail jest wymagany').email('Nieprawidłowy adres e-mail'),
  message: string()
    .trim()
    .min(1, 'Wiadomość jest wymagana')
    .max(500, 'Wiadomość nie może mieć więcej niż 500 znaków'),
});
