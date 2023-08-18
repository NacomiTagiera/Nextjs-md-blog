import Post from '@/interfaces/Post';

type Props = Pick<Post, 'content'>;

export default function PostBody({ content }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
