'use client';
import { useIdioma } from '@/context/LanguageContext';
import { obtenerPokemon_App } from '@/lib/pokemon';
import { Pokemon } from '@/types/pokemon';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, use } from 'react';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function PaginaPokemon_App({ params }: PageProps) {
    const { id } = use(params);
    const { dict, idioma } = useIdioma();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const cargarPokemon = async () => {
            setCargando(true);
            try {
                const data = await obtenerPokemon_App(id, idioma);
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
    }, [id, idioma]);

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

    if (!pokemon) {
        return null;
    }

    return (
        <div className="text-center">
            <Card className="mx-auto" style={{ maxWidth: '400px' }}>
                <Card.Header>
                    <h2 className="mb-0">{pokemon.nombre}</h2>
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
                <Card.Footer className="d-flex justify-content-between">
                    <Link href={`/pokemon/${Number(id) <= 1 ? 1 : Number(id) - 1}`} className="btn btn-secondary">
                        {dict.anterior}
                    </Link>
                    <Link href="/" className="btn btn-primary">
                        {dict.volverInicio}
                    </Link>
                    <Link href={`/pokemon/${Number(id) >= 1000 ? 1000 : Number(id) + 1}`} className="btn btn-secondary">
                        {dict.siguiente}
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
}
