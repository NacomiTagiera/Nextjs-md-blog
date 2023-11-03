import { type Post } from '@/types';

export const PostArticleBody = ({ content }: { content: Post['content'] }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
