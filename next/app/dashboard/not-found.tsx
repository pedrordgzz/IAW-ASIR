import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h1>Página no encontrada, este es el error para administradores</h1>  
            <Link href="/">Volver a la página principal</Link>
        </div>
    ); }