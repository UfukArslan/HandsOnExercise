import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alignment } from 'src/app/models/message';

@Component({
  selector: 'app-alignment-button',
  templateUrl: './alignment-button.component.html',
  styleUrls: ['./alignment-button.component.scss']
})
export class AlignmentButtonComponent implements OnInit {
  @Input() myAlignment: Alignment;
  @Input() selectedAlignment: Alignment;
  @Output() selected: EventEmitter<Alignment>;

  constructor() { 
    this.selected = new EventEmitter();
  }

  sendAlignment (): void {
    this.selected.emit(this.myAlignment);
  }

  ngOnInit(): void {
  }

}
