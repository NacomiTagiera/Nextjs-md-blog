'use client';

import { type ChangeEvent } from 'react';

import { useQueryParams } from '@/hooks/useQueryParams';
import { type SortingOption } from '@/types';
import { sortingOptions } from '@/utils/constants';

export const SortPostsSelect = () => {
  const { queryParams, setQueryParams } = useQueryParams<{ order?: SortingOption }>();
  const sortingOrder = (queryParams?.get('order') || 'najnowsze') as SortingOption;

  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) =>
    setQueryParams({ order: value as SortingOption });

  return (
    <>
      <label htmlFor='sorting-options' className='sr-only'>
        Opcje sortowania
      </label>
      <select
        value={sortingOrder}
        id='sorting-options'
        onChange={handleSelect}
        className='block w-full rounded-s-lg border border-smoky-300 bg-smoky-50 p-2 text-smoky-900 shadow-sm focus:border-seagreen focus:bg-light focus:outline-none focus:ring-1 focus:ring-seagreen-300'
        data-cy='sort-select'
      >
        {sortingOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
