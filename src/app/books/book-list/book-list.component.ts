import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sft-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books?: Book[];
  private subscription = Subscription.EMPTY;

  constructor(private bookData: BookDataService) {
  }

  ngOnInit(): void {
    this.subscription = this.bookData.getBooks().subscribe({ next: books => this.books = books });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
