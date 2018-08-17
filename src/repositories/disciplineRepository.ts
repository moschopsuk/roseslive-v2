import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { Discipline } from '../models/disciplines';

@Service()
@EntityRepository(Discipline)
export class DisciplineRepository extends Repository<Discipline> {

}
