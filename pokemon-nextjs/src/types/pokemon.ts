// datos de un pokemon individual
export interface Pokemon {
    numero: number;
    img: string;
    nombre: string;
    hp: number;
    ataque: number;
    defensa: number;
}

// lista de pokemon de la api
export interface PokemonList {
    results: { name: string; url: string }[];
}

// rango de ids por generacion
export interface GeneracionRango {
    inicio: number;
    fin: number;
    nombre: string;
}
