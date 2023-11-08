import { AllPosts } from '@/components/templates/AllPosts';
import { getAllPosts } from '@/lib/postsUtils';

export default function PostsPage() {
  const posts = getAllPosts();
  return <AllPosts posts={posts} />;
}
