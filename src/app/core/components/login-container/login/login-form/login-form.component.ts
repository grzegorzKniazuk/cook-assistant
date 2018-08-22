import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../../services/alert.service';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService) { }

  public ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  @HostListener('document:keyup.enter')
  public login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(() => {
            this.router.navigate(['dashboard']);
      });
    } else {
      this.alertService.onError$.next('Blank');
    }
  }
}
