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
    <li className='max-w-sm overflow-hidden rounded-b-lg bg-white shadow-md md:max-w-none'>
      <Link href={`/posty/${slug}`}>
        <CustomImage src={thumbnail} alt={title} width={768} height={432} />
      </Link>
      <div className='p-4 text-primary'>
        <div className='mb-3 flex items-start justify-between'>
          <div>
            <Link href={`/posty/${slug}`}>
              <h3 className='text-xl font-semibold leading-6 transition duration-200 hover:text-slate-600'>
                {title}
              </h3>
            </Link>
            <time className='flex items-center text-sm'>
              <BiTimeFive className='mr-1' />
              {date}
            </time>
          </div>
          <CategoryBadge category={category} />
        </div>
        <p>{excerpt}</p>
      </div>
    </li>
  );
}
