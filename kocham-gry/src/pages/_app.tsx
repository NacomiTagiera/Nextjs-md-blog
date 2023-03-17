import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Kocham Gry</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is a blog about my favourite video games."
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
