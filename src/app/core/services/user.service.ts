import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private alertService: AlertService) { }

  public registerUser({username, password, email}: User): void {
    this.httpClient.post('http://localhost:3000/register', {
      username: username,
      password: password,
      email: email,
    }, { responseType: 'text'}).subscribe(
      (response: string) => {
        if (response === 'Register successful') {
          this.alertService.onSuccess$.next('Register successful');
        } else if (response === 'Already registered') {
          this.alertService.onError$.next('Already registered');
        }
      });
  }

  public loadUserData(): Observable<User> {
    return this.httpClient.get<User>('http://localhost:3000/loadUserData');
  }
}
