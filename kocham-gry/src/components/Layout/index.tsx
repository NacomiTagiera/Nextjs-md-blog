import { Fragment, ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <Navbar />
      <main className="flex-grow mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
