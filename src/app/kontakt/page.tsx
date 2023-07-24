import { Fragment } from 'react';

import { Metadata } from 'next';

import Intro from '@/components/Common/Intro';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Chcesz się dowiedzieć o mnie więcej? Zostaw swoje dane kontaktowe, na pewno się odezwę!',
};

export default function Contact() {
  return (
    <Fragment>
      <Intro
        header='Kontakt'
        introText='Masz jakieś pytania? Napisz do mnie!'
      />
      <ContactForm />
    </Fragment>
  );
}
