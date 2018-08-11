import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpCLient: HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public login(): void {
    this.httpCLient.post('http://localhost:3000/login', {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    }).subscribe((res) => console.log(res));
  }
}
