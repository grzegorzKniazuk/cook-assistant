import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './login-recovery.component.html',
  styleUrls: ['./login-recovery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class LoginRecoveryComponent implements OnInit {

  public passwordRecoveryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwordRecoveryForm = this.formBuilder.group({
      passwordRecoveryInput: ['', [Validators.required, Validators.email]],
    });
  }

}
