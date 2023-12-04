'use client';

import { type ChangeEvent, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import { useQueryParams } from '@/hooks/useQueryParams';

import { Input } from '../atoms/Input';

export const PostsSearchBar = () => {
  const { queryParams, setQueryParams } = useQueryParams<{ query?: string }>();
  const [searchTerm, setSearchTerm] = useState(queryParams?.get('query') || '');
  const debounceTimer = useRef<NodeJS.Timeout>();

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      setQueryParams({ query: value.trim() });
    }, 500);

    setSearchTerm(value);
  };

  return (
    <label className='relative block w-full'>
      <span className='sr-only'>Wyszukaj</span>
      <span className='absolute inset-y-0 right-0 me-2 flex items-center'>
        <BiSearch className='h-5 w-5 fill-smoky-600' aria-hidden />
      </span>
      <Input
        className='rounded-s-none pe-9 ps-3 placeholder:italic'
        type='search'
        name='search'
        placeholder='Wyszukaj post...'
        autoComplete='off'
        spellCheck={false}
        value={searchTerm}
        onChange={handleInputChange}
        data-cy='search-input'
      />
    </label>
  );
};
