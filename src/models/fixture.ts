import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Discipline } from './disciplines';
import { Location } from './location';

@Entity('fixtures')
export class Fixture {
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column()
    public name!: string;

    @Column('float8')
    public points!: number;

    @Column('enum', { enum: ['COMMING_UP', 'FINNISHED', 'ABANDONED'] })
    public status!: string;

    @Column('enum', { enum: ['LANCS', 'YORK'] })
    public winner!: string;

    @Column('timestamp')
    public scheduled!: Date;

    @OneToOne((type) => Discipline)
    @JoinColumn()
    public discipline!: Discipline;

    @OneToOne((type) => Location)
    @JoinColumn()
    public location!: Location;

    public toString(): string {
        return `id=${this.id},name=${this.name}status=${this.status},discipline=${this.discipline.toString()}`;
    }
}
