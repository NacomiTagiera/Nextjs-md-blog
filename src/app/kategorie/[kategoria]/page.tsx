import { Metadata } from 'next';

import CategoryList from '@/components/Category/CategoryList';
import Intro from '@/components/Common/Intro';
import PostList from '@/components/Post/PostList';
import { getAllCategories, getPostsByCategory } from '@/lib/postsUtils';
import { capitalizeText } from '@/utils/capitalizeText';

interface Props {
  params: {
    kategoria: string;
  };
}

export const generateStaticParams = () => getAllCategories();

export const generateMetadata = ({
  params: { kategoria },
}: Props): Metadata => {
  return {
    title: capitalizeText(kategoria),
    description: `Wszystkie posty z kategorii ${kategoria}`,
  };
};

export default function SingleCategoryPage({ params: { kategoria } }: Props) {
  const posts = getPostsByCategory(kategoria);
  const categoryCapitalized = capitalizeText(kategoria);

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
