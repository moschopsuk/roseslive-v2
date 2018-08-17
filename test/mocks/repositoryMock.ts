export class RepositoryMock<T> {

    public one!: T;
    public list!: T[];

    public find(...args: any[]): T[] {
        return this.list;
    }

    public findOne(...args: any[]): T {
        return this.one;
    }

    public save(value: T, ...args: any[]): T {
        return value;
    }

    public delete(value: T, ...args: any[]): T {
        return value;
    }
}
