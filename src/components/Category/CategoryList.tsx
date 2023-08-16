import { getAllCategories } from '@/lib/postsUtils';
import convertText from '@/utils/convertText';

import CustomLink from '../Common/CustomLink';

export default function CategoryList() {
  const categories = getAllCategories();
  categories.unshift('wszystkie');

  return (
    <nav role='sub' className='bg-secondary bg-opacity-50 px-6 py-3'>
      <ul className='text-md flex w-full flex-wrap justify-around gap-x-3 md:text-lg'>
        {categories.map((category, index) => (
          <li key={index}>
            <CustomLink
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
    </nav>
  );
}
