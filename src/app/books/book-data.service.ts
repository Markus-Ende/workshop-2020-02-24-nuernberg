import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, NEVER } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }

  getBookByIsbn(isbn: string | null): Observable<Book> {
    if (isbn) {
      return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
    } else {
      return NEVER;
    }
  }
}
