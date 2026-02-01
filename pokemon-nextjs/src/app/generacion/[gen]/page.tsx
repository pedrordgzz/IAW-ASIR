'use client';

import { useIdioma } from '@/context/LanguageContext';
import { obtenerPokemonsGeneracion_App, generaciones } from '@/lib/pokemon';
import { Pokemon } from '@/types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface PageProps {
    params: Promise<{ gen: string }>;
}

export default function PaginaGeneracion_App({ params }: PageProps) {
    const { gen } = use(params);
    const { dict, idioma } = useIdioma();
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // verificar que la generacion sea valida
    if (!generaciones[gen]) {
        notFound();
    }

    const nombreGen = generaciones[gen].nombre;

    // obtener el titulo segun la generacion
    const getTitulo = () => {
        if (nombreGen === 'Primera') return dict.primeraGen;
        if (nombreGen === 'Segunda') return dict.segundaGen;
        if (nombreGen === 'Tercera') return dict.terceraGen;
        return nombreGen;
    };

    useEffect(() => {
        const cargarPokemons = async () => {
            setCargando(true);
            try {
                // pasar idioma para obtener nombres traducidos
                const data = await obtenerPokemonsGeneracion_App(gen, 10, idioma);
                setPokemons(data);
                setError(null);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Error desconocido');
                }
            } finally {
                setCargando(false);
            }
        };

        cargarPokemons();
    }, [gen, idioma]);

    if (cargando) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>{dict.cargando}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <h2>{dict.error}</h2>
                <p>{error}</p>
                <button className="btn btn-primary" onClick={() => location.reload()}>
                    {dict.reintentar}
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-center mb-4">{getTitulo()}</h1>
            <div className="pokemon-grid">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.numero} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}
