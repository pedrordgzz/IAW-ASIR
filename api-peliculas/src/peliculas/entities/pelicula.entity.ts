import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entidad que representa la tabla "pelicula" en la base de datos MySQL
@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    director: string;

    @Column()
    year: number;

    @Column()
    duracion_minutos: number;
}
