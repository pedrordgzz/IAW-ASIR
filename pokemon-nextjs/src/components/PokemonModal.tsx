'use client';
import { Modal, Button } from 'react-bootstrap';
import { Pokemon } from '@/types/pokemon';
import { useIdioma } from '@/context/LanguageContext';
import Image from 'next/image';

interface PokemonModalProps {
    pokemon: Pokemon;
    mostrar: boolean;
    onCerrar: () => void;
    onAnterior?: () => void;
    onSiguiente?: () => void;
    cargando?: boolean;
}

export default function ModalPokemon_App({ pokemon, mostrar, onCerrar, onAnterior, onSiguiente, cargando }: PokemonModalProps) {
    const { dict } = useIdioma();

    return (
        <Modal show={mostrar} onHide={onCerrar} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-capitalize">{pokemon.nombre}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="text-center">
                {cargando ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-between">
                {onAnterior && (
                    <Button variant="secondary" onClick={onAnterior}>
                        {dict.anterior}
                    </Button>
                )}
                <Button variant="primary" onClick={onCerrar}>
                    {dict.cerrar}
                </Button>
                {onSiguiente && (
                    <Button variant="secondary" onClick={onSiguiente}>
                        {dict.siguiente}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}
