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

    public find(): Promise<Discipline[]> {
        this.log.info('Find all disciplines');
        return this.disciplineRepository.find();
    }
}
