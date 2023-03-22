import PostPreview from "./PostPreview";
import { Post } from "@/interfaces/post";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 mt-10 mb-14">
      {posts.map((post, index) => (
        <PostPreview
          key={index}
          category={post.category}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
          thumbnail={post.thumbnail}
          title={post.title}
        />
      ))}
    </ul>
  );
}
