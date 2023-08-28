import Intro from '@/components/Common/Intro';
import PostList from '@/components/Post/PostList';
import { getPopularPosts } from '@/lib/postsUtils';

export default function HomePage() {
  const posts = getPopularPosts();

  return (
    <article>
      <Intro
        header='Popularne wpisy'
        introText='Witaj na moim blogu poświęconym najlepszym grom komputerowym!'
      />
      <PostList posts={posts} />
    </article>
  );
}
