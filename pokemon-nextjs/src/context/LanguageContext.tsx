// contexto de idioma para toda la aplicacion
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { obtenerDiccionario_App, Dictionary } from '@/lib/dictionaries';

// tipo del contexto
type LanguageContextType = {
    idioma: string;
    setIdioma: (lang: string) => void;
    dict: Dictionary;
};

// crear el contexto
const LanguageContext = createContext<LanguageContextType | null>(null);

// provider del idioma
export function ProveedorIdioma_App({ children }: { children: ReactNode }) {
    const [idioma, setIdioma] = useState('es');
    const dict = obtenerDiccionario_App(idioma);

    return (
        <LanguageContext.Provider value={{ idioma, setIdioma, dict }}>
            {children}
        </LanguageContext.Provider>
    );
}

// hook para usar el idioma
export function useIdioma() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useIdioma debe usarse dentro de ProveedorIdioma_App');
    }
    return context;
}
