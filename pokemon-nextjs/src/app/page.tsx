'use client';

import { useIdioma } from '@/context/LanguageContext';
import { obtenerPokemonAleatorio_App } from '@/lib/pokemon';
import { Pokemon } from '@/types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import { useEffect, useState } from 'react';

export default function PaginaInicio_App() {
  const { dict, idioma } = useIdioma();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarPokemon = async () => {
      setCargando(true);
      try {
        // pasar idioma para obtener nombre traducido
        const data = await obtenerPokemonAleatorio_App(idioma);
        setPokemon(data);
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

    cargarPokemon();
  }, [idioma]);

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
      </div>
    );
  }

  return (
    <div className="bienvenida">
      <h1>{dict.bienvenida}</h1>
      <p className="lead">{dict.descripcionBienvenida}</p>

      <h3 className="mt-5">{dict.pokemonAleatorio}</h3>
      {pokemon && (
        <div className="pokemon-destacado">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}
