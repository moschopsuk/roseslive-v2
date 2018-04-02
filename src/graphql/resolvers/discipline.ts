export default {
    Query: {
        async disciplines(_, args, ctx, info) {
            const service = ctx.disciplineService;
            return await service.getAll();
        },
    },
};
