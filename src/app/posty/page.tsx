import { Metadata } from 'next';

import CategoryList from '@/components/Category/CategoryList';
import Intro from '@/components/Common/Intro';
import PostList from '@/components/Post/PostList';
import { getAllPosts } from '@/lib/postsUtils';

export const metadata: Metadata = {
  title: 'Wszystkie wpisy',
  description: 'Poznaj najlepsze tytuły ze świata gier z różnych kategorii.',
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <article>
      <Intro
        header='Wszystkie wpisy'
        introText='Poznaj najlepsze tytuły ze świata gier z różnych kategorii.'
      />
      <CategoryList />
      <PostList posts={posts} />
    </article>
  );
}
