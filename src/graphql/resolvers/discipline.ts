import { DisciplineService } from '../../services/disciplineService';

import { Container } from 'typedi';

export default {
    Query: {
        async disciplines(parent, args, ctx, info) {
            const service = Container.get<DisciplineService>(DisciplineService);
            return await service.getAll();
        },
    },
};
