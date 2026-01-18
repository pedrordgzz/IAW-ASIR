import Link from 'next/link'

// Pagina 404 personalizada para rutas del instituto que no existen
export default function NotFound() {
    return (
        <div className="not-found-instituto">
            <h2>🔍 Página no encontrada</h2>
            <p>Lo sentimos, la sección que buscas no existe en el instituto.</p>
            <p>Puede que la página haya sido movida o eliminada.</p>
            <Link href="/instituto" className="btn-volver">
                ← Volver al inicio del instituto
            </Link>
        </div>
    )
}
