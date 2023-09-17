import { type Metadata } from 'next';

import { PageContentHeader } from '@/components/atoms/PageContentHeader';
import { CategoryList } from '@/components/molecules/CategoryList';
import { AllPosts } from '@/components/organisms/AllPosts';
import { getAllCategories, getPostsByCategory } from '@/lib/postsUtils';
import { convertText } from '@/utils/convertText';

type Props = {
  params: {
    kategoria: string;
  };
};

export const generateStaticParams = () =>
  getAllCategories().map((category) => ({
    kategoria: convertText(category, { withHyphens: true }),
  }));

export const generateMetadata = ({ params: { kategoria } }: Props): Metadata => {
  const category = convertText(kategoria, {
    capitalize: true,
  }).replaceAll('-', ' ');

  return {
    title: category,
    description: `Wszystkie posty z kategorii ${category}`,
  };
};

export default function SingleCategoryPage({ params: { kategoria } }: Props) {
  const posts = getPostsByCategory(kategoria);
  const categoryCapitalized = convertText(kategoria, {
    capitalize: true,
  }).replaceAll('-', ' ');

  return (
    <article>
      <PageContentHeader
        header={categoryCapitalized}
        subheader={`Wszystkie posty z kategorii ${categoryCapitalized}`}
      />
      <CategoryList />
      <AllPosts posts={posts} />
    </article>
  );
}
