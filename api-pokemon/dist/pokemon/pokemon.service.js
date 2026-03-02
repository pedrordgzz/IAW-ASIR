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
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pokemon_entity_1 = require("./entities/pokemon.entity");
let PokemonService = class PokemonService {
    repositorioPokemon;
    constructor(repositorioPokemon) {
        this.repositorioPokemon = repositorioPokemon;
    }
    async crear(createPokemonDto) {
        const pokemon = this.repositorioPokemon.create(createPokemonDto);
        return this.repositorioPokemon.save(pokemon);
    }
    async obtenerTodos() {
        return this.repositorioPokemon.find();
    }
    async obtenerUno(id) {
        const pokemon = await this.repositorioPokemon.findOne({ where: { id } });
        if (!pokemon) {
            throw new common_1.NotFoundException(`No se ha encontrado el Pokémon con ID ${id}`);
        }
        return pokemon;
    }
    async actualizar(id, updatePokemonDto) {
        const pokemon = await this.obtenerUno(id);
        this.repositorioPokemon.merge(pokemon, updatePokemonDto);
        return this.repositorioPokemon.save(pokemon);
    }
    async eliminar(id) {
        await this.obtenerUno(id);
        await this.repositorioPokemon.delete(id);
    }
    async buscarFiltrado(nombre, tipo, minHp) {
        const consulta = this.repositorioPokemon.createQueryBuilder('pokemon');
        if (nombre) {
            consulta.andWhere('pokemon.nombre LIKE :nombre', { nombre: `%${nombre}%` });
        }
        if (tipo) {
            consulta.andWhere('pokemon.tipo = :tipo', { tipo });
        }
        if (minHp) {
            consulta.andWhere('pokemon.hp > :minHp', { minHp });
        }
        return consulta.getMany();
    }
};
exports.PokemonService = PokemonService;
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pokemon_entity_1.Pokemon)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map