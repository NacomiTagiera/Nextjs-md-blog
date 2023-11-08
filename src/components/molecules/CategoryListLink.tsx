import { type Route } from 'next';

import { convertText } from '@/utils/convertText';

import { ActiveLink } from '../atoms/ActiveLink';

export const CategoryListLink = ({ category }: { category: string }) => {
  return (
    <li>
      <ActiveLink
        className='block text-base text-light hover:text-smoky-50 sm:p-1 md:p-1.5 md:text-lg md:font-medium'
        activeClassName='text-smoky-50'
        underlineClassName='bg-light'
        href={
          category === 'wszystkie'
            ? '/posty'
            : (`/posty/${convertText(category, {
                withHyphens: true,
              })}` as Route)
        }
        scroll={false}
      >
        {convertText(category, { capitalize: true })}
      </ActiveLink>
    </li>
  );
};
