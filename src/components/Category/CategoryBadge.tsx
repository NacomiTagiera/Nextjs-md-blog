import Link from 'next/link';

import Post from '@/interfaces/Post';

type Props = Pick<Post, 'category'>;

export default function CategoryBadge({ category }: Props) {
  return (
    <Link
      href={`kategorie/${category}`}
      className='block rounded-md bg-secondary px-2 py-1 text-sm uppercase text-white md:rounded-lg'
    >
      {category}
    </Link>
  );
}
