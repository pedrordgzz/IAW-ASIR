import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <img 
        src= '../../public/flash-4281077.svg'
        className="header-logo" 
        alt="Logo del Instituto" 
        style={{ width: '80px', height: '80px', marginRight: '20px', zIndex: 2 }} 
      />

      <div className="header-texto">
        <h1>Web Básica con React Pedro</h1>
      </div>
    </header>
  );
};