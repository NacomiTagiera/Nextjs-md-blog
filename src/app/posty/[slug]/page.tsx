import { notFound } from 'next/navigation';

import PostBody from '@/components/Post/PostBody';
import PostHeader from '@/components/Post/PostHeader';
import markdownToHtml from '@/lib/markdownToHtml';
import { getAllPosts, getPostData } from '@/lib/postsUtils';

export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const { slug } = params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Nie znaleziono wpisu',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getAllPosts();
  const { slug } = params;

  if (!posts.find((post) => post.slug === slug)) notFound();

  const { content, date, excerpt, thumbnail, title } = getPostData(slug);
  const contentHtml = await markdownToHtml(content);

  return (
    <article>
      <PostHeader
        date={date}
        excerpt={excerpt}
        thumbnail={thumbnail}
        title={title}
      />
      <PostBody content={contentHtml} />
    </article>
  );
}
