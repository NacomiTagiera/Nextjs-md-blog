import { ListGroup } from "react-bootstrap";
import { Link } from "react-scroll";
import { ISidebarLink } from "../../types/main";

export default function SidebarLink({ children, sectionId }: ISidebarLink) {
  return (
    <ListGroup.Item as="li" variant="dark" action>
      <Link activeClass="text-primary" to={sectionId} spy={true} offset={-65}>
        {children}
      </Link>
    </ListGroup.Item>
  );
}
