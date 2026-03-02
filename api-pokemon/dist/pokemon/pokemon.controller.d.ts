import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    crear(createPokemonDto: CreatePokemonDto): Promise<import("./entities/pokemon.entity").Pokemon>;
    obtenerTodos(): Promise<import("./entities/pokemon.entity").Pokemon[]>;
    buscarFiltrado(nombre?: string, tipo?: string, minHp?: string): Promise<import("./entities/pokemon.entity").Pokemon[]>;
    obtenerUno(id: number): Promise<import("./entities/pokemon.entity").Pokemon>;
    actualizar(id: number, updatePokemonDto: UpdatePokemonDto): Promise<import("./entities/pokemon.entity").Pokemon>;
    eliminar(id: number): Promise<void>;
}
