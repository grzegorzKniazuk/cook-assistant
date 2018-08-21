import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {}
