import { Pokemon, GeneracionRango } from '@/types/pokemon';

export const generaciones: Record<string, GeneracionRango> = {
    '1': { inicio: 1, fin: 151, nombre: 'Primera' },
    '2': { inicio: 152, fin: 251, nombre: 'Segunda' },
    '3': { inicio: 252, fin: 386, nombre: 'Tercera' },
};

const idiomaApi: Record<string, string> = {
    es: 'es',
    en: 'en',
    fr: 'fr',
};

async function obtenerNombreTraducido_App(id: number, idioma: string): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        return '';
    }
    const data = await res.json();
    const codigoIdioma = idiomaApi[idioma] || 'es';
    const nombreTraducido = data.names.find(
        (n: { language: { name: string }; name: string }) => n.language.name === codigoIdioma
    );
    return nombreTraducido ? nombreTraducido.name : data.name;
}

export async function obtenerPokemon_App(id: string | number, idioma: string = 'es'): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error('Error al cargar el Pokemon');
    }
    const data = await res.json();
    const nombreTraducido = await obtenerNombreTraducido_App(data.id, idioma);
    return {
        numero: data.id,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        nombre: nombreTraducido || data.name,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
    };
}

export async function obtenerPokemonAleatorio_App(idioma: string = 'es'): Promise<Pokemon> {
    const idAleatorio = Math.floor(Math.random() * 386) + 1;
    return obtenerPokemon_App(idAleatorio, idioma);
}

export async function obtenerPokemonsGeneracion_App(gen: string, cantidad: number = 10, idioma: string = 'es'): Promise<Pokemon[]> {
    const rango = generaciones[gen];
    if (!rango) {
        throw new Error('Generacion no valida');
    }
    const ids: number[] = [];
    while (ids.length < cantidad) {
        const id = Math.floor(Math.random() * (rango.fin - rango.inicio + 1)) + rango.inicio;
        if (!ids.includes(id)) {
            ids.push(id);
        }
    }
    const pokemons = await Promise.all(ids.map((id) => obtenerPokemon_App(id, idioma)));
    return pokemons;
}
