import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class BooksModule { }
