import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public registerUser({username, password, email}: User): void {
    this.httpClient.post('http://localhost:3000/register', {
      username: username,
      password: password,
      email: email,
    }).subscribe(
      (response) => {
        console.log(response); // ok
      },
      (error) => {
        console.log(error); // blad - user istnieje
      });
  }

  public loadUserData(): Observable<User> {
    return this.httpClient.get<User>('http://localhost:3000/loadUserData');
  }
}
