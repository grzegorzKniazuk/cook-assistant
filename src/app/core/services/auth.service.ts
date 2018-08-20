import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router, private alertService: AlertService) { }

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
    this.router.navigate(['login']);
  }

  public isLoggedIn(): Observable<boolean> { // TODO jak nie dziala isLoggedIn to tu
    return this.httpClient.post<boolean>('http://localhost:3000/isLoggedIn', {'token': localStorage.getItem('token')});
  }

  public register({username, password, email}: User): Subscription {
    return this.httpClient.post('http://localhost:3000/register', {
      username: username,
      password: password,
      email: email,
    }, { responseType: 'text'}).subscribe((response: string) => {
      if (response === 'Register successful') {
        this.alertService.onSuccess$.next('Register successful');
      } else if (response === 'Already registered') {
        this.alertService.onError$.next('Already registered');
      }
    });
  }
}
