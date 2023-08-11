import { Metadata } from 'next';

import CategoryList from '@/components/Category/CategoryList';
import Intro from '@/components/Common/Intro';
import PostList from '@/components/Post/PostList';
import { getAllCategories, getPostsByCategory } from '@/lib/postsUtils';
import convertText from '@/utils/convertText';

interface Props {
  params: {
    kategoria: string;
  };
}

export const generateStaticParams = () =>
  getAllCategories().map((category) => ({
    kategoria: convertText(category, { withHyphens: true }),
  }));

export const generateMetadata = ({
  params: { kategoria },
}: Props): Metadata => {
  const category = convertText(kategoria, {
    capitalize: true,
  }).replaceAll('-', ' ');

  return {
    title: category,
    description: `Wszystkie posty z kategorii ${category}}`,
  };
};

export default function SingleCategoryPage({ params: { kategoria } }: Props) {
  const posts = getPostsByCategory(kategoria);
  const categoryCapitalized = convertText(kategoria, {
    capitalize: true,
  }).replaceAll('-', ' ');

  return (
    <article>
      <Intro
        header={categoryCapitalized}
        introText={`Wszystkie posty z kategorii ${categoryCapitalized}`}
      />
      <CategoryList />
      <PostList posts={posts} />
    </article>
  );
}
