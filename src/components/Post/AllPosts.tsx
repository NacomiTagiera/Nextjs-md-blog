'use client';

import { useState } from 'react';

import { type Post } from '@/types/Post';

import PostList from './PostList';
import PostsSearchBar from './PostsSearchBar';

export default function AllPosts({ posts }: { posts: Post[] }) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  return (
    <>
      <div className='flex justify-end'>
        <PostsSearchBar posts={posts} onSearch={setFilteredPosts} />
      </div>
      {!filteredPosts.length ? (
        <p className='p-10 text-center text-lg font-medium uppercase text-smoky-300'>
          Przepraszamy, nie znaleziono żadnych wpisów. Spróbuj wyszukać ponownie.
        </p>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </>
  );
}
