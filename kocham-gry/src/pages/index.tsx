import { getAllPosts } from "@/lib/api";
import Intro from "@/components/Home/Intro";
import PostList from "@/components/Home/PostList";
import { Post } from "@/interfaces/post";

interface Props {
  allPosts: Post[];
}

export default function Home({ allPosts }: Props) {
  return (
    <article>
      <Intro />
      <PostList posts={allPosts} />
    </article>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "category",
    "content",
    "excerpt",
    "slug",
    "thumbnail",
    "title",
  ]);

  return {
    props: { allPosts },
  };
};
