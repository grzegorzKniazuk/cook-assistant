import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLogged: boolean;
  constructor(private authService: AuthService) {}

  public canActivate ( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.isLoggedIn().subscribe((response) => {
      this.isLogged = response.isLogged;
    });
    return this.isLogged;
  }
}
