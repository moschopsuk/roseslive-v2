import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import { Container } from 'typedi';
import { useContainer as ormUseContainer } from 'typeorm';

export const iocLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
    ormUseContainer(Container);
};
