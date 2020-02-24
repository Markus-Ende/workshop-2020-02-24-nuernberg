import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sft-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
