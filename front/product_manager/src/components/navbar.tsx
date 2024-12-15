import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./common/logo";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto gap-4 ms-5">
            <Nav.Link href="#home" className="text-black border-split">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-black border-split">
              Products
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-black border-split">
              Cateogires
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-black border-split">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
