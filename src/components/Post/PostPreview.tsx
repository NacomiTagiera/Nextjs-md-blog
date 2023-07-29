import { BiTimeFive } from 'react-icons/bi';

import Link from 'next/link';

import CustomImage from '../Common/CustomImage';

interface Props {
  category: string;
  date: string;
  excerpt: string;
  slug: string;
  thumbnail: string;
  title: string;
}

export default function PostPreview({
  category,
  date,
  excerpt,
  slug,
  thumbnail,
  title,
}: Props) {
  return (
    <li className='relative max-w-sm overflow-hidden rounded-b-lg bg-white shadow-md md:max-w-none'>
      <CustomImage src={thumbnail} alt={title} width={768} height={432} />
      <div className='p-4 text-primary'>
        <span className='rounded-md bg-secondary px-2 py-1 text-sm uppercase text-white md:rounded-lg'>
          {category}
        </span>
        <h3 className='mt-2 text-xl font-semibold leading-6'>{title}</h3>
        <time className='mb-3 flex items-center text-sm'>
          <BiTimeFive className='mr-1' />
          {date}
        </time>
        <p>{excerpt}</p>
      </div>
      <Link href={`/posty/${slug}`} className='absolute inset-0' />
    </li>
  );
}
