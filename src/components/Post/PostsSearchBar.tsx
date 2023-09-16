'use client';

import { BiSearch } from 'react-icons/bi';

import { usePostsSearchBar } from '@/hooks/usePostsSearchBar';
import { type Post } from '@/types/Post';

type Props = {
  posts: Post[];
  onSearch: (posts: Post[]) => void;
};

export const PostsSearchBar = ({ posts, onSearch }: Props) => {
  const { searchTerm, handleInputChange } = usePostsSearchBar({ posts, onSearch });

  return (
    <label className='relative block w-full sm:max-w-[365px]'>
      <span className='sr-only'>Wyszukaj</span>
      <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
        <BiSearch className='h-5 w-5 fill-smoky-600' />
      </span>
      <input
        className='block w-full rounded-md bg-smoky-200 py-2 pl-9 pr-3 text-smoky-900 shadow-sm placeholder:italic placeholder:text-smoky-500 focus:border-seagreen-100 focus:outline-none focus:ring-1 focus:ring-seagreen-300 sm:text-sm'
        type='search'
        name='search'
        placeholder='Wyszukaj post...'
        value={searchTerm}
        autoComplete='off'
        spellCheck={false}
        onChange={handleInputChange}
      />
    </label>
  );
};
