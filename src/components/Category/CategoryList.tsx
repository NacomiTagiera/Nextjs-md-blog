import { getAllCategories } from '@/lib/postsUtils';
import convertText from '@/utils/convertText';

import CustomLink from '../Common/CustomLink';

export default function CategoryList() {
  const categories = getAllCategories();
  categories.unshift('wszystkie');

  return (
    <ul className='flex w-full flex-wrap justify-around gap-4 bg-seagreen-700 px-6 py-3'>
      {categories.map((category, index) => (
        <li key={index}>
          <CustomLink
            className='text-base text-light md:text-lg md:font-medium'
            href={
              category === 'wszystkie'
                ? '/posty'
                : `/posty/kategorie/${convertText(category, {
                    withHyphens: true,
                  })}`
            }
            underline={true}
          >
            {convertText(category, { capitalize: true })}
          </CustomLink>
        </li>
      ))}
    </ul>
  );
}
