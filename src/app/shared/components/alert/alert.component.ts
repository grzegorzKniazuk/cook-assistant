import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AlertType } from '../../../core/enums/alert.enum';

@Component({
  selector: 'app-user-notification',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() public type: AlertType;
  @Input() public message: string;
}
