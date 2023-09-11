import { type Post } from '@/types/Post';

import PostPreview from './PostPreview';

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className='mb-14 mt-10 grid justify-center gap-5 duration-500 animate-in fade-in md:grid-cols-2 xl:grid-cols-3 xl:gap-7'>
      {posts.map((post, index) => (
        <PostPreview
          key={index}
          category={post.category}
          date={post.date}
          excerpt={post.excerpt}
          slug={post.slug}
          thumbnail={post.thumbnail}
          title={post.title}
          priority={index < 3}
        />
      ))}
    </ul>
  );
}
