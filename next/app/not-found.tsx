import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h1>Página no encontrada</h1>  
            <img src="/next.svg" alt="next" width={100} />
            <Link href="/">Volver a la página principal</Link>
        </div>
    ); }