import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

// Servicio con la lógica de negocio para películas
@Injectable()
export class PeliculasService {
    constructor(
        @InjectRepository(Pelicula)
        private repositorioPeliculas: Repository<Pelicula>,
    ) { }

    // Crea y guarda una nueva película
    async crear(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
        const pelicula = this.repositorioPeliculas.create(createPeliculaDto);
        return this.repositorioPeliculas.save(pelicula);
    }

    // Devuelve todas las películas
    async obtenerTodas(): Promise<Pelicula[]> {
        return this.repositorioPeliculas.find();
    }

    // Devuelve una película por su ID
    async obtenerUna(id: number): Promise<Pelicula> {
        const pelicula = await this.repositorioPeliculas.findOne({ where: { id } });
        if (!pelicula) {
            throw new NotFoundException(`No se ha encontrado la película con ID ${id}`);
        }
        return pelicula;
    }

    // Actualiza los datos de una película existente
    async actualizar(id: number, updatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula> {
        const pelicula = await this.obtenerUna(id);
        this.repositorioPeliculas.merge(pelicula, updatePeliculaDto);
        return this.repositorioPeliculas.save(pelicula);
    }

    // Elimina una película por su ID
    async eliminar(id: number): Promise<void> {
        await this.obtenerUna(id);
        await this.repositorioPeliculas.delete(id);
    }

    // Busca películas con filtros opcionales: título (LIKE) y rango de años (BETWEEN)
    async buscarFiltrado(titulo?: string, yearInicio?: number, yearFin?: number): Promise<Pelicula[]> {
        const consulta = this.repositorioPeliculas.createQueryBuilder('pelicula');

        // Filtro por título parcial con LIKE
        if (titulo) {
            consulta.andWhere('pelicula.titulo LIKE :titulo', { titulo: `%${titulo}%` });
        }

        // Filtro por rango de años
        if (yearInicio && yearFin) {
            consulta.andWhere('pelicula.year BETWEEN :yearInicio AND :yearFin', { yearInicio, yearFin });
        }

        return consulta.getMany();
    }
}
