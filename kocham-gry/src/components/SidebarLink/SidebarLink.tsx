import { ReactNode } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-scroll";

interface Props {
  children: ReactNode;
  sectionId: string;
}

export default function SidebarLink({ children, sectionId }: Props) {
  return (
    <ListGroup.Item as="li" variant="dark" action>
      <Link activeClass="text-primary" to={sectionId} spy={true} offset={-65}>
        {children}
      </Link>
    </ListGroup.Item>
  );
}
