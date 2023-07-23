import Post from '@/interfaces/Post';

import PostPreview from './PostPreview';

interface Props {
  posts: Post[];
}

export default function PostList({ posts }: Props) {
  return (
    <ul className='mb-14 mt-10 grid justify-center gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-7'>
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
