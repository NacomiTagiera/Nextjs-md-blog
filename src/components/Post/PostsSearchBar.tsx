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
    <div className='relative mb-8'>
      <input
        type='text'
        placeholder='Wyszukaj post'
        value={value}
        spellCheck={false}
        onChange={handleInputChange}
        className='w-full rounded-lg border bg-gray-100 px-4 py-2 text-primary focus:border-secondary focus:outline-none'
      />
      <BiSearch
        className='pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-xl text-neutral-500'
        aria-label='Wyszukaj post'
      />
    </div>
  );
}
