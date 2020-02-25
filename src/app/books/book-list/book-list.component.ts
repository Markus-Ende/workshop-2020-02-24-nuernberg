import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'sft-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bookData: BookDataService) {
    this.books = bookData.getBooks();
  }

  ngOnInit(): void {
  }

}
