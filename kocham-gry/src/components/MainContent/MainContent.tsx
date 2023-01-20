import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainContent({ children }: Props) {
  return (
    <main className="mt-5">
      <article className="bg-white py-1 px-4 text-body">{children}</article>
    </main>
  );
}
