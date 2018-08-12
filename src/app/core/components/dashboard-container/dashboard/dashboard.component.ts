import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  public userData: User;
  constructor(private authService: AuthService, private userService: UserService) {}

  public logout(): void {
    this.authService.logout();
  }

  public getUserData(): void {
    this.userService.loadUserData().subscribe((data: User) => {
      this.userData = data;
    });
  }
}
