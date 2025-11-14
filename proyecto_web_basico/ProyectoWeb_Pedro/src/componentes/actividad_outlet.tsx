import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams, Outlet } from "react-router-dom";
import { Body, GaleriaCarrusel } from './body';
import { Navbar } from './navbar';

export default function Actividad_outlet() {

    return (
    <>  
      <Router>
        <header>
          <h1>Actividad Outlet</h1>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/fotos" element={<Fotos/>} />
            <Route path="/contacto" element={<Contacto/>} />
            
            <Route path="/noticias" element={<NoticiasLayout />}>
              <Route path=":categoria" element={<NoticiaCategoria />} />
            </Route>
            <Route path="*" element={<Nopage/>} />     
          </Routes>
        </main>
        <footer>
        </footer>
      </Router>
    </>
  )
}

function Inicio() {
  return <Body />;
}

function Fotos() {
  return <GaleriaCarrusel />;
}

function Contacto() {
  return <h2>ERROR: página no encontrada. ERROR 404</h2>;
}

function NoticiasLayout() {
  return (
    <div>
      <h2>Sección de Noticias</h2>
      <p>Noticias del instituto (Jefatura o Igualdad)</p>
      <Outlet /> 
    </div>
  );
}

function NoticiaCategoria() {
    const params = useParams();
    const { categoria } = params;
    if (categoria === 'jefatura' || categoria === 'igualdad') {
        return <h3>Mostrando noticias de: {categoria}</h3>;
    } 
    else {
        return <h3>Categoría de noticia no encontrada.</h3>;
    }
}

function Nopage() {
    return <h2>Página no encontrada, ruta no válida</h2>;
}