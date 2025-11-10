import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Actividad_rutas from './Actividades/Actividad_rutas.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Actividad_rutas/>
  </StrictMode>,


)
