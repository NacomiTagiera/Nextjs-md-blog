import { contactInfo } from '@/utils/constants';

import { ContactInfoItem } from './ContactInfoItem';

export const ContactInfo = () => {
  return (
    <div className='mt-6 flex flex-col items-center'>
      <h3 className='text-heading -mt-1 pb-6 text-2xl font-bold sm:text-3xl md:pb-10 md:text-4xl lg:pb-7'>
        Moje dane
      </h3>
      {contactInfo.map((item) => (
        <ContactInfoItem key={item.text} {...item} />
      ))}
    </div>
  );
};
