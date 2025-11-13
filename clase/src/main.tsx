import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Actividad_rutas from './Actividades/Actividad_rutas.tsx';
import Actividad_outlet from './Actividades/Actividad_outlet.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Actividad_outlet/>
  </StrictMode>,


)
