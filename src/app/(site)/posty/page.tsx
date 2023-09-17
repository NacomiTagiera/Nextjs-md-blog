import { type Metadata } from 'next';

import { PageContentHeader } from '@/components/atoms/PageContentHeader';
import { CategoryList } from '@/components/molecules/CategoryList';
import { AllPosts } from '@/components/organisms/AllPosts';
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
