'use client';

import { useIdioma } from '@/context/LanguageContext';

export default function Footer_App() {
    const { dict } = useIdioma();

    return (
        <footer className="bg-dark text-white text-center py-3 mt-auto">
            <div className="container">
                <p className="mb-0">
                    {dict.titulo} - {new Date().getFullYear()} - {dict.derechos}
                </p>
            </div>
        </footer>
    );
}
