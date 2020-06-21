import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Message } from './models/message';

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


}
