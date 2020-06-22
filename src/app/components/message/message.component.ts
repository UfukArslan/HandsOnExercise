import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Output() deleted: EventEmitter<Message>;

  constructor() { 
    this.deleted = new EventEmitter();
  }

  ngOnInit(): void {}

  deleteMsg(): void {
    this.deleted.emit(this.message);
  }
}
