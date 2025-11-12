import React from 'react';
import {BsHouseDoorFill,BsTelephoneFill,BsBriefcaseFill,} from 'react-icons/bs';

export const Navbar = () => {
  return (
    <nav className="navbar-simple">
      <a href="#inicio"><BsHouseDoorFill /><span>Inicio</span></a>

      <a href="#contacto"><BsTelephoneFill /><span>Contacto</span></a>

      <a href="#servicios"><BsBriefcaseFill /><span>Servicios</span></a>
    </nav>
  );
};