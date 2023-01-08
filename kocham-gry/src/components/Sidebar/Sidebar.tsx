import { CommonProps, ISidebar } from "../../types/main";

export default function Sidebar({ children, isSticky = true }: ISidebar) {
  return (
    <aside
      className={`mt-5 ${isSticky ? "sticky-top" : ""}`}
      style={{ top: "10rem", zIndex: 0 }}
    >
      {children}
    </aside>
  );
}
