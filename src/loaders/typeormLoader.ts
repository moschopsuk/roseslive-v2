import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import { createConnection } from 'typeorm';
import { Discipline } from '../models/disciplines';
import { Fixture } from '../models/fixture';
import { Location } from '../models/location';

export const typeormLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    const connection = await createConnection({
        database: 'roseslive',
        entities: [
            Discipline,
            Fixture,
            Location,
        ],
        host: 'localhost',
        password: 'password',
        synchronize: true,
        type: 'postgres',
        username: 'roseslive',
    });

    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
    }
};
