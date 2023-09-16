import { type Post } from '@/types/Post';

export const PostBody = ({ content }: { content: Post['content'] }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
