import { graphiqlKoa, graphqlKoa } from 'apollo-server-koa';
import Koa from 'koa';
import koaBody from 'koa-bodyparser';
import Router from 'koa-router';
import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';

export const graphqlLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    if (settings) {
        const app: Koa = settings.getData('koa_app');
        const routes = new Router();

        const apiEntrypointPath = '/graphql';
        const graphQlOpts = graphqlKoa({
            schema,
        });

        routes.get('/graphql', graphQlOpts);
        routes.post('/graphql', koaBody(), graphQlOpts);
        routes.get('/graphiql', graphiqlKoa({ endpointURL: apiEntrypointPath }));

        app.use(routes.routes());
        app.use(routes.allowedMethods());
    }
};
