import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Observable} from 'rxjs';
import { User } from '../../../../interfaces/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  public userData$: Observable<User> = this.userService.loadUserData();
  constructor(private authService: AuthService, private userService: UserService) { }

  public logout(): void {
    this.authService.logout();
  }
}
