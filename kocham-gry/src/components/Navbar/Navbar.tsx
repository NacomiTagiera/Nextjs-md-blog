import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Controller } from "react-bootstrap-icons";
import "./Navbar.scss";

export default function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" className="mb-5">
      <Container fluid>
        <Navbar.Brand href="/" className="nav-link mx-2 mx-lg-3">
          <Controller className="controller" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" className="me-2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Strona główna</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Bijatyki">
              <NavDropdown.Item href="Mortal_Kombat">
                Mortal Kombat
              </NavDropdown.Item>
              <NavDropdown.Item href="Tekken">Tekken</NavDropdown.Item>
              <NavDropdown.Item href="Street_Fighter">
                Street Fighter
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Strzelanki">
              <NavDropdown.Item href="Call_of_Duty">
                Call of Duty
              </NavDropdown.Item>
              <NavDropdown.Item href="CS:GO">CS:GO</NavDropdown.Item>
              <NavDropdown.Item href="PUBG">PUBG</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gry sportowe">
              <NavDropdown.Item href="FIFA">FIFA</NavDropdown.Item>
              <NavDropdown.Item href="NBA_2K">NBA 2K</NavDropdown.Item>
              <NavDropdown.Item href="F1">F1</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Gry karciane">
              <NavDropdown.Item href="Gwint">Gwint</NavDropdown.Item>
              <NavDropdown.Item href="Hearthstone">
                Hearthstone
              </NavDropdown.Item>
              <NavDropdown.Item href="Faeria">Faeria</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="O_autorze">O autorze</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
