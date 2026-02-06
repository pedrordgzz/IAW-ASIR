'use client';
import { Card, Button } from 'react-bootstrap';
import { Pokemon } from '@/types/pokemon';
import { useIdioma } from '@/context/LanguageContext';
import { useState } from 'react';
import PokemonModal from './PokemonModal';
import { obtenerPokemon_App } from '@/lib/pokemon';

interface PokemonCardProps {
    pokemon: Pokemon;
}

export default function TarjetaPokemon_App({ pokemon }: PokemonCardProps) {
    const { dict, idioma } = useIdioma();
    const [mostrarModal, setMostrarModal] = useState(false);
    const [pokemonActual, setPokemonActual] = useState(pokemon);
    const [cargando, setCargando] = useState(false);

    const cargarPokemon = async (id: number) => {
        setCargando(true);
        try {
            const data = await obtenerPokemon_App(id.toString(), idioma);
            setPokemonActual(data);
        } catch (error) {
            console.error('Error cargando pokemon:', error);
        }
        setCargando(false);
    };

    const irAnterior = () => {
        const nuevoId = pokemonActual.numero > 1 ? pokemonActual.numero - 1 : 1;
        cargarPokemon(nuevoId);
    };

    const irSiguiente = () => {
        const nuevoId = pokemonActual.numero < 1000 ? pokemonActual.numero + 1 : 1000;
        cargarPokemon(nuevoId);
    };

    const abrirModal = () => {
        setPokemonActual(pokemon);
        setMostrarModal(true);
    };

    return (
        <>
            <Card className="h-100 shadow-sm">
                <Card.Img
                    variant="top"
                    src={pokemon.img}
                    alt={pokemon.nombre}
                    style={{
                        height: '180px',
                        objectFit: 'contain',
                        backgroundColor: '#f8f9fa'
                    }}
                />
                <Card.Body className="text-center">
                    <Card.Title className="text-capitalize">{pokemon.nombre}</Card.Title>
                    <Card.Text>
                        {dict.numero}: #{pokemon.numero}
                    </Card.Text>
                    <Button variant="primary" onClick={abrirModal}>
                        {dict.verDetalle}
                    </Button>
                </Card.Body>
            </Card>

            <PokemonModal
                pokemon={pokemonActual}
                mostrar={mostrarModal}
                onCerrar={() => setMostrarModal(false)}
                onAnterior={irAnterior}
                onSiguiente={irSiguiente}
                cargando={cargando}
            />
        </>
    );
}
