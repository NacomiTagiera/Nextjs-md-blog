import { type Post } from '@/types';

import { CustomImage } from '../atoms/CustomImage';
import { PostDate } from '../atoms/PostDate';

type Props = Omit<Post, 'category' | 'content' | 'slug'>;

export const PostArticleHeader = ({ date, excerpt, thumbnail, title }: Props) => {
  return (
    <>
      <PostDate date={date} className='text-seagreen md:text-lg' />
      <h2
        className='mb-4 text-center text-3xl font-bold tracking-wide sm:text-4xl md:mb-6 md:text-5xl'
        data-cy='blog-post-header'
      >
        {title}
      </h2>
      <p className='lead'>{excerpt}</p>
      <div className='my-6 px-6 md:my-8 md:px-0'>
        <CustomImage
          src={thumbnail}
          alt={title}
          width={768}
          height={432}
          priority
          className='rounded-md shadow-md md:rounded-lg md:shadow-lg'
        />
      </div>
    </>
  );
};
