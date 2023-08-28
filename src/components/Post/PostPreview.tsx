import { BiTimeFive } from 'react-icons/bi';

import Post from '@/interfaces/Post';
import { formatDate } from '@/utils/formatDate';

import CustomImage from '../Common/CustomImage';
import CustomLink from '../Common/CustomLink';

type Props = Omit<Post, 'content' | 'isPopular'>;

export default function PostPreview({
  category,
  date,
  excerpt,
  slug,
  thumbnail,
  title,
}: Props) {
  const creationDate = new Date(date);

  return (
    <li className='max-w-sm overflow-hidden rounded-b-md bg-white shadow-md md:max-w-none'>
      <CustomLink href={`/posty/${slug}`}>
        <CustomImage src={thumbnail} alt={title} width={414} height={233} />
        <div className='p-4 text-primary'>
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
            <span className='rounded-md bg-secondary px-2 py-1 text-sm uppercase text-white md:rounded-lg'>
              {category}
            </span>
          </div>
          <p className='text-primary'>{excerpt}</p>
        </div>
      </CustomLink>
    </li>
  );
}
