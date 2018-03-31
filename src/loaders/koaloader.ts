import { Server } from 'http';
import Koa from 'koa';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';

import { Logger } from '../core/logger';

export const koaLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const logger = new Logger(__filename);
        const app = new Koa();
        const server = app.listen(3000, () => {
            logger.info('HTTP Server started on port 3000');
        });

        settings.setData('koa_app', app);
        settings.setData('server', server);
    }
};
