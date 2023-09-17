import Link from 'next/link';

import { type Post } from '@/types/Post';

import { CustomImage } from '../atoms/CustomImage';
import { PostDate } from '../atoms/PostDate';

type Props = Omit<Post, 'content'> & { priority?: boolean };

export const PostListItem = ({
  category,
  date,
  excerpt,
  slug,
  thumbnail,
  title,
  priority,
}: Props) => {
  return (
    <li className='group relative max-w-sm overflow-hidden rounded-b-md bg-dark text-light shadow-md transition hover:bg-dark/70 md:max-w-none'>
      <Link href={`/posty/${slug}`}>
        <CustomImage src={thumbnail} alt={title} width={414} height={233} priority={priority} />
        <div className='p-4'>
          <div className='mb-3 flex items-start justify-between'>
            <div>
              <h3 className='text-xl font-semibold leading-6 decoration-seagreen group-hover:underline'>
                {title}
              </h3>
              <PostDate date={date} />
            </div>
            <p className='rounded-md bg-seagreen-700 px-2 py-1 text-sm uppercase md:rounded-lg'>
              {category}
            </p>
          </div>
          <p className='pb-3'>{excerpt}</p>
          <p className='absolute bottom-1 right-4 text-base font-medium underline'>Czytaj dalej</p>
        </div>
      </Link>
    </li>
  );
};
