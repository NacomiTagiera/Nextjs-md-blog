import CommonProps from "../types/commonProps";

export default function Sidebar({ children }: CommonProps) {
  return (
    <aside className="mt-5 sticky-top" style={{ top: "10rem" }}>
      {children}
    </aside>
  );
}
