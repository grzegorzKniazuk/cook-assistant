import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import {LoginRecoveryComponent} from './login-recovery/login-recovery.component';

const LOGIN_ROUTES: Routes = [
  { path: 'login', component: LoginComponent,
    children: [
      { path: '', component: LoginFormComponent},
      { path: 'password-recovery', component: LoginRecoveryComponent},
    ]},
];

export const loginRouterModule = RouterModule.forChild(LOGIN_ROUTES);
