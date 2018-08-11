import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('id_token');

    if (idToken) {
      const cloned = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${idToken}`,
        }
      });
      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}
