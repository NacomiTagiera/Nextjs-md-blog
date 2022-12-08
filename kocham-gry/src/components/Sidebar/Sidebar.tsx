import CommonProps from "../types/commonProps";

export default function Sidebar({ children }: CommonProps) {
  return <aside className="my-5 position-fixed">{children}</aside>;
}
