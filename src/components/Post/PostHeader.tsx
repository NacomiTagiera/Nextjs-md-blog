import { Fragment } from 'react';

import Post from '@/interfaces/Post';

import CustomImage from '../Common/CustomImage';

type Props = Omit<Post, 'category' | 'content' | 'isPopular' | 'slug'>;

export default function PostHeader({ date, excerpt, thumbnail, title }: Props) {
  return (
    <Fragment>
      <time className='md:text-md text-sm text-secondary md:text-lg'>
        {date}
      </time>
      <h2 className='mb-4 text-center text-3xl font-bold tracking-wide sm:text-4xl md:mb-6 md:text-5xl'>
        {title}
      </h2>
      <p className='text-xl leading-8'>{excerpt}</p>
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
    </Fragment>
  );
}
