import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppBar } from '../ui';
import { Notes } from './notes';

@Component({
    selector: 'main-container',
    directives: [
        AppBar,
        Notes,
        ...ROUTER_DIRECTIVES
    ],
    template: `
        <div>
            <div class="app-bar"></div>
            <main class="main">
                <router-outlet></router-outlet>                
            </main>
        </div> 
    `
})
export class Main {

}