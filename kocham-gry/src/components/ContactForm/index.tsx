import { Fragment, useEffect, useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { sendContactData } from "@/lib/api";
import ContactFormSchema from "@/lib/formSchema";
import FormField from "./FormField";
import ContactFormValues from "@/interfaces/ContactFormValues";

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
          <FormField fieldName="name" label="Imię" />
          <FormField fieldName="email" label="Email" type="email" />
          <FormField fieldName="message" label="Wiadomość" large />

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
