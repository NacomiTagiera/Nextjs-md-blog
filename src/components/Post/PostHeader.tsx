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
      <div className='max-w-3xl'>
        <time className='md:text-md text-sm text-secondary md:text-lg'>
          {date}
        </time>
        <h2 className='mb-6 text-center text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl'>
          {title}
        </h2>
        <p className='max-w-3xl text-xl leading-8 sm:mt-4'>{excerpt}</p>
      </div>
      <div className='relative my-8 aspect-video w-full overflow-hidden rounded-lg px-6 md:px-0'>
        <CustomImage src={thumbnail} alt={title} width={768} height={432} />
      </div>
    </Fragment>
  );
}
