'use client';

import { Fragment, useState } from 'react';

import Post from '@/interfaces/Post';

import PostList from './PostList';
import PostsSearchBar from './PostsSearchBar';

interface Props {
  posts: Post[];
}

export default function AllPosts({ posts }: Props) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  return (
    <Fragment>
      <div className='flex justify-end'>
        <PostsSearchBar posts={posts} onSearch={setFilteredPosts} />
      </div>
      {!filteredPosts.length ? (
        <p className='p-10 text-center text-lg font-medium uppercase text-smoky-300'>
          Przepraszamy, nie znaleziono żadnych wpisów. Spróbuj wyszukać
          ponownie.
        </p>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </Fragment>
  );
}
