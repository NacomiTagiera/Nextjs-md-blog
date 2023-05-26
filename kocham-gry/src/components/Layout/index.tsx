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
      <main className="flex-grow mx-auto mb-32 max-w-4xl px-4 sm:px-6 xl:max-w-6xl xl:px-0">
        {children}
      </main>
      <Footer />
    </Fragment>
  );
}
