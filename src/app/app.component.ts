import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertService} from './core/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('globalErrorContainer', { read: ViewContainerRef }) private globalErrorContainer: ViewContainerRef;

  constructor(private alertService: AlertService) {}

  public ngAfterViewInit(): void {
    this.alertService.onError$.subscribe((errorCode: string) => {
      if (errorCode === 'Server connection problem') {
       this.alertService.danger(this.globalErrorContainer, 'Błąd połączenia z serwerem. Skontaktuj się z administratorem serwisu.');
      }
    });
  }
}
