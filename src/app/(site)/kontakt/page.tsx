import { type Metadata } from 'next';

import { PageContentHeader } from '@/components/atoms/PageContentHeader';
import { ContactInfo } from '@/components/molecules/ContactInfo';
import { ContactForm } from '@/components/organisms/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Masz do mnie jakieś pytania lub sugestie? Koniecznie daj mi o tym znać! Postaram się na nie odpowiedzieć tak szybko jak to możliwe.',
};

export default function ContactPage() {
  return (
    <>
      <PageContentHeader
        header='Kontakt'
        subheader='Masz do mnie jakieś pytania lub sugestie? Koniecznie daj mi o tym znać! Postaram się na nie odpowiedzieć tak szybko jak to możliwe.'
      />
      <div className='grid grid-cols-1 gap-x-4 lg:grid-cols-2'>
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}
