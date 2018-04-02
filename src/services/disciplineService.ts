import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger } from '../core/logger';
import { Discipline } from '../models/disciplines';
import { DisciplineRepository } from '../repositories/disciplineRepositories';

@Service()
export class DisciplineService {
    private log: Logger;

    constructor(
        @OrmRepository() private disciplineRepository: DisciplineRepository,
    ) {
        this.log = new Logger(__filename);
    }

    public getAll(): Promise<Discipline[]> {
        this.log.info('fetching all disciplines');
        return this.disciplineRepository.find();
    }

    public find(id: string): Promise<Discipline | undefined> {
        this.log.info(`fetching discipline ${id}`);
        return this.disciplineRepository.findOneById(id);
    }
}
