import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import Router from 'koa-router';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import { Container } from 'typedi';
import { Logger } from '../core/logger';
import { schema } from '../graphql/schema';
import { DisciplineService } from '../services/disciplineService';

export const graphqlLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const logger = new Logger(__filename);
        const app: Koa = settings.getData('koa_app');
        const routes = new Router();
        const disciplineService = Container.get<DisciplineService>(DisciplineService);
        const graphQlOpts = graphqlKoa({
            context: {
                disciplineService,
            },
            debug: false,
            formatError: (error) => {
                logger.error(error.originalError);
                return error;
            },
            schema,
        });

        routes.get('/graphql', graphQlOpts);
        routes.post('/graphql', koaBody(), graphQlOpts);
        routes.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

        app.use(routes.routes());
        app.use(routes.allowedMethods());
    }
};
