import PostPreview from "./PostPreview";
import { Post } from "@/interfaces/post";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul className="divide-y divide-red-400">
      {posts.map((post, index) => (
        <li key={index} className="py-12">
          <PostPreview
            category={post.category}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
            thumbnail={post.thumbnail}
            title={post.title}
          />
        </li>
      ))}
    </ul>
  );
}
