import { ListGroup } from "react-bootstrap";
import { Link } from "react-scroll";
import CommonProps from "../types/commonProps";

interface Props extends CommonProps {
  sectionId: string;
}

export default function SidebarLink({ children, sectionId }: Props) {
  return (
    <ListGroup.Item as="li">
      <Link activeClass="text-primary" to={sectionId} spy={true} offset={-65}>
        {children}
      </Link>
    </ListGroup.Item>
  );
}
