import { Fragment, useEffect, useState } from "react";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import ContactFormValues from "@/interfaces/ContactFormValues";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Imię jest wymagane"),
  email: Yup.string()
    .email("Nieprawidłlowy adres email")
    .required("Email jest wymagany"),
  message: Yup.string().required("Wiadomość jest wymagana"),
});

async function sendContactData(contactDetails: ContactFormValues) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [requestStatus, setRequestStatus] = useState<
    "success" | "pending" | "error" | undefined
  >(undefined);

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(undefined);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setRequestStatus("pending");
    try {
      await sendContactData(values);
      setRequestStatus("success");
      resetForm();
    } catch (error) {
      if (error instanceof Error) {
        setRequestStatus("error");
      }
    }
  };

  return (
    <Fragment>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4 text-center">
          <div>
            <label htmlFor="name" className="block font-medium mb-2">
              Imię
            </label>
            <Field
              type="text"
              name="name"
              className="bg-gray-200 appearance-none border-2 border-gray-300 rounded py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-slate-500"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              Wiadomość
            </label>
            <Field
              component="textarea"
              name="message"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-primary leading-tight focus:outline-none focus:bg-white focus:border-slate-500 w-full"
              rows="4"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {requestStatus === "error" && (
            <p className="text-red-500 text-sm">
              Coś poszło nie tak. Spróbuj ponownie później
            </p>
          )}

          <button
            type="submit"
            className="bg-secondary hover:bg-red-500 font-bold mx-auto py-2 px-4 rounded transition duration-500"
            disabled={requestStatus === "pending"}
          >
            {requestStatus === "pending" ? "Wysyłanie..." : "Wyślij"}
          </button>
        </Form>
      </Formik>

      {requestStatus === "success" && (
        <p className=" py-3 text-center text-green-500 text-lg">
          Wiadomość została wysłana
        </p>
      )}
    </Fragment>
  );
}
