'use client';
import { useIdioma } from '@/context/LanguageContext';
import { Pokemon } from '@/types/pokemon';
import PokemonCard from '@/components/PokemonCard';

interface GeneracionContentProps {
    pokemons: Pokemon[];
    nombreGen: string;
}

export default function ContenidoGeneracion_App({ pokemons, nombreGen }: GeneracionContentProps) {
    const { dict } = useIdioma();

    const getTitulo = () => {
        if (nombreGen === 'Primera') return dict.primeraGen;
        if (nombreGen === 'Segunda') return dict.segundaGen;
        if (nombreGen === 'Tercera') return dict.terceraGen;
        return nombreGen;
    };

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
