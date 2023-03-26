import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
  name: Yup.string().required("To pole jest wymagane"),
  email: Yup.string()
    .email("Podaj prawidłowy adres email")
    .required("To pole jest wymagane"),
  message: Yup.string().required("To pole jest wymagane"),
});

export default contactFormSchema;
