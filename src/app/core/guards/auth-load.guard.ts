import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return <Observable<boolean>>this.authService.isLoggedIn().pipe(map(response => response ? response : this.router.navigate(['login'])));
  }
}
