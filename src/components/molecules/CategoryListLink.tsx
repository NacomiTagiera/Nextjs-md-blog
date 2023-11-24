'use client';

import { useSearchParams } from 'next/navigation';

import { convertText } from '@/utils/convertText';

import { ActiveLink } from '../atoms/ActiveLink';

export const CategoryListLink = ({ category }: { category: string }) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get('query');
  const sortOrder = searchParams?.get('order');

  const queryParams = {
    ...(searchQuery && { query: searchQuery }),
    ...(sortOrder && { order: sortOrder }),
  };

  const pathname =
    category === 'wszystkie'
      ? '/posty'
      : `/posty/${convertText(category, {
          withHyphens: true,
        })}`;

  return (
    <li>
      <ActiveLink
        className='block text-base text-light hover:text-smoky-50 sm:p-1 md:p-1.5 md:text-lg md:font-medium'
        activeClassName='text-smoky-50'
        underlineClassName='bg-light'
        href={{
          pathname,
          query: {
            ...queryParams,
          },
        }}
        scroll={false}
        data-cy='category-link'
      >
        {convertText(category, { capitalize: true })}
      </ActiveLink>
    </li>
  );
};
