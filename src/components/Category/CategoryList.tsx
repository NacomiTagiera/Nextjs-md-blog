import { type Route } from 'next';

import { getAllCategories } from '@/lib/postsUtils';
import { convertText } from '@/utils/convertText';

import { ActiveLink } from '../Common/ActiveLink';

export const CategoryList = () => {
  const categories = getAllCategories();
  categories.unshift('wszystkie');

  return (
    <ul className='mb-5 flex w-full flex-wrap justify-around gap-4 bg-seagreen-700 px-5 py-2'>
      {categories.map((category, index) => (
        <li key={index}>
          <ActiveLink
            className='block text-base text-light hover:text-smoky-50 sm:p-1 md:p-1.5 md:text-lg md:font-medium'
            activeClassName='text-smoky-50'
            underlineClassName='bg-light'
            href={
              category === 'wszystkie'
                ? '/posty'
                : (`/posty/kategorie/${convertText(category, {
                    withHyphens: true,
                  })}` as Route)
            }
          >
            {convertText(category, { capitalize: true })}
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
};
