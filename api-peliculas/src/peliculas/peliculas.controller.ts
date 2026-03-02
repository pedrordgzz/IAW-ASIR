import { Controller, Get, Post, Put, Delete, Body, Query, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';

// Controlador que atiende todas las peticiones que lleguen a /peliculas
@Controller('peliculas')
export class PeliculasController {
    constructor(private readonly peliculasService: PeliculasService) { }

    // Crea una nueva película con los datos del body
    @Post()
    crear(@Body() createPeliculaDto: CreatePeliculaDto) {
        return this.peliculasService.crear(createPeliculaDto);
    }

    // Devuelve todas las películas
    @Get()
    obtenerTodas() {
        return this.peliculasService.obtenerTodas();
    }

    // Busqueda con filtros
    @Get('query')
    buscarFiltrado(
        @Query('titulo') titulo?: string,
        @Query('yearInicio') yearInicio?: string,
        @Query('yearFin') yearFin?: string,
    ) {
        return this.peliculasService.buscarFiltrado(
            titulo,
            yearInicio ? parseInt(yearInicio) : undefined,
            yearFin ? parseInt(yearFin) : undefined,
        );
    }

    // Devuelve la película con ese ID
    @Get(':id')
    obtenerUna(@Param('id', ParseIntPipe) id: number) {
        return this.peliculasService.obtenerUna(id);
    }

    // Actualiza los datos de una película existente
    @Put(':id')
    actualizar(
        @Param('id', ParseIntPipe) id: number,
        @Body() updatePeliculaDto: UpdatePeliculaDto,
    ) {
        return this.peliculasService.actualizar(id, updatePeliculaDto);
    }

    // Elimina una película por su ID
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.peliculasService.eliminar(id);
    }
}
