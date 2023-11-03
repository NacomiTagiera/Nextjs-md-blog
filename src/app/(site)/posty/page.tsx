import { type Metadata } from 'next';

import { PageContentHeader } from '@/components/atoms/PageContentHeader';
import { CategoryList } from '@/components/organisms/CategoryList';
import { AllPosts } from '@/components/templates/AllPosts';
import { getAllPosts, getFilteredAndSortedPosts } from '@/lib/postsUtils';
import { type SortingOption } from '@/types';

export const metadata: Metadata = {
  title: 'Wszystkie wpisy',
  description: 'Poznaj najlepsze tytuły ze świata gier z różnych kategorii.',
};

export default function PostsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const posts = searchParams
    ? getFilteredAndSortedPosts(
        searchParams.kategoria as string,
        searchParams.fraza as string,
        searchParams.order as SortingOption
      )
    : getAllPosts();

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
