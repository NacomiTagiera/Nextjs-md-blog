'use client';

import { BiSearch } from 'react-icons/bi';

import usePostsSearchBar from '@/hooks/usePostsSearchBar';
import Post from '@/interfaces/Post';

interface Props {
  posts: Post[];
  onSearch: (posts: Post[]) => void;
}

export default function PostsSearchBar({ posts, onSearch }: Props) {
  const { value, handleInputChange } = usePostsSearchBar({ posts, onSearch });

  return (
    <label className='relative mt-5 block sm:max-w-[365px]'>
      <span className='sr-only'>Wyszukaj</span>
      <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
        <BiSearch className='h-5 w-5 fill-slate-300' />
      </span>
      <input
        className='block w-full rounded-md bg-gray-100 py-2 pl-9 pr-3 text-primary shadow-sm placeholder:italic placeholder:text-slate-400 sm:text-sm'
        type='search'
        placeholder='Wyszukaj post'
        value={value}
        onChange={handleInputChange}
      />
    </label>
  );
}
