import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import * as winston from 'winston';

export const winstonLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    winston.configure({
        transports: [
            new winston.transports.Console({
                colorize: true,
                handleExceptions: true,
                json: false,
                level: 'info',
                timestamp: true,
            }),
        ],
    });
};
