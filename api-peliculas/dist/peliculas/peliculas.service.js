"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pelicula_entity_1 = require("./entities/pelicula.entity");
let PeliculasService = class PeliculasService {
    repositorioPeliculas;
    constructor(repositorioPeliculas) {
        this.repositorioPeliculas = repositorioPeliculas;
    }
    async crear(createPeliculaDto) {
        const pelicula = this.repositorioPeliculas.create(createPeliculaDto);
        return this.repositorioPeliculas.save(pelicula);
    }
    async obtenerTodas() {
        return this.repositorioPeliculas.find();
    }
    async obtenerUna(id) {
        const pelicula = await this.repositorioPeliculas.findOne({ where: { id } });
        if (!pelicula) {
            throw new common_1.NotFoundException(`No se ha encontrado la película con ID ${id}`);
        }
        return pelicula;
    }
    async actualizar(id, updatePeliculaDto) {
        const pelicula = await this.obtenerUna(id);
        this.repositorioPeliculas.merge(pelicula, updatePeliculaDto);
        return this.repositorioPeliculas.save(pelicula);
    }
    async eliminar(id) {
        await this.obtenerUna(id);
        await this.repositorioPeliculas.delete(id);
    }
    async buscarFiltrado(titulo, yearInicio, yearFin) {
        const consulta = this.repositorioPeliculas.createQueryBuilder('pelicula');
        if (titulo) {
            consulta.andWhere('pelicula.titulo LIKE :titulo', { titulo: `%${titulo}%` });
        }
        if (yearInicio && yearFin) {
            consulta.andWhere('pelicula.year BETWEEN :yearInicio AND :yearFin', { yearInicio, yearFin });
        }
        return consulta.getMany();
    }
};
exports.PeliculasService = PeliculasService;
exports.PeliculasService = PeliculasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pelicula_entity_1.Pelicula)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PeliculasService);
//# sourceMappingURL=peliculas.service.js.map