'use client';

import { Card, Button } from 'react-bootstrap';
import { Pokemon } from '@/types/pokemon';
import { useIdioma } from '@/context/LanguageContext';
import { useState } from 'react';
import PokemonModal from './PokemonModal';

interface PokemonCardProps {
    pokemon: Pokemon;
}

export default function TarjetaPokemon_App({ pokemon }: PokemonCardProps) {
    const { dict } = useIdioma();
    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <>
            <Card className="h-100 shadow-sm">
                <Card.Img
                    variant="top"
                    src={pokemon.img}
                    alt={pokemon.nombre}
                    style={{ height: '180px', objectFit: 'contain', backgroundColor: '#f8f9fa' }}
                />
                <Card.Body className="text-center">
                    <Card.Title className="text-capitalize">{pokemon.nombre}</Card.Title>
                    <Card.Text>
                        {dict.numero}: #{pokemon.numero}
                    </Card.Text>
                    <Button variant="primary" onClick={() => setMostrarModal(true)}>
                        {dict.verDetalle}
                    </Button>
                </Card.Body>
            </Card>

            {/* modal de detalle */}
            <PokemonModal
                pokemon={pokemon}
                mostrar={mostrarModal}
                onCerrar={() => setMostrarModal(false)}
            />
        </>
    );
}
