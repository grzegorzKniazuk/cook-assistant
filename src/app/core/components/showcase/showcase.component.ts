import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowcaseComponent {}
