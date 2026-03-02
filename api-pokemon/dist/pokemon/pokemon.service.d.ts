import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonService {
    private repositorioPokemon;
    constructor(repositorioPokemon: Repository<Pokemon>);
    crear(createPokemonDto: CreatePokemonDto): Promise<Pokemon>;
    obtenerTodos(): Promise<Pokemon[]>;
    obtenerUno(id: number): Promise<Pokemon>;
    actualizar(id: number, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon>;
    eliminar(id: number): Promise<void>;
    buscarFiltrado(nombre?: string, tipo?: string, minHp?: number): Promise<Pokemon[]>;
}
