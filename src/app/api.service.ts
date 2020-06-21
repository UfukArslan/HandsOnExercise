import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './models/message';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  loadMessagesForDialog(dialogId: number): Observable<Message[]> { 
    return this.http.get<Message[]>(
      `http://localhost:4300/dialogs/${dialogId}/messages`
    );    
  }

}
