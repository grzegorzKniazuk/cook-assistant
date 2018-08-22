import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './error404-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error404ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
