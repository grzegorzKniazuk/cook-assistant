import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyProfileComponent {}
