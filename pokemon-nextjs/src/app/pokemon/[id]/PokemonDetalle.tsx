// componente de detalle del pokemon
'use client';

import { useIdioma } from '@/context/LanguageContext';
import { Pokemon } from '@/types/pokemon';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

interface PokemonDetalleProps {
    pokemon: Pokemon;
}

export default function DetallePokemon_App({ pokemon }: PokemonDetalleProps) {
    const { dict } = useIdioma();

    return (
        <div className="text-center">
            <Card className="mx-auto" style={{ maxWidth: '400px' }}>
                <Card.Header>
                    <h2 className="text-capitalize mb-0">{pokemon.nombre}</h2>
                </Card.Header>
                <Card.Body>
                    <Image
                        src={pokemon.img}
                        alt={pokemon.nombre}
                        width={250}
                        height={250}
                        unoptimized={true}
                        style={{ objectFit: 'contain' }}
                    />
                    <div className="mt-3">
                        <p><strong>{dict.numero}:</strong> #{pokemon.numero}</p>
                        <p><strong>{dict.hp}:</strong> {pokemon.hp}</p>
                        <p><strong>{dict.ataque}:</strong> {pokemon.ataque}</p>
                        <p><strong>{dict.defensa}:</strong> {pokemon.defensa}</p>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Link href="/" className="btn btn-primary">
                        {dict.volverInicio}
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}
