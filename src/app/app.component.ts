import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Message } from './models/message';
import { reject } from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DiaLog';
  messages: Message[];
  
  constructor(private api: ApiService){
  }

  ngOnInit(): void {
    this.api.loadMessagesForDialog(2).subscribe({
      next: (messages) => this.messages = messages,
      error: (error) => console.log(error)

    });
  }
//npm install lodash
// tout les éléments qui n'ont pas été évalués à vrai vont créer un nouveau tableau Message[]
  onMessageDeleted(deleteMessage: Message): void { 
    this.messages = reject(this.messages, (message => message.id === deleteMessage.id))
  }


}
