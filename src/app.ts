import {bootstrapMicroframework} from "microframework";

import { winstonLoader } from './loaders/winstonLoader';
import { koaLoader } from './loaders/koaLoader';

bootstrapMicroframework({
    config: {
        logo: "RosesLive",
        showBootstrapTime: true,
        bootstrapTimeout: 10
    },
    loaders: [
        winstonLoader,
        koaLoader
    ]
})
    .then(() => console.log("Application is up and running."))
    .catch(error => console.log("Application is crashed: " + error));
