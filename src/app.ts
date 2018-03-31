import {bootstrapMicroframework} from 'microframework';
import { iocLoader } from './loaders/iocLoader';
import { koaLoader } from './loaders/koaLoader';
import { typeormLoader } from './loaders/typeormLoader';
import { winstonLoader } from './loaders/winstonLoader';

bootstrapMicroframework({
    config: {
        bootstrapTimeout: 10,
        logo: 'RosesLive',
        showBootstrapTime: true,
    },
    loaders: [
        winstonLoader,
        iocLoader,
        koaLoader,
        typeormLoader,
    ],
})
    .then(() => console.log('Application is up and running.'))
    .catch((error) => console.log(`Application is crashed: ${error}`));
