'use client';

import { Modal, Button } from 'react-bootstrap';
import { Pokemon } from '@/types/pokemon';
import { useIdioma } from '@/context/LanguageContext';
import Image from 'next/image';

interface PokemonModalProps {
    pokemon: Pokemon;
    mostrar: boolean;
    onCerrar: () => void;
}

export default function ModalPokemon_App({ pokemon, mostrar, onCerrar }: PokemonModalProps) {
    const { dict } = useIdioma();

    return (
        <Modal show={mostrar} onHide={onCerrar} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-capitalize">{pokemon.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Image
                    src={pokemon.img}
                    alt={pokemon.nombre}
                    width={200}
                    height={200}
                    unoptimized={true}
                    style={{ objectFit: 'contain' }}
                />
                <div className="mt-3">
                    <p><strong>{dict.numero}:</strong> #{pokemon.numero}</p>
                    <p><strong>{dict.hp}:</strong> {pokemon.hp}</p>
                    <p><strong>{dict.ataque}:</strong> {pokemon.ataque}</p>
                    <p><strong>{dict.defensa}:</strong> {pokemon.defensa}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCerrar}>
                    {dict.cerrar}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
