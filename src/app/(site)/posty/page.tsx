import { AllPosts } from '@/components/templates/AllPosts';
import { getAllPosts } from '@/lib/postsUtils';

export default function PostsPage() {
  return <AllPosts posts={getAllPosts()} />;
}
