import * as disciplineResolvers from './resolvers/discipline';

export const resolvers = {
    Query: {
        ...disciplineResolvers.default.Query,
    },
};
