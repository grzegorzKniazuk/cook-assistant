import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Step3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
