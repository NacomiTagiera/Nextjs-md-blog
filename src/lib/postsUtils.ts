import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import Post from '@/interfaces/Post';
import { POPULAR_POSTS_COUNT } from '@/utils/constants';
import convertText from '@/utils/convertText';

const POSTS_DIRECTORY = path.join(process.cwd(), 'src/_posts');

export const getPostsFiles = () => fs.readdirSync(POSTS_DIRECTORY);

export const getPostData = (postIdentifier: string): Post => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(POSTS_DIRECTORY, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const { category, date, excerpt, isPopular, title, thumbnail } = data;

  const PostData: Post = {
    category,
    content,
    date,
    excerpt,
    isPopular,
    slug: postSlug,
    thumbnail,
    title,
  };

  return PostData;
};

export const getAllPosts = (): Post[] => {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((a, b) =>
    Date.parse(a.date) > Date.parse(b.date) ? -1 : 1
  );

  return sortedPosts;
};

export const getPopularPosts = (): Post[] => {
  const popularPosts = getAllPosts().filter((post) => post.isPopular);
  popularPosts.slice(0, POPULAR_POSTS_COUNT);

  return popularPosts;
};

export const getAllCategories = () => {
  const categories = getAllPosts().map((post) => post.category);

  return Array.from(new Set(categories));
};

export const getPostsByCategory = (category: string) =>
  getAllPosts().filter(
    (post) => convertText(post.category, { withHyphens: true }) === category
  );
