import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';


// globalna obsluga bledow
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse) {
        // tutaj wiadomosc
      }
      return throwError(error);
    }));
  }

}
