import { useMemo } from 'react';

import { useSearchParams } from 'next/navigation';

import type { Post, SortingOption } from '@/types';
import { convertText } from '@/utils/convertText';

export const useFilterPosts = (posts: Post[], postsCategory?: string) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('fraza');
  const sortingOption = (searchParams.get('order') || 'najnowsze') as SortingOption;

  const filteredPosts = useMemo(() => {
    let filteredPosts = posts || [];

    if (postsCategory) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          convertText(post.category, { withHyphens: true }) ===
          convertText(postsCategory, { withHyphens: true })
      );
    }

    if (searchQuery) {
      filteredPosts = filteredPosts.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    }

    switch (sortingOption) {
      case 'najstarsze':
        filteredPosts.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
        break;
      case 'alfabetycznie':
        filteredPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        filteredPosts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)); // najnowsze
        break;
    }

    return filteredPosts;
  }, [posts, postsCategory, searchQuery, sortingOption]);

  return filteredPosts;
};
