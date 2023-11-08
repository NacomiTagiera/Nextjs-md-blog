'use client';

import { useFilterPosts } from '@/hooks/useFilterPosts';
import type { Post } from '@/types';

import { PostsSearchBar } from '../molecules/PostsSearchBar';
import { SortPostsSelect } from '../molecules/SortPostsSelect';
import { PostList } from '../organisms/PostList';

type Props = {
  posts: Post[];
  postsCategory?: string;
};

export const AllPosts = ({ posts, postsCategory }: Props) => {
  const filteredPosts = useFilterPosts(posts, postsCategory);

  return (
    <>
      <form className='mb-7 flex justify-end'>
        <div className='flex w-full md:w-1/2'>
          <SortPostsSelect />
          <PostsSearchBar />
        </div>
      </form>
      {!filteredPosts.length ? (
        <p className='p-10 text-center text-lg font-medium uppercase text-smoky-300'>
          Przepraszamy, nie znaleziono żadnych wpisów. Spróbuj wyszukać ponownie.
        </p>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </>
  );
};
