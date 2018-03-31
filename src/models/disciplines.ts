import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('disciplines')
export class Discipline {
    @PrimaryGeneratedColumn('uuid')
    public id!: number;

    @Column()
    public name!: string;

    @Column()
    public description!: string;
}
