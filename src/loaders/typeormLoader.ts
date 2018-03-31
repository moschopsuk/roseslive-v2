import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import { createConnection } from 'typeorm';

export const typeormLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    const connection = await createConnection({
        database: 'roseslive',
        entities: [
            '../models/*{.js,.ts}',
        ],
        host: 'postgres',
        password: 'password',
        synchronize: true,
        type: 'postgres',
        username: 'root',
    });

    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
    }
};
