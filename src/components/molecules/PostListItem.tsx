import Link from 'next/link';

import { type Post } from '@/types';

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
    <li
      className='group relative max-w-sm overflow-hidden rounded-b bg-dark text-light shadow-md transition hover:bg-dark/70 md:max-w-none'
      data-cy='post-list-item'
    >
      <Link href={`/blog/${slug}`}>
        <CustomImage src={thumbnail} alt={title} width={414} height={233} priority={priority} />
        <div className='p-4'>
          <div className='mb-3 flex items-start justify-between'>
            <div>
              <h3 className='text-xl font-semibold leading-6 decoration-seagreen group-hover:underline'>
                {title}
              </h3>
              <PostDate date={date} />
            </div>
            <span className='rounded-md bg-seagreen-700 px-2 py-1 text-sm uppercase md:rounded-lg'>
              {category}
            </span>
          </div>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
