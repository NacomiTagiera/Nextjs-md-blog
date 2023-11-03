import { type Metadata } from 'next';

import { ContactInfo } from '@/components/molecules/ContactInfo';
import { ContactForm } from '@/components/organisms/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Masz do mnie jakieś pytania lub sugestie? Koniecznie daj mi o tym znać! Postaram się na nie odpowiedzieć tak szybko jak to możliwe.',
};

export default function ContactPage() {
  return (
    <section className='mx-auto mt-20 grid grid-cols-1 gap-x-14 md:grid-cols-2'>
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
