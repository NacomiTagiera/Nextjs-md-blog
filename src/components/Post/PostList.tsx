import { type Post } from '@/types/Post';

import { PostPreview } from './PostPreview';

export const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className='grid justify-center gap-5 duration-500 animate-in fade-in md:grid-cols-2 xl:grid-cols-3 xl:gap-7'>
      {posts.map((post, index) => (
        <PostPreview key={index} priority={index < 3} {...post} />
      ))}
    </ul>
  );
};
