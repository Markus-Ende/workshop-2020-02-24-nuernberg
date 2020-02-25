import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'sft-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$?: Observable<Book[]>;

  constructor(private bookData: BookDataService) {
  }

  ngOnInit(): void {
    this.books$ = this.bookData.getBooks();
  }

}
