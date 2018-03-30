import {bootstrapMicroframework} from 'microframework';
import { koaLoader } from './loaders/koaLoader';
import { winstonLoader } from './loaders/winstonLoader';

bootstrapMicroframework({
    config: {
        bootstrapTimeout: 10,
        logo: 'RosesLive',
        showBootstrapTime: true,
    },
    loaders: [
        winstonLoader,
        koaLoader,
    ],
})
    .then(() => console.log('Application is up and running.'))
    .catch((error) => console.log(`Application is crashed: ${error}`));
