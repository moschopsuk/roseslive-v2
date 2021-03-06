import * as path from 'path';
import Container from 'typedi';
import * as winston from 'winston';

export interface ILoggerInterface {
    debug(message: string, ...args: any[]): void;
    info(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
}

export class Logger implements ILoggerInterface {
    public static DEFAULT_SCOPE = 'app';

    private static parsePathToScope(filepath: string): string {
        if (filepath.indexOf(path.sep) >= 0) {
            filepath = filepath.replace(process.cwd(), '');
            filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
            filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
            filepath = filepath.replace('.ts', '');
            filepath = filepath.replace('.js', '');
            filepath = filepath.replace(path.sep, ':');
        }
        return filepath;
    }

    private scope: string;

    constructor(scope?: string) {
        this.scope = Logger.parsePathToScope((scope) ? scope : Logger.DEFAULT_SCOPE);
    }

    public debug(message: string, ...args: any[]): void {
        if (winston) {
            winston.debug(`${this.formatScope()} ${message}`, args);
        }
    }

    public info(message: string, ...args: any[]): void {
        if (winston) {
            winston.info(`${this.formatScope()} ${message}`, args);
        }
    }

    public warn(message: string, ...args: any[]): void {
        if (winston) {
            winston.warn(`${this.formatScope()} ${message}`, args);
        }
    }

    public error(message: string, ...args: any[]): void {
        if (winston) {
            winston.error(`${this.formatScope()} ${message}`, args);
        }
    }

    private formatScope(): string {
        return `[${this.scope}]`;
    }
}

export function LogInjector(scope: string): any {
    return (object: any, propertyName: string, index?: number): any => {
        const logger = new Logger(scope);
        Container.registerHandler({ object, propertyName, index, value: () => logger });
    };
}
