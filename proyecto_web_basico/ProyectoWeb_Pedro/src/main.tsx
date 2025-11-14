import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Actividad_outlet from './componentes/actividad_outlet';
import Actividad_rutas from './componentes/actividad_rutas';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>ç
    <App/>
    
    // <Actividad_outlet/>  // Descomentar para usar el componente Actividad_outlet en lugar de App
    // <Actividad_rutas/> // Descomentar para usar el componente Actividad_rutas en lugar de App
  </React.StrictMode>,
);