'use client';

import Image from 'next/image';
import { useIdioma } from '@/context/LanguageContext';

export default function SelectorIdioma_App() {
    const { setIdioma } = useIdioma();
    // funcion para cambiar el idioma
    const changeLanguage = (lang: string) => {
        setIdioma(lang);
    };

    return (
        <div className="d-flex gap-2">
            <button
                onClick={() => changeLanguage('es')}
                className="btn btn-sm p-1"
                title="Español"
            >
                <Image src="/spain.png" alt="Español" width={24} height={24} unoptimized={true} />
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className="btn btn-sm p-1"
                title="English"
            >
                <Image src="/uk.png" alt="English" width={24} height={24} unoptimized={true} />
            </button>
            <button
                onClick={() => changeLanguage('fr')}
                className="btn btn-sm p-1"
                title="Français"
            >
                <Image src="/france.png" alt="Français" width={24} height={24} unoptimized={true} />
            </button>
        </div>
    );
}
