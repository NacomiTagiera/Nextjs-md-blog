import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { Post, SortingOption } from '@/types';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/_posts');

const getPostsFiles = () => fs.readdirSync(POSTS_DIRECTORY);

export const getPostData = (postIdentifier: string): Post => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(POSTS_DIRECTORY, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent) as unknown as {
    data: Omit<Post, 'content' | 'slug'>;
    content: string;
  };

  return {
    content,
    slug: postSlug,
    ...data,
  };
};

export const getAllPosts = (count?: number): Post[] => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return count ? allPosts.slice(0, count) : allPosts;
};

export const getFilteredAndSortedPosts = (
  postCategory?: string,
  searchQuery?: string,
  sortingOption?: SortingOption
) => {
  let posts = getAllPosts();

  if (postCategory) {
    posts = posts.filter(({ category }) => category === postCategory);
  }

  if (searchQuery) {
    posts = posts.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
  }

  switch (sortingOption) {
    case 'najstarsze':
      posts = posts.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      break;
    case 'alfabetycznie':
      posts = posts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      posts = posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)); // najnowsze
      break;
  }

  return posts;
};

export const getAllCategories = () => {
  const categories = getAllPosts().map((post) => post.category);

  return Array.from(new Set(categories));
};
