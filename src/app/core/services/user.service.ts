import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public loadUserData(): Observable<User> {
    return this.httpClient.get<User>('http://localhost:3000/loadUserData');
  }
}
