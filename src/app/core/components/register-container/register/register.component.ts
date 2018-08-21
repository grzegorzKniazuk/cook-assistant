import { Component, HostListener, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {

  @ViewChild('notify', { read: ViewContainerRef }) private notifyContainer: ViewContainerRef;
  private registerSubscription$: Subscription;
  private onError$: Subscription;
  private onSuccess$: Subscription;
  public registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.buildLoginForm();
    this.handleMessages();
  }

  ngOnDestroy() {
    if (this.registerSubscription$) {
      this.registerSubscription$.unsubscribe();
    }
    this.onError$.unsubscribe();
    this.onSuccess$.unsubscribe();
  }

  private buildLoginForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      passwordRepeat: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      regulationsAccepted: [{ value: false, disabled: false }, [Validators.required]],
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

  private handleMessages(): void {
    this.onError$ = this.alertService.onError$.subscribe((errorCode: string) => {
      if (errorCode === 'Already registered') {
        this.alertService.danger(this.notifyContainer, 'Nazwa użytkownika lub adres e-mail są już zajęte.');
      } else if (errorCode === 'Blank') {
        this.alertService.danger(this.notifyContainer, 'Proszę wypełnić wszystkie pola formularza.');
      }
    });
    this.onSuccess$ = this.alertService.onSuccess$.subscribe((successCode: string) => {
      if (successCode === 'Register successful') {
        this.authService.login(this.registerForm.get('username').value, this.registerForm.get('password').value).subscribe(() => {
          this.router.navigate(['dashboard']);
        });
      }
    });
  }

  @HostListener('document:keyup.enter')
  public register(): void {
    if (this.registerForm.valid) {
      this.registerSubscription$ = this.authService.register({
        username: this.registerForm.get('username').value,
        password: this.registerForm.get('password').value,
        email: this.registerForm.get('email').value,
      });
    } else {
      this.alertService.onError$.next('Blank');
    }
  }
}
