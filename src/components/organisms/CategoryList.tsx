import { getAllCategories } from '@/lib/postsUtils';

import { CategoryListLink } from '../molecules/CategoryListLink';

export const CategoryList = () => {
  const categories = getAllCategories();
  categories.unshift('wszystkie');

  return (
    <ul className='mb-5 flex w-full flex-wrap justify-around gap-4 bg-seagreen-700 px-5 py-2'>
      {categories.map((category, index) => (
        <CategoryListLink key={index} category={category} />
      ))}
    </ul>
  );
};
