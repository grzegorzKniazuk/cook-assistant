import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {

  public readonly socialIcons: string[] = [
    '../../../../assets/images/social/facebook.png',
    '../../../../assets/images/social/twitter.png',
    '../../../../assets/images/social/instagram.png',
  ];
  public isLogged$: Observable<boolean> = this.authService.isLoggedIn();
  constructor(private authService: AuthService) {}
}
