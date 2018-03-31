export default {
    Query: {
        async disciplines(parent, args, ctx, info) {
            const service = ctx.disciplineService;
            return await service.getAll();
        },
    },
};
