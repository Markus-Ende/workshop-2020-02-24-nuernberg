import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sft-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  name = 'BOOKS';

  saySomething() {
    console.log('HELLO');
  }
}
