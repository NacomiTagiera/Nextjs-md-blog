import Link from 'next/link';

import { getAllCategories } from '@/lib/postsUtils';
import { capitalizeText } from '@/utils/capitalizeText';

export default function CategoryList() {
  const categories = getAllCategories();

  return (
    <ul className='flex w-full flex-wrap justify-around gap-3 bg-secondary bg-opacity-50 px-6 py-3'>
      {categories.map((category, index) => (
        <li key={index}>
          <Link
            href={`/kategorie/${category}`}
            className='group text-slate-200 transition duration-300 hover:text-white'
          >
            {capitalizeText(category)}
            <span className='block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full'></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
