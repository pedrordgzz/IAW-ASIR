import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

export default function Web2() {
  return (
    <>  
      <Router>
        <header>
        <h1>Actividad Outlet</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/:nombre" element={<MySkills/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/about/:nombre" element={<About/>} />
            <Route path="*" element={<Nopage/>} />      
            
          </Routes>
        </main>
        <footer>

        </footer>
      </Router>
    </>
  )
}

function MySkills() {
    //Lectura del parámetro de la URL
    const params = useParams();
    return <h2>Parámetro introducido: {params.nombre}</h2>;
}

function Nopage() {
    //Lectura del parámetro de la URL
    return <h2></h2>;
}

function Inicio() {
  return <h1>Página inicial de IAW</h1>;
}
function Contacto() {
  return <h2>ERROR: página no encontrada. ERROR 404</h2>;
}

function About() {
  const params = useParams();
// Con esta condición verifico si el parámetro es "ana".
  if (params.nombre === 'domingo') {
      return <h1> Bienvenida a la página de {params.nombre}</h1>;
  }
// Con esta verifico si el parámetro es "pepe".
 if (params.nombre === 'morgado') {
      return <h1>Bienvenido a la página de {params.nombre} </h1>;
  }
}