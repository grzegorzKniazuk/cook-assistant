import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordRepeat: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      regulationsAccepted: [{ value: false, disabled: false }],
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
    this.httpClient.post('http://localhost:3000/register', {
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
      email: this.registerForm.get('email').value,
    }).subscribe();
  }
}
