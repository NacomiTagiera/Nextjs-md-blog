import { type MetadataRoute } from 'next';

import { getAllCategories, getAllPosts } from '@/lib/postsUtils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kocham-gry.vercel.app';

  const routes = ['/', '/posty', '/kontakt'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const posts = getAllPosts();
  const postsUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  const categories = getAllCategories();
  const categoriesUrls = categories.map((category) => ({
    url: `${baseUrl}/posty/${category}`,
    lastModified: new Date(),
  }));

  return [...routes, ...postsUrls, ...categoriesUrls];
}
