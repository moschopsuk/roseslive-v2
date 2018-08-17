import spy from 'testdouble';
import { Logger } from '../../src/core/logger';

export class LogMock extends Logger {

    public debugMock = spy.func();
    public infoMock = spy.func();
    public warnMock = spy.func();
    public errorMock = spy.func();

    public debug(message: string, ...args: any[]): void {
        this.debugMock(message, args);
    }

    public info(message: string, ...args: any[]): void {
        this.infoMock(message, args);
    }

    public warn(message: string, ...args: any[]): void {
        this.warnMock(message, args);
    }

    public error(message: string, ...args: any[]): void {
        this.errorMock(message, args);
    }

}