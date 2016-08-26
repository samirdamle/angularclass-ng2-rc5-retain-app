import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-card',
    /*
    inputs: [
        'note'
    ],
    */
    styles: [`
        .note-card {
            position: relative;
            margin-bottom: 15px;
            padding: 15px;
            border-radius: 2px;
            width: 100%;
        }
        .title {
            font-size: 1.2rem;
            font-weight: bold;
            text-align: left;
            color: rgba(0,0,0,0.8);
        }
        .value {
            text-align: left;
            font-size: 1.4rem;
            font-weight: 200;
        }
        .icon {
            position: absolute;
            color: black;
            border: 1px solid lightgrey;
            background-color: white;
            font-size: 30px;
            line-height: 40px;
            top: -10px;
            left: -10px;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            cursor: pointer; 
        }
    `],
    template: `
        <div class="note-card row shadow-1"
        [ngStyle]="{'background-color': note.color}"
            (mouseenter)="toggle()"
            (mouseleave)="toggle()"
        >
            <div class="icon" *ngIf="showCheck" (click)="onChecked()">
                <i class="material-icons">check</i>
            </div>
            <div class="col-xs-12 title">
                {{ note.title }}
            </div>
            <div class="col-xs-12 value">
                {{ note.value }}
            </div>
        </div>                
    `
})
export class NoteCard {
    @Input() note = {};
    @Output() checked = new EventEmitter();
    showCheck: boolean = false;

    toggle(){
        this.showCheck = !this.showCheck;
    }

    onChecked(){
        this.checked.next(this.note);
    }
}