import React from 'react';
import { Header } from './componentes/header';
import { Navbar } from './componentes/navbar';
import { Body } from './componentes/body';
import { Aside } from './componentes/aside';
import { Footer } from './componentes/footer';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Navbar />

      <main className="main-content">
          <div className="contenido-principal"><Body /></div>
          <aside className="barra-lateral-simple"><Aside /></aside>
      </main>

      <Footer />
    </div>
  )
};