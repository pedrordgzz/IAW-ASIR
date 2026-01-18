'use client'

import { useState } from 'react'
import Link from 'next/link'

// Menu de navegacion con rutas dinamicas
export default function NavBar() {
    const [busqueda, setBusqueda] = useState('')

    // opciones del menu - ahora usan rutas dinamicas
    const menu = [
        { nombre: 'Inicio', url: '/instituto' },
        {
            nombre: 'Noticias',
            url: '/instituto/noticias',
            submenu: [
                { nombre: 'Últimas noticias', url: '/instituto/noticias' },
                { nombre: 'Archivo', url: '/instituto/noticias' },
                { nombre: 'Eventos', url: '/instituto/noticias' }
            ]
        },
        {
            nombre: 'Oferta Educativa',
            url: '/instituto/oferta',
            submenu: [
                { nombre: 'ESO', url: '/instituto/oferta' },
                { nombre: 'Bachillerato', url: '/instituto/oferta' },
                { nombre: 'FP Básica', url: '/instituto/oferta' },
                { nombre: 'Ciclos Formativos', url: '/instituto/oferta' }
            ]
        },
        {
            nombre: 'Biblioteca Escolar',
            url: '/instituto/biblioteca',
            submenu: [
                { nombre: 'Catálogo', url: '/instituto/biblioteca' },
                { nombre: 'Novedades', url: '/instituto/biblioteca' },
                { nombre: 'Horarios', url: '/instituto/biblioteca' }
            ]
        },
        { nombre: 'Contacto', url: '/instituto/contacto' }
    ]

    return (
        <nav className="navbar">
            <ul className="nav-menu">
                {menu.map((item, i) => (
                    <li key={i} className="nav-item">
                        <Link href={item.url} className="nav-link">
                            {item.nombre}
                            {item.submenu && <span className="dropdown-arrow">▼</span>}
                        </Link>
                        {/* submenu desplegable con enlaces dinamicos */}
                        {item.submenu && (
                            <ul className="dropdown-menu">
                                {item.submenu.map((sub, j) => (
                                    <li key={j}>
                                        <Link href={sub.url} className="dropdown-link">{sub.nombre}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            {/* buscador */}
            <div className="nav-search">
                <input
                    type="text"
                    placeholder="Search"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="search-input"
                />
                <button className="search-button">Search</button>
            </div>
        </nav>
    )
}
