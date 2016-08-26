import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    apiURL = 'http://localhost:3500';

    constructor(private http: Http) {

    }

    private getJSON(response: Response) {
        return response.json();
    }

    private checkForError(response: Response): Response {
        if(response.status >= 200 && response.status < 300){
            return response;
        } else {
            var error: Error = new Error(response.statusText);
            error['response'] = response;
            console.log(error);
            throw error;
        }
        
    }

    get(path): Observable<any> {
        return this.http.get(`${this.apiURL}${path}`, { headers: this.headers })
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJSON);
    }

    post(path, body): Observable<any> {

        return this.http.post(
            `${this.apiURL}${path}`, 
            JSON.stringify(body),
            { headers: this.headers }
        )
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJSON);
    }

    delete(path): Observable<any> {
        return this.http.delete(`${this.apiURL}${path}`, { headers: this.headers })
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJSON);
    }
}