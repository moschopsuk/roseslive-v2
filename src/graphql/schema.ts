import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { types } from './types';
import { Mutation } from './types/mutation';
import { Query } from './types/query';

const schemaDefinition = `
    schema {
        query : Query
        mutation : Mutation
    }
`;

const typeDefs = [
    schemaDefinition,
    Mutation,
    Query,
    ...types,
];

export const schema = makeExecutableSchema({
    resolvers,
    typeDefs,
});
