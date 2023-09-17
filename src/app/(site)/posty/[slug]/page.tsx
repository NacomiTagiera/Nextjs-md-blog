import { notFound } from 'next/navigation';

import { PostArticleBody } from '@/components/atoms/PostArticleBody';
import { PostArticleHeader } from '@/components/molecules/PostArticleHeader';
import { markdownToHtml } from '@/lib/markdownToHtml';
import { getAllPosts, getPostData } from '@/lib/postsUtils';

type Props = {
  params: {
    slug: string;
  };
};

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

export default async function PostPage({ params: { slug } }: Props) {
  const posts = getAllPosts();

  if (!posts.find((post) => post.slug === slug)) notFound();

  const post = getPostData(slug);
  const contentHtml = await markdownToHtml(post.content);

  return (
    <article className='prose prose-invert mx-auto max-w-3xl md:prose-lg lg:prose-xl prose-headings:text-seagreen prose-h4:italic prose-h4:text-light prose-p:text-justify'>
      <PostArticleHeader {...post} />
      <PostArticleBody content={contentHtml} />
    </article>
  );
}
