import { getAllPosts } from "@/lib/api";
import Intro from "@/components/Common/Intro";
import PostList from "@/components/Post/PostList";
import { Post } from "@/interfaces/post";

interface Props {
  allPosts: Post[];
}

export default function Home({ allPosts }: Props) {
  return (
    <article>
      <Intro
        header="Popularne wpisy"
        introText="Witaj na moim blogu poświęconym najlepszym grom komputerowym!"
      />
      <PostList posts={allPosts} />
    </article>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
