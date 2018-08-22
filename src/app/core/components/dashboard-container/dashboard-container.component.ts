import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AlertService} from '../../services/alert.service';

@Component({
  templateUrl: './dashboard-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent implements OnInit {

  constructor(private alertService: AlertService) {}

  public ngOnInit(): void {
    this.alertService.onSuccess$.next('Successfully logged');
  }
}
