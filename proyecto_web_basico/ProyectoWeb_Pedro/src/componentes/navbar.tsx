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

        <a ><BsHouseDoorFill /><span>Inicio</span></a>

        <a><BsTelephoneFill /><span>Contacto</span></a>

        <a><BsBriefcaseFill /><span>Fotos</span></a>

    </nav>
  );
};