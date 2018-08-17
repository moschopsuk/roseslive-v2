import * as chai from 'chai';
import { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { random } from 'faker';
import spy from 'testdouble';
import { Discipline } from '../../src/models/disciplines';
import { DisciplineService } from '../../src/services/disciplineService';
import { LogMock } from '../mocks/logMock';
import { RepositoryMock } from '../mocks/repositoryMock';

chai.use(chaiAsPromised);

let mockRepository;
let disciplineService: DisciplineService;
let mockLogger: LogMock;

describe('DisciplineService', () => {
    before(() => {
        mockRepository = new RepositoryMock();
        mockLogger = new LogMock();
        disciplineService = new DisciplineService(mockRepository as any, mockLogger as any);
    });

    afterEach(() => {
        spy.reset();
    });

    describe('getAll()', () => {
        it('Should query the discipline for all results', async () => {
            spy.replace(mockRepository, 'find');
            await disciplineService.getAll();
            spy.verify(mockRepository.find());
        });

        it('should resolve an array on successful fetch', async () => {
            spy.replace(mockRepository, 'find');
            spy.when(mockRepository.find()).thenReturn(Promise.resolve([]));

            const disciplines = await disciplineService.getAll();
            expect(disciplines).to.deep.equal([]);
        });
    });

    describe('find()', () => {
        it('throw error when no identifier is provided', async () => {
            return expect(disciplineService.find('')).to.be.rejectedWith('Unable to search with blank ID');
        });

        it('Should query the discipline for correct id', async () => {
            spy.replace(mockRepository, 'findOne');
            const mockUuid = random.uuid();
            await disciplineService.find(mockUuid);
            spy.verify(mockRepository.findOne(mockUuid));
        });

        it('should resolve an object on successful fetch', async () => {
            spy.replace(mockRepository, 'findOne');
            const mockUuid = random.uuid();
            spy.when(mockRepository.findOne(mockUuid)).thenReturn(Promise.resolve({}));

            const disciplines = await disciplineService.find(mockUuid);
            expect(disciplines).to.deep.equal({});
        });
    });

    describe('create()', () => {
        it('should resolve an object on successful fetch', async () => {
            const discipline = new Discipline();
            discipline.name = random.word();
            discipline.description = random.words(10);

            spy.replace(mockRepository, 'save');
            await disciplineService.create(discipline);
            spy.verify(mockRepository.save(discipline));
        });
    });
});
