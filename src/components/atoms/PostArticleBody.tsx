import { type Post } from '@/types/Post';

export const PostArticleBody = ({ content }: { content: Post['content'] }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
