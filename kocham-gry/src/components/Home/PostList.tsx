import PostPreview from "../Post/PostPreview";
import { Post } from "@/interfaces/post";

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul className="divide-y divide-red-400">
      {posts.map((post) => (
        <li key={post.slug} className="py-12">
          <PostPreview
            category={post.category}
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
