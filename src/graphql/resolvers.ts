export const resolvers = {
    Query: {
        async discipline(obj, { id }, ctx, info) {
            const service = ctx.disciplineService;
            return await service.find(id);
        },

        async disciplines(obj, args, ctx, info) {
            const service = ctx.disciplineService;
            return await service.getAll();
        },
    },
};
