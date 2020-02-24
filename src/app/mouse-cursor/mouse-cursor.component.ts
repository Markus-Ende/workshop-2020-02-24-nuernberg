import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sft-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent implements OnInit {
  x = 0;
  y = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onMousemove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }

}
