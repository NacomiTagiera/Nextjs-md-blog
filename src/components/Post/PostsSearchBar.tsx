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
    <div className='relative mt-5 text-right'>
      <input
        type='text'
        placeholder='Wyszukaj post'
        value={value}
        spellCheck={false}
        onChange={handleInputChange}
        className='w-full rounded-md bg-gray-100 px-4 py-2 text-primary shadow-sm focus:border-secondary focus:ring focus:ring-[#b63e3e] focus:ring-opacity-50 sm:max-w-[340px]'
      />
      <BiSearch
        className='pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xl text-neutral-500'
        aria-label='Wyszukaj post'
      />
    </div>
  );
}
