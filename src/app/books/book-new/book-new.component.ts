import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { take } from 'rxjs/operators';

@Component({
  selector: 'sft-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form?: FormGroup;

  constructor(private fb: FormBuilder, private bookData: BookDataService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      abstract: ['', []],
      author: ['', [Validators.required]]
    });
  }

  public get title() {
    return this.form?.get('title');
  }

  public get abstract() {
    return this.form?.get('abstract');
  }

  public get author() {
    return this.form?.get('author');
  }


  onSubmit() {
    if (this.form) {
      console.log('submitting book');
      const newBook: Book = {
        title: this.title?.value,
        abstract: this.abstract?.value,
        author: this.author?.value
      };
      this.bookData.newBook(newBook).pipe(take(1)).subscribe();
    }

  }
}
