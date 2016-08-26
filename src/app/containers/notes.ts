import { Component } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui';
import { NoteService } from '../services';

@Component({
    selector: 'notes-container',
    directives: [
        NoteCard,
        NoteCreator
    ],
    styles: [`
        .notes {
            padding-top: 50px;
        }
        .creator {
            margin-bottom: 40px; 
        }               
    `],
    template: `
        <div class="row center-xs notes">
            <div class="col-xs-6 creator">
                <note-creator (createNote)="onCreateNote($event)"></note-creator>
            </div>
            <div class="notes col-xs-8">
                <div class="row between-xs">
                <note-card
                    class="col-xs-4"
                    *ngFor="let note of notes; let i = index"
                    [note]="note"
                    (checked)="onNoteChecked($event, i)"
                >
                    note card here
                </note-card>
                </div>
            </div>
        </div>
    `
})
export class Notes {

    myNote = { title: 'new note', value: 'note here', color: 'lightblue'};

    notesStatic = [
        { title: 'Get milk', value: '2% milk', color: 'lightblue'},
        { title: 'Tidy up', value: 'clean the room', color: 'lightgreen'},
        { title: 'Laundry', value: 'iron clothes', color: 'yellowred'},
        { title: 'Pets', value: 'feed the dog', color: 'lightyellow'}
    ];

    notes = [];

    constructor(private notesService: NoteService){        
        this.notesService.getNotes()
        .subscribe(res => this.notes = res.data);
    }

    onNoteChecked(note, i){
        console.log(i);
        console.log(note);
        this.notes.splice(i, 1);
    }

    onCreateNote(note){
        //this.notesStatic.push(note);
        
        this.notesService.createNote(note)
        .subscribe(note => this.notes.push(note));

    }
}