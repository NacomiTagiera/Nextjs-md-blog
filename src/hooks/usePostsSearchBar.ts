import { ChangeEvent, useState } from 'react';

import Post from '../interfaces/Post';

export default function usePostsSearchBar({
  posts,
  onSearch,
}: {
  posts: Post[];
  onSearch: (posts: Post[]) => void;
}) {
  const [value, setValue] = useState<string>('');

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const searchValue = value.trim().toLowerCase();
    const filteredPosts = posts.filter(
      ({ title, excerpt }) =>
        title.toLowerCase().includes(searchValue) ||
        excerpt.toLowerCase().includes(searchValue)
    );

    onSearch(filteredPosts);
    setValue(value);
  };

  return { value, handleInputChange };
}
