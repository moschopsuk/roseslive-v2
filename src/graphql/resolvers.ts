import NotFoundError from './errors/notfoundError';

export const resolvers = {
    Query: {
        async discipline(obj, { id }, ctx, info) {
            const service = ctx.disciplineService;
            const discipline = await service.find(id);
            if (!discipline) {
                throw new NotFoundError('discipline',  id);
            }
            return discipline;
        },

        async disciplines(obj, args, ctx, info) {
            const service = ctx.disciplineService;
            return await service.getAll();
        },
    },
};
