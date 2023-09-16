import { BiTimeFive } from 'react-icons/bi';

import { cn } from '@/lib/cn';
import { type Post } from '@/types/Post';
import { formatDate } from '@/utils/formatDate';

export const PostDate = ({ date, className }: { date: Post['date']; className?: string }) => {
  const creationDate = new Date(date);

  return (
    <time
      className={cn('flex items-center text-sm', className)}
      aria-label={`Artykuł dodano ${formatDate(creationDate)}`}
      dateTime={creationDate.toISOString()}
    >
      <BiTimeFive className='mr-1' />
      {formatDate(creationDate)}
    </time>
  );
};
