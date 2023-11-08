'use client';

import { type ChangeEvent, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { useQueryParams } from '@/hooks/useQueryParams';

export const PostsSearchBar = () => {
  const { queryParams, setQueryParams } = useQueryParams<{ fraza?: string }>();
  const [searchTerm, setSearchTerm] = useState(queryParams?.get('fraza') || '');
  const debounceTimer = useRef<NodeJS.Timeout>();

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setQueryParams({ fraza: value.trim() });
    }, 500);

    setSearchTerm(value);
  };

  return (
    <label className='relative block w-full'>
      <span className='sr-only'>Wyszukaj</span>
      <span className='absolute inset-y-0 right-0 me-2 flex items-center'>
        <BiSearch className='h-5 w-5 fill-smoky-600' aria-hidden />
      </span>
      <input
        className='block w-full rounded-lg rounded-s-none border border-smoky-300 bg-smoky-50 py-2 pe-9 ps-3 text-smoky-900 shadow-sm placeholder:italic placeholder:text-smoky-500 focus:border-seagreen focus:outline-none focus:ring-1 focus:ring-seagreen'
        type='search'
        name='search'
        placeholder='Wyszukaj post...'
        autoComplete='off'
        spellCheck={false}
        value={searchTerm}
        onChange={handleInputChange}
      />
    </label>
  );
};
