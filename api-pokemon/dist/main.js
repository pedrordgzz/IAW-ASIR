"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const typeorm_1 = require("@nestjs/typeorm");
const pokemon_entity_1 = require("./pokemon/entities/pokemon.entity");
const pokemonIniciales = [
    { nombre: 'Bulbasaur', tipo: 'Planta', hp: 45 },
    { nombre: 'Charmander', tipo: 'Fuego', hp: 39 },
    { nombre: 'Squirtle', tipo: 'Agua', hp: 44 },
    { nombre: 'Pikachu', tipo: 'Eléctrico', hp: 35 },
    { nombre: 'Jigglypuff', tipo: 'Normal', hp: 115 },
    { nombre: 'Meowth', tipo: 'Normal', hp: 40 },
    { nombre: 'Psyduck', tipo: 'Agua', hp: 50 },
    { nombre: 'Machop', tipo: 'Lucha', hp: 70 },
    { nombre: 'Geodude', tipo: 'Roca', hp: 40 },
    { nombre: 'Haunter', tipo: 'Fantasma', hp: 45 },
    { nombre: 'Snorlax', tipo: 'Normal', hp: 160 },
    { nombre: 'Eevee', tipo: 'Normal', hp: 55 },
    { nombre: 'Dragonite', tipo: 'Dragón', hp: 91 },
    { nombre: 'Mewtwo', tipo: 'Psíquico', hp: 106 },
    { nombre: 'Mew', tipo: 'Psíquico', hp: 100 },
];
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    const repositorioPokemon = app.get((0, typeorm_1.getRepositoryToken)(pokemon_entity_1.Pokemon));
    const total = await repositorioPokemon.count();
    if (total === 0) {
        await repositorioPokemon.save(pokemonIniciales);
        console.log('✅ Datos iniciales de Pokémon insertados correctamente (15 Pokémon).');
    }
    await app.listen(3001);
    console.log('🐾 API Pokémon arrancada en http://localhost:3001');
}
bootstrap();
//# sourceMappingURL=main.js.map