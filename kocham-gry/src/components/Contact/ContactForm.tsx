import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { ContactFormValues } from "@/interfaces/ContactFormValues";

export default function ContactForm() {
  const handleSubmit = async (values: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log("Success");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Imię jest wymagane"),
        email: Yup.string()
          .email("Nieprawidłowy adres email")
          .required("Email jest wymagany"),
        message: Yup.string().required("Wiadomość jest wymagana"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Imię</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="message">Wiadomość</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Wyślij
          </button>
        </Form>
      )}
    </Formik>
  );
}
