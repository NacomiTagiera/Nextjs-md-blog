import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Kocham Gry</title>
        <meta
          name="description"
          content="Witaj na moim blogu poświęconym najlepszym grom komputerowym!"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
