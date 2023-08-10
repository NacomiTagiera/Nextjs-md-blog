import Link from 'next/link';

import { getAllCategories } from '@/lib/postsUtils';
import convertText from '@/utils/convertText';

export default function CategoryList() {
  const categories = getAllCategories();

  return (
    <nav role='sub' className='bg-secondary bg-opacity-50 px-6 py-3'>
      <ul className='text-md flex w-full flex-wrap justify-around gap-x-3 md:text-lg'>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={`/kategorie/${convertText(category, {
                withHyphens: true,
              })}`}
              className='group text-slate-200 transition duration-300 hover:text-white'
            >
              {convertText(category, { capitalize: true })}
              <span className='block h-0.5 max-w-0 bg-white transition-all duration-300 group-hover:max-w-full'></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
