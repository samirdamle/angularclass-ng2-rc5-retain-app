import { bootstrap} from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { App, PROVIDERS } from './app';

bootstrap(App, [
    ...HTTP_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    ...PROVIDERS
]);