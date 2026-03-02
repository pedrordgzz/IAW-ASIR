import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
export declare class PeliculasController {
    private readonly peliculasService;
    constructor(peliculasService: PeliculasService);
    crear(createPeliculaDto: CreatePeliculaDto): Promise<import("./entities/pelicula.entity").Pelicula>;
    obtenerTodas(): Promise<import("./entities/pelicula.entity").Pelicula[]>;
    buscarFiltrado(titulo?: string, yearInicio?: string, yearFin?: string): Promise<import("./entities/pelicula.entity").Pelicula[]>;
    obtenerUna(id: number): Promise<import("./entities/pelicula.entity").Pelicula>;
    actualizar(id: number, updatePeliculaDto: UpdatePeliculaDto): Promise<import("./entities/pelicula.entity").Pelicula>;
    eliminar(id: number): Promise<void>;
}
