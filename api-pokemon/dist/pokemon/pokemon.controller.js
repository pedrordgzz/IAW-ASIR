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
exports.PokemonController = void 0;
const common_1 = require("@nestjs/common");
const pokemon_service_1 = require("./pokemon.service");
const create_pokemon_dto_1 = require("./dto/create-pokemon.dto");
const update_pokemon_dto_1 = require("./dto/update-pokemon.dto");
let PokemonController = class PokemonController {
    pokemonService;
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    crear(createPokemonDto) {
        return this.pokemonService.crear(createPokemonDto);
    }
    obtenerTodos() {
        return this.pokemonService.obtenerTodos();
    }
    buscarFiltrado(nombre, tipo, minHp) {
        return this.pokemonService.buscarFiltrado(nombre, tipo, minHp ? parseInt(minHp) : undefined);
    }
    obtenerUno(id) {
        return this.pokemonService.obtenerUno(id);
    }
    actualizar(id, updatePokemonDto) {
        return this.pokemonService.actualizar(id, updatePokemonDto);
    }
    eliminar(id) {
        return this.pokemonService.eliminar(id);
    }
};
exports.PokemonController = PokemonController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pokemon_dto_1.CreatePokemonDto]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "obtenerTodos", null);
__decorate([
    (0, common_1.Get)('query'),
    __param(0, (0, common_1.Query)('nombre')),
    __param(1, (0, common_1.Query)('tipo')),
    __param(2, (0, common_1.Query)('minHp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "buscarFiltrado", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "obtenerUno", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pokemon_dto_1.UpdatePokemonDto]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "eliminar", null);
exports.PokemonController = PokemonController = __decorate([
    (0, common_1.Controller)('pokemon'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonController);
//# sourceMappingURL=pokemon.controller.js.map