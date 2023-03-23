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
        header="Wszystkie wpisy"
        introText="Poznaj najlepsze tytuły ze świata gier z różnych kategorii"
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
