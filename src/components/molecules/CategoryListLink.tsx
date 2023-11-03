import { convertText } from '@/utils/convertText';

import { ActiveLink } from '../atoms/ActiveLink';

export const CategoryListLink = ({ category }: { category: string }) => {
  return (
    <li>
      <ActiveLink
        className='block text-base text-light hover:text-smoky-50 sm:p-1 md:p-1.5 md:text-lg md:font-medium'
        activeClassName='text-smoky-50'
        underlineClassName='bg-light'
        href={`/posty?kategoria=${category}`}
      >
        {convertText(category, { capitalize: true })}
      </ActiveLink>
    </li>
  );
};
