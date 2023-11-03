import { type IconType } from 'react-icons/lib';

import { convertText } from '@/utils/convertText';

export type ContactInfoItem = {
  Icon: IconType;
  text: string;
  type: 'e-mail' | 'numer telefonu' | 'lokalizacja';
};

export const ContactInfoItem = ({ Icon, text, type }: ContactInfoItem) => {
  return (
    <div className='flex max-w-fit'>
      <span className='sr-only'>{type}</span>
      <Icon
        className='h-16 w-16 rounded-lg bg-seagreen-300 p-2 text-seagreen-600 shadow'
        aria-hidden
      />
      <div className='ms-4'>
        <h4 className='mb-1 text-xl font-bold text-light'>
          {convertText(type, { capitalize: true })}
        </h4>
        <p className='text-base text-smoky-300'>{text}</p>
      </div>
    </div>
  );
};
