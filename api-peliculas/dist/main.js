"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const typeorm_1 = require("@nestjs/typeorm");
const pelicula_entity_1 = require("./peliculas/entities/pelicula.entity");
const peliculasIniciales = [
    { titulo: 'La La Land', director: 'Damien Chazelle', year: 2016, duracion_minutos: 128 },
    { titulo: 'Zootopia', director: 'Byron Howard', year: 2016, duracion_minutos: 108 },
    { titulo: 'Deadpool', director: 'Tim Miller', year: 2016, duracion_minutos: 108 },
    { titulo: 'Monsters, Inc.', director: 'Pete Docter', year: 2001, duracion_minutos: 92 },
    { titulo: 'Finding Nemo', director: 'Andrew Stanton', year: 2003, duracion_minutos: 100 },
    { titulo: 'The Nice Guys', director: 'Shane Black', year: 2016, duracion_minutos: 116 },
    { titulo: 'Bee Movie', director: 'Simon J. Smith', year: 2007, duracion_minutos: 95 },
    { titulo: 'Begin Again', director: 'John Carney', year: 2013, duracion_minutos: 104 },
    { titulo: 'WALL-E', director: 'Andrew Stanton', year: 2008, duracion_minutos: 98 },
    { titulo: 'Up', director: 'Pete Docter', year: 2009, duracion_minutos: 96 },
    { titulo: 'The Boss Baby', director: 'Tom McGrath', year: 2017, duracion_minutos: 97 },
    { titulo: 'X-Men: Apocalypse', director: 'Bryan Singer', year: 2016, duracion_minutos: 144 },
    { titulo: 'Moana', director: 'Ron Clements', year: 2016, duracion_minutos: 107 },
    { titulo: 'Frozen', director: 'Chris Buck', year: 2013, duracion_minutos: 102 },
    { titulo: 'Coco', director: 'Lee Unkrich', year: 2017, duracion_minutos: 105 },
];
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.enableCors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    });
    const repositorioPeliculas = app.get((0, typeorm_1.getRepositoryToken)(pelicula_entity_1.Pelicula));
    const total = await repositorioPeliculas.count();
    if (total === 0) {
        await repositorioPeliculas.save(peliculasIniciales);
        console.log('✅ Datos iniciales de películas insertados correctamente.');
    }
    await app.listen(process.env.PORT ?? 3000);
    console.log('🎬 API Películas arrancada en http://localhost:3000');
}
bootstrap();
//# sourceMappingURL=main.js.map