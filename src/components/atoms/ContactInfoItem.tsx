import { type IconType } from 'react-icons/lib';

export type ContactInfoItem = {
  Icon: IconType;
  text: string;
  type: 'email' | 'numer telefonu' | 'adres';
};

export const ContactInfoItem = ({ Icon, text, type }: ContactInfoItem) => {
  const linkClassName = 'flex-1';
  let link;

  if (type === 'email') {
    link = (
      <a href={`mailto:${text}`} className={linkClassName}>
        {text}
      </a>
    );
  } else if (type === 'numer telefonu') {
    link = (
      <a href={`tel:${text.replaceAll(' ', '')}`} className={linkClassName}>
        {text}
      </a>
    );
  } else {
    link = <p className={linkClassName}>{text}</p>;
  }

  return (
    <div className='mb-8 flex flex-wrap items-center'>
      <span className='sr-only'>{type}</span>
      <Icon className='me-4 text-4xl text-seagreen' aria-hidden />
      {link}
    </div>
  );
};
