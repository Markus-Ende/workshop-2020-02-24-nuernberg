import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard implements CanDeactivate<BookDetailComponent> {

  canDeactivate(
    component: BookDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //component.book$?.pipe(take(1)).subscribe(....)
    return confirm(`really leave book '${component.book?.title}'?`);
  }



}
