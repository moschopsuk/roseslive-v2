import {bootstrapMicroframework} from 'microframework';
import 'reflect-metadata';
import { Logger } from './core/Logger';
import { graphqlLoader } from './loaders/graphqlLoader';
import { iocLoader } from './loaders/iocLoader';
import { koaLoader } from './loaders/koaLoader';
import { typeormLoader } from './loaders/typeormLoader';
import { winstonLoader } from './loaders/winstonLoader';

const log = new Logger(__filename);

bootstrapMicroframework({
    config: {
        bootstrapTimeout: 10,
        logo: 'RosesLive',
        showBootstrapTime: true,
    },
    loaders: [
        winstonLoader,
        iocLoader,
        typeormLoader,
        koaLoader,
        graphqlLoader,
    ],
})
    .then(() => log.info('Application is up and running.'))
    .catch((error) => log.error(`Application is crashed: ${error}`));
