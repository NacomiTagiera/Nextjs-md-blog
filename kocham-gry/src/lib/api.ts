import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/interfaces/post";

const POSTS_DIRECTORY = path.join(process.cwd(), "src/posts");
const POPULAR_POSTS_COUNT = 3;

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);
    const { category, date, excerpt, isPopular, title, thumbnail } = data;

    return {
      category,
      content,
      date,
      excerpt,
      isPopular,
      slug,
      thumbnail,
      title,
    };
  });
  posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
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
