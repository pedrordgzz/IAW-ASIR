import { notFound } from 'next/navigation'
import Link from 'next/link'

// Componentes para cada seccion del menu
const secciones: Record<string, { titulo: string, contenido: React.ReactNode }> = {
    noticias: {
        titulo: 'Noticias',
        contenido: (
            <div className="seccion-content">
                <h2>📰 Últimas Noticias</h2>
                <ul className="lista-noticias">
                    <li>Nueva convocatoria de becas 2026</li>
                    <li>Jornadas de puertas abiertas en febrero</li>
                    <li>Resultados de las olimpiadas de informática</li>
                </ul>
            </div>
        )
    },
    oferta: {
        titulo: 'Oferta Educativa',
        contenido: (
            <div className="seccion-content">
                <h2>📚 Oferta Educativa</h2>
                <div className="ciclos">
                    <h3>Ciclos Formativos</h3>
                    <ul>
                        <li>ASIR - Administración de Sistemas Informáticos en Red</li>
                        <li>DAW - Desarrollo de Aplicaciones Web</li>
                        <li>SMR - Sistemas Microinformáticos y Redes</li>
                    </ul>
                </div>
            </div>
        )
    },
    biblioteca: {
        titulo: 'Biblioteca Escolar',
        contenido: (
            <div className="seccion-content">
                <h2>📖 Biblioteca Escolar</h2>
                <p>Horario: Lunes a Viernes de 8:00 a 14:30</p>
                <p>Más de 5000 libros disponibles para préstamo.</p>
            </div>
        )
    },
    contacto: {
        titulo: 'Contacto',
        contenido: (
            <div className="seccion-content">
                <h2>📞 Contacto</h2>
                <p><strong>Email:</strong> info@iescuravalera.es</p>
                <p><strong>Teléfono:</strong> 950 123 456</p>
                <p><strong>Dirección:</strong> Avda. Guillermo Reyna, 35 - 04600 Huércal-Overa</p>
            </div>
        )
    }
}

// Lista de secciones disponibles (para validar rutas)
const seccionesDisponibles = Object.keys(secciones)

// Componente de lista de enlaces (como el ejemplo del usuario)
function SeccionList({ items }: { items: string[] }) {
    return (
        <ul className="seccion-list">
            {items.map((item) => (
                <li key={item}>
                    <Link href={`/instituto/${item}`}>{secciones[item]?.titulo || item}</Link>
                </li>
            ))}
        </ul>
    )
}

// Pagina dinamica - segun la ruta pinta un componente u otro
export default async function SeccionPage({ params }: { params: Promise<{ seccion: string }> }) {
    const { seccion } = await params

    // si la seccion no existe, mostramos 404
    if (!seccionesDisponibles.includes(seccion)) {
        notFound()
    }

    const seccionActual = secciones[seccion]

    return (
        <div className="pagina-seccion">
            <nav className="breadcrumb-nav">
                <Link href="/instituto">Inicio</Link> / <span>{seccionActual.titulo}</span>
            </nav>

            {seccionActual.contenido}

            <div className="otras-secciones">
                <h4>Otras secciones:</h4>
                <SeccionList items={seccionesDisponibles.filter(s => s !== seccion)} />
            </div>
        </div>
    )
}
