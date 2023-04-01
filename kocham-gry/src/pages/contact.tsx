import Head from "next/head";
import { Fragment } from "react";

import ContactForm from "@/components/Contact/ContactForm";
import Intro from "@/components/Common/Intro";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Kontakt ze mną</title>
        <meta
          name="description"
          content="Chcesz się dowiedzieć o mnie więcej? Zostaw swoje dane kontaktowe, na pewno się odezwę!"
        />
      </Head>
      <Intro
        header="Kontakt"
        introText="Masz jakieś pytania? Napisz do mnie!"
      />
      <ContactForm />
    </Fragment>
  );
}