import { Fragment, ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Fragment>
      <div className="flex-grow">
        <Header />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </Fragment>
  );
}
