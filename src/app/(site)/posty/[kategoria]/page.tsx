import { type Metadata } from 'next';

import { AllPosts } from '@/components/templates/AllPosts';
import { getAllCategories, getAllPosts } from '@/lib/postsUtils';
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
    openGraph: {
      title: category,
      description: `Wszystkie posty z kategorii ${category}`,
    },
  };
};

export default function CategoryPage({ params: { kategoria } }: Props) {
  return <AllPosts posts={getAllPosts()} postsCategory={kategoria} />;
}
