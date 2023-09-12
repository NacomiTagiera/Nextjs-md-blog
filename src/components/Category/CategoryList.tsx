import { type Route } from 'next';

import { getAllCategories } from '@/lib/postsUtils';
import { convertText } from '@/utils/convertText';

import ActiveLink from '../Common/ActiveLink';

export default function CategoryList() {
  const categories = getAllCategories();
  categories.unshift('wszystkie');

  return (
    <ul className='flex w-full flex-wrap justify-around gap-4 bg-seagreen-700 px-5 py-2'>
      {categories.map((category, index) => (
        <li key={index}>
          <ActiveLink
            className='group block max-w-fit text-base text-light hover:text-smoky-50 sm:p-1 md:p-1.5 md:text-lg md:font-medium'
            activeClassName='text-smoky-50 underline decoration-light decoration-2 underline-offset-8'
            href={
              category === 'wszystkie'
                ? '/posty'
                : (`/posty/kategorie/${convertText(category, {
                    withHyphens: true,
                  })}` as Route)
            }
          >
            {convertText(category, { capitalize: true })}
            <span className='block h-0.5 max-w-0 bg-light transition-all duration-300 group-hover:max-w-full'></span>
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
}
