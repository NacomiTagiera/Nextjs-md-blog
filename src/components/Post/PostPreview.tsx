import { BiTimeFive } from 'react-icons/bi';

import { type Post } from '@/types/Post';
import { formatDate } from '@/utils/formatDate';

import CustomImage from '../Common/CustomImage';
import CustomLink from '../Common/CustomLink';

type Props = Omit<Post, 'content' | 'isPopular'> & { priority: boolean };

export default function PostPreview({
  category,
  date,
  excerpt,
  slug,
  thumbnail,
  title,
  priority,
}: Props) {
  const creationDate = new Date(date);

  return (
    <li className='max-w-sm overflow-hidden rounded-b-md bg-dark text-light shadow-md md:max-w-none'>
      <CustomLink href={`/posty/${slug}`}>
        <CustomImage src={thumbnail} alt={title} width={414} height={233} priority={priority} />
        <div className='p-4'>
          <div className='mb-3 flex items-start justify-between'>
            <div>
              <h3 className='text-xl font-semibold leading-6'>{title}</h3>
              <time
                className='flex items-center text-sm'
                aria-label={`Wpis dodano ${formatDate(creationDate)}`}
                dateTime={creationDate.toISOString()}
              >
                <BiTimeFive className='mr-1' />
                {formatDate(creationDate)}
              </time>
            </div>
            <span className='rounded-md bg-seagreen-800 px-2 py-1 text-sm uppercase md:rounded-lg'>
              {category}
            </span>
          </div>
          <p>{excerpt}</p>
        </div>
      </CustomLink>
    </li>
  );
}
