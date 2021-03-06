import { Component } from '@angular/core';

@Component({
  selector: 'sft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Bookmonkey';

  onTitleClick(e: string) {
    console.log(`clicked: ${e}`);
    this.title += '!';
  }
}
