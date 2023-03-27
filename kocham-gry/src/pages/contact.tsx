import Head from "next/head";

import ContactForm from "@/components/Contact/ContactForm";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Kontakt ze mną</title>
        <meta
          name="description"
          content="Chcesz się dowiedzieć o mnie więcej? Zostaw swoje dane kontaktowe, na pewno się odezwę!"
        />
      </Head>
      <ContactForm />
    </div>
  );
}
