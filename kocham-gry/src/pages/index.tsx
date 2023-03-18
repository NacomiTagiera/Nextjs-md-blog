import { getAllPosts } from "@/lib/api";
import { Post } from "@/interfaces/post";

interface Props {
  allPosts: Post[];
}

export default function Home({ allPosts }: Props) {
  return <div>Home</div>;
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
