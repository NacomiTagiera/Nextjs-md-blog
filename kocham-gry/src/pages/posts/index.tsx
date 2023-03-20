import { getPopularPosts } from "@/lib/api";
import PostList from "@/components/Post/PostList";
import { Post } from "@/interfaces/post";

interface Props {
  popularPosts: Post[];
}

export default function Posts({ popularPosts }: Props) {
  console.log(popularPosts);
  return (
    <article>
      <PostList posts={popularPosts} />
    </article>
  );
}

export const getStaticProps = async () => {
  const popularPosts = getPopularPosts();

  return {
    props: { popularPosts },
  };
};
