import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';
import { AlertService } from '../../../services/alert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {

  public womanChefClipart = '../../../../../assets/images/woman-chef.jpg';
  public userData$: Observable<User> = this.userService.loadUserData();
  @ViewChild('dashboardMessages', { read: ViewContainerRef }) private dashboardMessages: ViewContainerRef;

  constructor(private authService: AuthService, private userService: UserService, private alertService: AlertService) {}

  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.alertService.onSuccess$.subscribe((successCode: string) => {
        if (successCode === 'Successfully logged') {
          this.alertService.success(this.dashboardMessages, 'Witaj ponownie!');
        }
      });
    });
  }
}
