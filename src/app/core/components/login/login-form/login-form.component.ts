import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  @ViewChild('notify', { read: ViewContainerRef }) private notifyContainer: ViewContainerRef;
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.get('username').value, this.loginForm.get('password').value)
        .subscribe(
          () => {},
          error => {
            if (error.status === 401) {
              this.alertService.danger(this.notifyContainer, 'Niepoprawna nazwa użytkownika lub hasło.');
              this.setFormInvalid();
            }
          },
          () => {
            this.router.navigate(['dashboard']);
          });
    }
  }

  public removeAlert(): void {
    this.alertService.removeAlert(this.notifyContainer);
  }

  private setFormInvalid(): void {
    this.loginForm.get('username').setErrors({ 'minLength': true });
    this.loginForm.get('password').setErrors({ 'minLength': true });
  }
}
