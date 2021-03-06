import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MessageService {
    constructor(private http:Http){}
    getMessages(){
        return this.http.get('http://localhost:8080/api/messages').toPromise()  ;
    }
}