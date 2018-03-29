import { MicroframeworkSettings, MicroframeworkLoader } from 'microframework';
import * as winston from 'winston';


export const winstonLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    winston.configure({
        transports: [
            new winston.transports.Console({
                level: 'info',
                handleExceptions: true,
                json: false,
                timestamp: true,
                colorize: true,
            }),
        ],
    });
};