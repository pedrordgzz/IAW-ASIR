import Link from 'next/link'

// Pagina 404 cuando no se encuentra algo
export default function NotFound() {
    return (
        <div className="not-found">
            <h2>Pagina no encontrada</h2>
            <p>Lo sentimos, no pudimos encontrar lo que buscas</p>
            <Link href="/">Volver al inicio</Link>
        </div>
    )
}
