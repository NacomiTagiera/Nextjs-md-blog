import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isSticky?: boolean;
}

export default function Sidebar({ children, isSticky = true }: Props) {
  return (
    <aside
      className={`mt-5 ${isSticky ? "sticky-top" : ""}`}
      style={{ top: "10rem", zIndex: 0 }}
    >
      {children}
    </aside>
  );
}
