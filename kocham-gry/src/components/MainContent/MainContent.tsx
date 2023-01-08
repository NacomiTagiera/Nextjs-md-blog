import { CommonProps } from "../../types/main";

export default function MainContent({ children }: CommonProps) {
  return (
    <main className="mt-5">
      <article className="bg-white py-1 px-4 text-body">{children}</article>
    </main>
  );
}
