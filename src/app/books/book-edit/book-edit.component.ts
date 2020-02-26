import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'sft-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book$?: Observable<Book>;

  constructor(private activatedRoute: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit(): void {
    this.book$ = this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('isbn')),
      switchMap(isbn => this.bookData.getBookByIsbn(isbn))
    );
  }

  save(value: { title: string, abstract: string, author: string }, book: Book) {
    console.log('save:', value, book);
  }
}
