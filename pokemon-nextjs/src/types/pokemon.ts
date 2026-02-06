export interface Pokemon {
    numero: number;
    img: string;
    nombre: string;
    hp: number;
    ataque: number;
    defensa: number;
}

export interface PokemonList {
    results: { name: string; url: string }[];
}

export interface GeneracionRango {
    inicio: number;
    fin: number;
    nombre: string;
}
