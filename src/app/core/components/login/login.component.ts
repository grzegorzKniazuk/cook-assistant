import {AfterViewInit, Component, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertService} from '../../services/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit, OnDestroy {

  @ViewChild('notify', { read: ViewContainerRef }) private notifyContainer: ViewContainerRef;
  private onError$: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnDestroy() {
    this.onError$.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.onError$ = this.alertService.onError$.subscribe((errorCode: string) => {
      if (errorCode === 'Unauthorized') {
        this.alertService.danger(this.notifyContainer, 'Niepoprawna nazwa użytkownika lub hasło.');
      } else if (errorCode === 'Blank') {
        this.alertService.danger(this.notifyContainer, 'Proszę wypełnić wszystkie pola formularza.');
      }
    });
  }
}
