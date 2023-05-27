import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Imię jest wymagane"),
  email: Yup.string()
    .email("Nieprawidłlowy adres email")
    .required("Email jest wymagany"),
  message: Yup.string().required("Wiadomość jest wymagana"),
});

export default ContactFormSchema;
