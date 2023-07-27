import { Fragment } from 'react';

import CustomImage from '../Common/CustomImage';

interface Props {
  date: string;
  excerpt: string;
  thumbnail: string;
  title: string;
}

export default function PostHeader({ date, excerpt, thumbnail, title }: Props) {
  return (
    <Fragment>
      <time className='md:text-md text-sm text-secondary md:text-lg'>
        {date}
      </time>
      <h2 className='mb-6 text-center text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl'>
        {title}
      </h2>
      <p className='text-xl leading-8 sm:mt-4'>{excerpt}</p>
      <div className='my-8 px-6 md:px-0'>
        <CustomImage
          src={thumbnail}
          alt={title}
          width={768}
          height={432}
          priority
        />
      </div>
    </Fragment>
  );
}
