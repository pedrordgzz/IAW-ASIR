'use client';

import Link from 'next/link';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useIdioma } from '@/context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbarra_App() {
    const { dict } = useIdioma();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        {/* enlace a inicio */}
                        <Nav.Link as={Link} href="/">
                            {dict.inicio}
                        </Nav.Link>

                        {/* dropdown de generaciones */}
                        <NavDropdown title={dict.generaciones} id="generaciones-dropdown">
                            <NavDropdown.Item as={Link} href="/generacion/1">
                                {dict.primeraGen}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/generacion/2">
                                {dict.segundaGen}
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/generacion/3">
                                {dict.terceraGen}
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* enlace a contacto */}
                        <Nav.Link as={Link} href="/contacto">
                            {dict.contacto}
                        </Nav.Link>
                    </Nav>

                    {/* selector de idioma */}
                    <LanguageSelector />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
