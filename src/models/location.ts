import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locations')
export class Location {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public roomName!: string;
}
