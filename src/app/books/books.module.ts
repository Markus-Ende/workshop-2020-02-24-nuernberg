import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent, BookEditComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  exports: []
})
export class BooksModule { }
