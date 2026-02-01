import Link from 'next/link';

export default function NoEncontrado_App() {
    return (
        <div className="not-found">
            <h2>404 - Pagina no encontrada</h2>
            <p>Lo sentimos, no pudimos encontrar la pagina que buscas.</p>
            <Link href="/" className="btn btn-primary">
                Volver al inicio
            </Link>
        </div>
    );
}
