import * as services from './services';
import { Store } from './store';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export { App } from './app';
export { routes } from './routes';
export const PROVIDERS = [
    Store,
    ...mapValuesToArray(services)
];