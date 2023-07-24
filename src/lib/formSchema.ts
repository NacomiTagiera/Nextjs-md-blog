import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Imię jest wymagane')
    .trim('Usuń początkowe i końcowe spacje')
    .strict(true)
    .min(2, 'Wprowadź prawidłowe imię'),
  email: Yup.string()
    .email('Nieprawidłlowy adres email')
    .required('Email jest wymagany')
    .trim('Usuń początkowe i końcowe spacje')
    .strict(true),
  message: Yup.string()
    .required('Wiadomość jest wymagana')
    .trim('Usuń początkowe i końcowe spacje')
    .strict(true)
    .min(2, 'Wiadomość jest za krótka'),
});

export default ContactFormSchema;
