import { BiTimeFive } from 'react-icons/bi';

import Link from 'next/link';

import Post from '@/interfaces/Post';

import CategoryBadge from '../Category/CategoryBadge';
import CustomImage from '../Common/CustomImage';

type Props = Omit<Post, 'content' | 'isPopular'>;

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
        <div className='mb-3 flex items-start justify-between'>
          <div>
            <h3 className='text-xl font-semibold leading-6'>{title}</h3>
            <time className='flex items-center text-sm'>
              <BiTimeFive className='mr-1' />
              {date}
            </time>
          </div>
          <CategoryBadge category={category} />
        </div>
        <p>{excerpt}</p>
      </div>
      <Link href={`/posty/${slug}`} className='absolute inset-0' />
    </li>
  );
}
