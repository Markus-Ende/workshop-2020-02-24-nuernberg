import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, NEVER, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'sft-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book$?: Observable<Book>;

  book?: Book;

  subs = new Subscription();

  constructor(private activatedRoute: ActivatedRoute, private bookData: BookDataService) {
  }

  ngOnInit(): void {
    // with inner subscriptions:
    const outerSub = this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        const isbn = params.get('isbn');
        if (isbn) {
          const innerSub = this.bookData.getBookByIsbn(isbn).subscribe({
            next: book => this.book = book
          });

          this.subs.add(innerSub);
        }
      }
    });
    this.subs.add(outerSub);

    // with switchMap operator:
    this.book$ = this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      switchMap(isbn => this.bookData.getBookByIsbn(isbn))
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }





















}
