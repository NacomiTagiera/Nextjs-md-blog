import { contactInfo } from '@/utils/constants';

import { ContactInfoItem } from '../atoms/ContactInfoItem';

export const ContactInfo = () => {
  return (
    <div className='mb-10'>
      <h2 className='text-heading -mt-1 pb-6 text-2xl font-bold sm:text-3xl md:pb-10 md:text-4xl lg:pb-7'>
        Moje dane
      </h2>
      <p className='text-justify text-base leading-relaxed text-smoky-200'>
        Cześć, jestem Kuba. Studiuję Informatykę i Ekonometrię na Politechnice Białostockiej, jestem
        obecnie na drugim roku. Mam niewielkie doświadczenie komercyjne i szukam pracy jako Junior
        Frontend Developer, jestem w stanie pracować na niepełny etat. Spodobała Ci się moja strona
        lub masz więcej pytań? Zapraszam do kontaktu!
      </p>
      <div className='mt-6 flex flex-wrap gap-6'>
        {contactInfo.map((item) => (
          <ContactInfoItem key={item.text} {...item} />
        ))}
      </div>
    </div>
  );
};
