import { type Metadata } from 'next';

import { CategoryList } from '@/components/Category/CategoryList';
import { PageContentHeader } from '@/components/Common/PageContentHeader';
import { AllPosts } from '@/components/Post/AllPosts';
import { getAllPosts } from '@/lib/postsUtils';

export const metadata: Metadata = {
  title: 'Wszystkie wpisy',
  description: 'Poznaj najlepsze tytuły ze świata gier z różnych kategorii.',
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <article>
      <PageContentHeader
        header='Wszystkie wpisy'
        subheader='Poznaj najlepsze tytuły ze świata gier z różnych kategorii.'
      />
      <CategoryList />
      <AllPosts posts={posts} />
    </article>
  );
}
