'use client';

import { type Dispatch, type SetStateAction } from 'react';

export type SortingOption = 'najnowsze' | 'najstarsze' | 'alfabetycznie';

type Props = {
  sortingOption: SortingOption;
  onSelect: Dispatch<SetStateAction<SortingOption>>;
  options: {
    value: SortingOption;
    label: string;
  }[];
};

export const SortPostsSelect = ({ sortingOption, onSelect, options }: Props) => {
  return (
    <>
      <label htmlFor='sorting-options' className='sr-only'>
        Opcje sortowania
      </label>
      <select
        value={sortingOption}
        id='sorting-options'
        onChange={(e) => onSelect(e.target.value as SortingOption)}
        className='block w-full rounded-lg border border-smoky-300 bg-smoky-50 p-2 text-sm text-smoky focus:border-seagreen focus:ring-seagreen'
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};
