import CommonProps from "../types/commonProps";
import "./Sidebar.scss";

interface Props extends CommonProps {
  imgAlt: string;
  imgSrc: string;
}

export default function Sidebar({ children, imgAlt, imgSrc }: Props) {
  return (
    <aside className="mt-5">
      <img className="img-fluid w-100 h-auto img" src={imgSrc} alt={imgAlt} />
      {children}
    </aside>
  );
}
