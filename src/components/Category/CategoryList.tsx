import { getAllCategories } from '@/lib/postsUtils';
import { convertText } from '@/utils/convertText';

import CustomLink from '../Common/CustomLink';

export default function CategoryList() {
  const categories = getAllCategories();
  categories.unshift('wszystkie');

  return (
    <ul className='flex w-full flex-wrap justify-around gap-4 bg-seagreen-700 px-6 py-3'>
      {categories.map((category, index) => (
        <li key={index}>
          <CustomLink
            className='group max-w-fit text-base text-light hover:text-smoky-50 md:text-lg md:font-medium'
            activeClassName='underline underline-offset-8 decoration-light decoration-2 text-smoky-50'
            href={
              category === 'wszystkie'
                ? '/posty'
                : `/posty/kategorie/${convertText(category, {
                    withHyphens: true,
                  })}`
            }
          >
            {convertText(category, { capitalize: true })}
            <span className='block h-0.5 max-w-0 bg-light transition-all duration-300 group-hover:max-w-full'></span>
          </CustomLink>
        </li>
      ))}
    </ul>
  );
}
