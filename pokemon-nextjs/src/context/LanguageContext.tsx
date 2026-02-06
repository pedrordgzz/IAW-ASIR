'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { obtenerDiccionario_App, Dictionary } from '@/lib/dictionaries';

type LanguageContextType = {
    idioma: string;
    setIdioma: (lang: string) => void;
    dict: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function ProveedorIdioma_App({ children }: { children: ReactNode }) {
    const [idioma, setIdioma] = useState('es');
    const dict = obtenerDiccionario_App(idioma);

    return (
        <LanguageContext.Provider value={{ idioma, setIdioma, dict }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useIdioma() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useIdioma debe usarse dentro de ProveedorIdioma_App');
    }
    return context;
}
