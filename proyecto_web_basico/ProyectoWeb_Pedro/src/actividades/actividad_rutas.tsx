import React from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import { IoIosWoman } from "react-icons/io";
import { IoIosMan } from "react-icons/io";

export default function Actividad_rutas() {
  return (
    <>
      <Router>
        <header>
          <h1>Actividad de la diapositiva</h1>
        </header>

        <main>
          <Routes>
            <Route path="/usuario/:nombre" element={<MySkills />} />
          </Routes>
        </main>
        <footer>

        </footer>
      </Router>
    </>
  )
}


function MySkills() {
  const params = useParams();

// Con esta condición verifico si el parámetro es "ana".
  if (params.nombre === 'ana') {
      return <h1><IoIosWoman /> Bienvenida a la página de {params.nombre}</h1>;
  }
// Con esta verifico si el parámetro es "pepe".
 if (params.nombre === 'pepe') {
      return <h1><IoIosMan /> Bienvenido a la página de {params.nombre} </h1>;
  }
}
