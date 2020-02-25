import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sft-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent {
  @Input() title = '';
  @Output() titleClick = new EventEmitter<string>();

  constructor() { }

  emitTitleClick() {
    this.titleClick.emit(this.title);
  }

}
