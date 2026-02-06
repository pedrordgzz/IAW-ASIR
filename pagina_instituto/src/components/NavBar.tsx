'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function NavBar() {
    // Estado para el texto del buscador
    const [busqueda, setBusqueda] = useState('')

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
            {/* Lista de elementos del menu */}
            <ul className="nav-menu">
                {/* funcion que recorre el array, y por cada item, renderiza un <li>*/}
                {menu.map((item, i) => (
                    <li key={i} className="nav-item">
                        {/* Enlace principal */}
                        <Link href={item.url} className="nav-link">
                            {item.nombre}
                            {/* Si tiene submenu, muestra flecha */}
                            {item.submenu && <span className="dropdown-arrow">▼</span>}
                        </Link>

                        {item.submenu && (
                            <ul className="dropdown-menu">
                                {item.submenu.map((sub, j) => (
                                    <li key={j}>
                                        <Link href={sub.url} className="dropdown-link">
                                            {sub.nombre}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* ============================================
                BUSCADOR
                Input controlado por React (el valor viene del estado)
            ============================================ */}
            <div className="nav-search">
                {/* 
                  Input controlado:
                  - value={busqueda} = el valor viene del estado
                  - onChange = actualiza el estado cuando escribe
                */}
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
