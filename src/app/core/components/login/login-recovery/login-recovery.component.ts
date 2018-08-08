import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-recovery',
  templateUrl: './login-recovery.component.html',
  styleUrls: ['./login-recovery.component.scss'],
  encapsulation: ViewEncapsulation.None,

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
