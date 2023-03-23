import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Post } from "@/interfaces/post";

const POSTS_DIRECTORY = path.join(process.cwd(), "src/posts");
const POPULAR_POSTS_COUNT = 3;

export function getPostsFiles() {
  return fs.readdirSync(POSTS_DIRECTORY);
}

export function getPostData(postIdentifier: string): Post {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(POSTS_DIRECTORY, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
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
}

export function getAllPosts(): Post[] {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();

  const filteredPosts = allPosts.filter((post) => post.category === category);

  return filteredPosts;
}

export function getPopularPosts(): Post[] {
  const allPosts = getAllPosts();

  const popularPosts = allPosts.filter((post) => post.isPopular);
  popularPosts
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, POPULAR_POSTS_COUNT);

  return popularPosts;
}
