import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Message, Alignment } from './models/message';
import { reject } from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DiaLog';
  messages: Message[];
  newMessage: Message; 
  selectedAlignement: Alignment;
  availableAlignments = ['left', 'center', 'right'];
  
  constructor(private api: ApiService){
    this.title = 'Dialog';
    this.selectedAlignement = 'left';
    this.newMessage = new Message(); //initialiser les propriétés

    /** Première option afin de casser le lien avec le to way bindin
    this.newMessage = {
      alignment: 'left',
      content: '',
      id: null,
      postedAt: new Date(),
      postedBy: 'me',
      read: true
    };**/

  }

  ngOnInit(): void {
    /** Première option afin de casser le lien avec le to way binding
    this.initMessage();**/
    this.api.loadMessagesForDialog(2).subscribe({
      next: (messages) => this.messages = messages,
      error: (error) => console.log(error)

    });
  }
//npm install lodash
// tous les éléments qui n'ont pas été évalués à vrai vont créer un nouveau tableau Message[]
  onMessageDeleted(deleteMessage: Message): void { 
    this.messages = reject(this.messages, (message => message.id === deleteMessage.id))
  }

  onMessageSend(): void {
    this.newMessage.postedAt = new Date ();
    this.messages.push(this.newMessage);
    this.newMessage = new Message();
    
    /** Première option afin de casser le lien avec le to way binding
    this.initMessage();**/
  }

  /** Première option afin de casser le lien avec le to way binding
  private initMessage() {
    this.newMessage = {
      alignment: 'left',
      content: '',
      id: null,
      postedAt: new Date(),
      postedBy: 'me',
      read: true
    }
  };**/

  changeAlignment(alignment: Alignment): void {
    this.selectedAlignement = alignment;
    console.log(event);
    }


}
