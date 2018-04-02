import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('disciplines')
export class Discipline {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public name!: string;

    @Column()
    public description!: string;

    public toString(): string {
        return `id=${this.id},name=${this.name},description=${this.description}`;
    }
}
