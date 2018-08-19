import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {

  @ViewChild('notify', { read: ViewContainerRef }) private notifyContainer: ViewContainerRef;

  constructor(private alertService: AlertService) {}

  public ngAfterViewInit(): void {
    this.alertService.onError$.subscribe((errorCode: string) => {
      if (errorCode === 'Unauthorized') {
        this.alertService.danger(this.notifyContainer, 'Niepoprawna nazwa użytkownika lub hasło.');
      } else if (errorCode === 'Blank') {
        this.alertService.danger(this.notifyContainer, 'Proszę wypełnić wszystkie pola formularza.');
      }
    });
  }
}
