import { type ChangeEvent, useState } from 'react';

import { type Post } from '../types/Post';

export const usePostsSearchBar = ({
  posts,
  onSearch,
}: {
  posts: Post[];
  onSearch: (posts: Post[]) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const searchValue = value.trim().toLowerCase();
    const filteredPosts = posts.filter(({ title }) => title.toLowerCase().includes(searchValue));

    onSearch(filteredPosts);
    setSearchTerm(value);
  };

  return { searchTerm, handleInputChange };
};
