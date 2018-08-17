import { Discipline } from '../models/disciplines';
import { DisciplineService } from '../services/disciplineService';
import NotFoundError from './errors/notfoundError';

export const resolvers = {
    Mutation: {
        async createDisciple(root, {name, description}, ctx) {
            const service = (ctx.disciplineService as DisciplineService);
            const discipline = new Discipline();
            discipline.name = name;
            discipline.description = description;
            return service.create(discipline);
        },

        async updateDisciple(root, {id, name, description}, ctx) {
            const service = (ctx.disciplineService as DisciplineService);
            const discipline = await service.find(id);
            if (!discipline) {
                throw new NotFoundError('discipline',  id);
            }

            discipline.name = name;
            discipline.description = description;
            return service.update(id, discipline);
        },

        async deleteDisciple(root, { id }, ctx) {
            const service = (ctx.disciplineService as DisciplineService);
            await service.Delete(id);
            return id;
        },
    },
    Query: {
        async discipline(root, { id }, ctx) {
            const service = (ctx.disciplineService as DisciplineService);
            const discipline = await service.find(id);
            if (!discipline) {
                throw new NotFoundError('discipline',  id);
            }
            return discipline;
        },

        async disciplines(root, args, ctx) {
            const service = (ctx.disciplineService as DisciplineService);
            return await service.getAll();
        },
    },
};
