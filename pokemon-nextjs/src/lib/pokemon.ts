import { Pokemon, GeneracionRango } from '@/types/pokemon';

// rangos de ids por generacion
export const generaciones: Record<string, GeneracionRango> = {
    '1': { inicio: 1, fin: 151, nombre: 'Primera' },
    '2': { inicio: 152, fin: 251, nombre: 'Segunda' },
    '3': { inicio: 252, fin: 386, nombre: 'Tercera' },
};

// mapeo de codigos de idioma a codigos de la api
const idiomaApi: Record<string, string> = {
    es: 'es',
    en: 'en',
    fr: 'fr',
};

// obtener el nombre traducido del pokemon
async function obtenerNombreTraducido_App(id: number, idioma: string): Promise<string> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return '';
    }

    const data = await res.json();
    const codigoIdioma = idiomaApi[idioma] || 'es';

    // buscar el nombre en el idioma solicitado
    const nombreTraducido = data.names.find(
        (n: { language: { name: string }; name: string }) => n.language.name === codigoIdioma
    );

    return nombreTraducido ? nombreTraducido.name : data.name;
}

// obtener datos de un pokemon por id
export async function obtenerPokemon_App(id: string | number, idioma: string = 'es'): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Error al cargar el Pokemon');
    }

    const data = await res.json();

    // obtener nombre traducido
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

// obtener un pokemon aleatorio
export async function obtenerPokemonAleatorio_App(idioma: string = 'es'): Promise<Pokemon> {
    const idAleatorio = Math.floor(Math.random() * 386) + 1;
    return obtenerPokemon_App(idAleatorio, idioma);
}

// obtener pokemon aleatorios de una generacion
export async function obtenerPokemonsGeneracion_App(gen: string, cantidad: number = 10, idioma: string = 'es'): Promise<Pokemon[]> {
    const rango = generaciones[gen];
    if (!rango) {
        throw new Error('Generacion no valida');
    }

    // generar ids aleatorios dentro del rango
    const ids: number[] = [];
    while (ids.length < cantidad) {
        const id = Math.floor(Math.random() * (rango.fin - rango.inicio + 1)) + rango.inicio;
        if (!ids.includes(id)) {
            ids.push(id);
        }
    }

    // obtener los pokemon con idioma
    const pokemons = await Promise.all(ids.map((id) => obtenerPokemon_App(id, idioma)));
    return pokemons;
}
