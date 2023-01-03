import CommonProps from "../types/commonProps";

interface Props extends CommonProps {
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
