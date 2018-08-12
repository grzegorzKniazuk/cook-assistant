import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRecoveryComponent } from './login-recovery/login-recovery.component';

const LOGIN_ROUTES: Routes = [
  { path: 'login', component: LoginComponent,
    children: [
      { path: '', component: LoginFormComponent},
      { path: 'password-recovery', component: LoginRecoveryComponent},
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(LOGIN_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class LoginRouteModule { }
