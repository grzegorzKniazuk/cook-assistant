import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  public login(username: string, password: string): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', {username, password})
      .pipe(tap(response => {
        this.setSession(response);
      }))
      .pipe(shareReplay());
  }

  private setSession(response): void {
    localStorage.setItem('token', response.token);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  public isLoggedIn(): Observable<boolean> {
    return this.httpClient.post<any>('http://localhost:3000/isLoggedIn', {'token': localStorage.getItem('token')});
  }
}
