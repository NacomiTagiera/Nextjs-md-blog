import { getPopularPosts } from "@/lib/api";
import Intro from "@/components/Common/Intro";
import PostList from "@/components/Post/PostList";
import { Post } from "@/interfaces/post";

interface Props {
  popularPosts: Post[];
}

export default function Posts({ popularPosts }: Props) {
  return (
    <article>
      <Intro
        header="Popularne wpisy"
        introText="Witaj na moim blogu poświęconym najlepszym grom komputerowym!"
      />
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
