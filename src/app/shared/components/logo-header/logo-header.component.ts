import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo-header',
  templateUrl: './logo-header.component.html',
  styleUrls: ['./logo-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoHeaderComponent {
  public readonly logoUrl = '../../../../assets/images/dish-64.png';
}
