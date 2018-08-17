import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { ILoggerInterface, LogInjector } from '../core/logger';
import { Logger } from '../core/logger';
import { Discipline } from '../models/disciplines';
import { DisciplineRepository } from '../repositories/disciplineRepository';

@Service()
export class DisciplineService {

    constructor(
        @OrmRepository() private disciplineRepository: DisciplineRepository,
        @LogInjector(__filename) private log: ILoggerInterface,
    ) {
    }

    public getAll(): Promise<Discipline[]> {
        this.log.info('fetching all disciplines');
        return this.disciplineRepository.find();
    }

    public find(id: string): Promise<Discipline | undefined> {
        if (id === '') {
            return Promise.reject(new Error('Unable to search with blank ID'));
        }

        this.log.info(`fetching discipline ${id}`);
        return this.disciplineRepository.findOne(id);
    }

    public async create(discipline: Discipline): Promise<Discipline> {
        this.log.info('Create a new discipline => ', discipline.toString());
        return await this.disciplineRepository.save(discipline);
    }

    public update(id: string, discipline: Discipline): Promise<Discipline> {
        if (id === '') {
            throw new Error(`Empty ID provided`);
        }

        this.log.info(`Updated discipline: ${id}`);
        discipline.id = id;
        return this.disciplineRepository.save(discipline);
    }

    public async Delete(id: string): Promise<Discipline | undefined> {
        if (id === '') {
            throw new Error(`Empty ID provided`);
        }

        const toDelete = this.disciplineRepository.findOne(id);
        if (!toDelete) {
            throw new Error(`Discipline ${id} not found`);
        }

        this.log.info(`Deleted discipline: ${id}`);
        await this.disciplineRepository.delete(id);
        return toDelete;
    }
}
