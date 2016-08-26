import * as services from './services';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export { App } from './app';
export const PROVIDERS = [
    ...mapValuesToArray(services)
];