import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { type Post } from '@/types/Post';
import { convertText } from '@/utils/convertText';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/_posts');

export const getPostsFiles = () => fs.readdirSync(POSTS_DIRECTORY);

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

export const getPostsByCategory = (category: string) =>
  getAllPosts().filter(
    (post) =>
      convertText(post.category, { withHyphens: true }) ===
      convertText(category, { withHyphens: true })
  );

export const getAllCategories = () => {
  const categories = getAllPosts().map((post) => post.category);

  return Array.from(new Set(categories));
};
