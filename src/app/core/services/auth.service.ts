import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public login(username: string, password: string): Observable<User> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', {username, password})
      .pipe(tap(response => {
        this.setSession(response);
      }))
      .pipe(shareReplay());
  }

  private setSession(response): void {
    console.log(response.idToken);
    localStorage.setItem('id_token', response.idToken);
  }

  public logout(): void {
    localStorage.removeItem('id_token');
  }

  public isLoggedIn() {
    return this.httpClient.post<any>('http://localhost:3000/isLoggedIn', {'idToken': localStorage.getItem('id_token')});
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
