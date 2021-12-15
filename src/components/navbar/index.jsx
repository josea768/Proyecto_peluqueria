import React from "react";
import { NavLink, Navbar, Nav, Container,} from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink href="/">Peluqueria</NavLink>
        <Nav className="me-auto">
          <NavLink href="/calificar">Calificación</NavLink>
        </Nav>
      </Container>
    </Navbar>
    </div>

  );
}

export default NavBar;