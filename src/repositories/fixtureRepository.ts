import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { Fixture } from '../models/fixture';

@Service()
@EntityRepository(Fixture)
export class FixtureRepository extends Repository<Fixture> {

}
