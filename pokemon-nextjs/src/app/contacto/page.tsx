'use client';
import { useIdioma } from '@/context/LanguageContext';

export default function PaginaContacto_App() {
    const { dict } = useIdioma();

    return (
        <div className="contacto-page">
            <h1>{dict.contacto}</h1>
            <p className="lead mt-4">{dict.contactoTexto}</p>
        </div>
    );
}
