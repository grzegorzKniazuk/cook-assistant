import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AlertService } from '../services/alert.service';


// globalna obsluga bledow
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(httpError => {
      if (httpError.message === 'Http failure response for (unknown url): 0 Unknown Error') {
        this.alertService.onError$.next('Server Connection problem');
        return throwError('Server connection problem');
      } else if (httpError.error === 'Unauthorized') {
        this.alertService.onError$.next('Unauthorized');
        return throwError('Unauthorized');
      } else {
        return throwError(httpError);
      }
    }));
  }
}
