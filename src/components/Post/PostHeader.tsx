import { type Post } from '@/types/Post';

import { CustomImage } from '../Common/CustomImage';

import { PostDate } from './PostDate';

type Props = Omit<Post, 'category' | 'content' | 'slug'>;

export const PostHeader = ({ date, excerpt, thumbnail, title }: Props) => {
  return (
    <>
      <PostDate date={date} className='text-seagreen md:text-lg' />
      <h2 className='mb-4 text-center text-3xl font-bold tracking-wide sm:text-4xl md:mb-6 md:text-5xl'>
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
