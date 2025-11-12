import React from 'react';
import {BsFacebook,BsTwitter,BsLinkedin,} from 'react-icons/bs';

export const Footer = () => {
  return (
    <footer className="footer-simple">
      <p>&copy; Pedro Rodríguez 2025. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><BsFacebook/></a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><BsTwitter/></a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><BsLinkedin/></a>
      </div>
    </footer>
  );
};
  