import { Component } from '@angular/core';
import { AppBar } from '../ui';
import { Notes } from './notes';

@Component({
    selector: 'main-container',
    directives: [
        AppBar,
        Notes
    ],
    template: `
        <div>
            <div class="app-bar"></div>
            <main class="main">
                <notes-container></notes-container>                
            </main>
        </div> 
    `
})
export class Main {

}