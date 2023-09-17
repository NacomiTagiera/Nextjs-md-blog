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
    <label className='relative block w-full'>
      <span className='sr-only'>Wyszukaj</span>
      <span className='absolute inset-y-0 right-0 me-2 flex items-center'>
        <BiSearch className='h-5 w-5 fill-smoky-600' />
      </span>
      <input
        className='block w-full rounded-lg rounded-s-none border border-smoky-300 bg-smoky-50 py-2 pe-9 ps-3 text-smoky-900 shadow-sm placeholder:italic placeholder:text-smoky-500 focus:border-seagreen focus:outline-none focus:ring-1 focus:ring-seagreen'
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
