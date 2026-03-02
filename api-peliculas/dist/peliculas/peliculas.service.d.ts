import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
export declare class PeliculasService {
    private repositorioPeliculas;
    constructor(repositorioPeliculas: Repository<Pelicula>);
    crear(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula>;
    obtenerTodas(): Promise<Pelicula[]>;
    obtenerUna(id: number): Promise<Pelicula>;
    actualizar(id: number, updatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula>;
    eliminar(id: number): Promise<void>;
    buscarFiltrado(titulo?: string, yearInicio?: number, yearFin?: number): Promise<Pelicula[]>;
}
