import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { Location } from '../models/location';

@Service()
@EntityRepository(Location)
export class LocationRepository extends Repository<Location> {

}
