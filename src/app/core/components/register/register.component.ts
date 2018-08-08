import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordRepeat: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      regulationsAccepted: [{ value: true, disabled: false }],
    }, {
      validator: (form: FormGroup) => { // walidator dla calego formularza
        const values = form.value;

        if (values.password !== values.passwordRepeat) {
          return {
            passwordNotMatch: true,
          };
        }
        return null;
      }
    });
  }

  public register(): void {

  }
}
