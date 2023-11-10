import type { Metadata } from 'next';

import { PageContentHeader } from '@/components/atoms/PageContentHeader';
import { CategoryList } from '@/components/organisms/CategoryList';

export const metadata: Metadata = {
  title: 'Wszystkie wpisy',
  description: 'Poznaj najlepsze tytuły ze świata gier z różnych kategorii.',
  openGraph: {
    title: 'Wszystkie wpisy',
    description: 'Poznaj najlepsze tytuły ze świata gier z różnych kategorii.',
  },
};

export default function PostListLayout({ children }: { children: React.ReactNode }) {
  return (
    <article>
      <PageContentHeader
        header='Wszystkie wpisy'
        subheader='Poznaj najlepsze tytuły ze świata gier z różnych kategorii.'
      />
      <CategoryList />
      {children}
    </article>
  );
}
