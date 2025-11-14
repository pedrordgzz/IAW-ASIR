import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  BsHouseDoorFill,
  BsTelephoneFill,
  BsBriefcaseFill,
  BsNewspaper
} from 'react-icons/bs';

export const Navbar = () => {
  return (
    <nav className="navbar-simple">
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/"><BsHouseDoorFill /><span>Inicio</span></Nav.Link>

        <Nav.Link as={Link} to="/contacto"><BsTelephoneFill /><span>Contacto</span></Nav.Link>

        <Nav.Link as={Link} to="/fotos"><BsBriefcaseFill /><span>Fotos</span></Nav.Link>

        <NavDropdown title={<span><BsNewspaper /><span>Noticias</span></span>} id="nav-dropdown-noticias">
          <NavDropdown.Item as={Link} to="/noticias/jefatura">Jefatura</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/noticias/igualdad">Igualdad</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </nav>
  );
};