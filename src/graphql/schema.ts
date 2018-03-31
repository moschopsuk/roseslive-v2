import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { types } from './types';
import { Query } from './types/query';

const schemaDefinition = `
    schema {
        query    : Query
    }
`;

const typeDefs = [
    schemaDefinition,
    Query,
    ...types,
];

export const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});
