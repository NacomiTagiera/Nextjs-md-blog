import { Fragment } from "react";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

import { getPostData, getPostsFiles } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Intro from "@/components/Common/Intro";
import PostHeader from "@/components/Post/PostHeader";
import PostBody from "@/components/Post/PostBody";
import Post from "@/interfaces/Post";

interface Props {
  post: Post;
}

export default function PostPage({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Fragment>
      {router.isFallback ? (
        <Intro header="Loading" introText="" />
      ) : (
        <article>
          <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.excerpt} />
          </Head>
          <PostHeader
            date={post.date}
            excerpt={post.excerpt}
            thumbnail={post.thumbnail}
            title={post.title}
          />
          <PostBody content={post.content} />
        </article>
      )}
    </Fragment>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const postData = getPostData(params.slug);
  const content = await markdownToHtml(postData.content || "");

  return {
    props: {
      post: {
        ...postData,
        content,
      },
      revalidate: 600,
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
