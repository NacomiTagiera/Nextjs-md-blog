import Head from "next/head";

import { getPopularPosts } from "@/lib/api";
import Intro from "@/components/Common/Intro";
import PostList from "@/components/Post/PostList";
import { Post } from "@/interfaces/Post";

interface Props {
  popularPosts: Post[];
}

export default function Posts({ popularPosts }: Props) {
  return (
    <article>
      <Head>
        <title>Kocham Gry</title>
        <meta
          name="description"
          content="Witaj na moim blogu poświęconym najlepszym grom komputerowym!"
        />
      </Head>
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
