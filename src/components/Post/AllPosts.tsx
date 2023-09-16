'use client';

import { useState } from 'react';

import { type Post } from '@/types/Post';
import { sortingOptions } from '@/utils/constants';

import { PostList } from './PostList';
import { PostsSearchBar } from './PostsSearchBar';
import { type SortingOption, SortPostsSelect } from './SortPostsSelect';

export const AllPosts = ({ posts }: { posts: Post[] }) => {
  const [filteredAndSortedPosts, setFilteredAndSortedPosts] = useState<Post[]>(posts);
  const [sortingOption, setSortingOption] = useState<SortingOption>('najnowsze');

  if (sortingOption === 'najnowsze') {
    filteredAndSortedPosts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  } else if (sortingOption === 'najstarsze') {
    filteredAndSortedPosts.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  } else if (sortingOption === 'alfabetycznie') {
    filteredAndSortedPosts.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <>
      <form className='flex justify-end'>
        <div className='flex'>
          <SortPostsSelect
            sortingOption={sortingOption}
            onSelect={setSortingOption}
            options={sortingOptions}
          />
          <PostsSearchBar posts={posts} onSearch={setFilteredAndSortedPosts} />
        </div>
      </form>
      {!filteredAndSortedPosts.length ? (
        <p className='p-10 text-center text-lg font-medium uppercase text-smoky-300'>
          Przepraszamy, nie znaleziono żadnych wpisów. Spróbuj wyszukać ponownie.
        </p>
      ) : (
        <PostList posts={filteredAndSortedPosts} />
      )}
    </>
  );
};
