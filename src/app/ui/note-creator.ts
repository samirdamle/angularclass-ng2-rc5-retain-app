import { Component, Output, EventEmitter } from '@angular/core';
import { ColorPicker } from './color-picker';

@Component({
    selector: 'note-creator',
    directives: [
        ColorPicker
    ],
    styles: [`
        .note-creator {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
        }
        .title {
            font-weight: bold;
            color: rgba(0,0,0,0.8);
        }
        .full {
            height: 100px;
        }
    `],
    template: `
        <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
            <form class="row" (submit)="onCreateNote()">
                <input
                    type="text"
                    *ngIf="fullForm"
                    [(ngModel)]="newNote.title"
                    name="newNoteTitle"
                    placeholder="Title"
                    class="col-xs-10 title"
                >
                <input
                    type="text"
                    [(ngModel)]="newNote.value"
                    (focus)="toggleFullForm(true)"
                    name="newNoteValue"
                    placeholder="Take a note..."
                    class="col-xs-10"
                >
                <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
                    <div class="col-xs-3">
                        <color-picker [colors]="colors" (selected)="onColorSelect($event)"></color-picker>
                    </div>
                    <button
                        type="submit"
                        class="btn-light"
                    >
                        Done
                    </button>
                </div>
            </form>
        </div>
    `
})
export class NoteCreator {

    @Output() createNote = new EventEmitter();
    fullForm: boolean = false;    
    colors: Array<string> = ['#B19CD9', '#FF6961', '#77DD77', '#AEC6CF', '#F49AC2', '#FFFFFF'];
    newNote = {
        title: '',
        value: '',
        color: '#FFFFFF'
    }

    onCreateNote() {
        const { title, value, color } = this.newNote;
        if( title && value ){
            this.createNote.emit({title, value, color});
            this.reset();
        }
    }

    reset(){
        this.newNote = { title: '', value: '', color: '#FFFFFF' };
    }

    toggleFullForm(val: boolean){
        this.fullForm = val;
    }

    onColorSelect(color: string){
        this.newNote.color = color;
    }
}