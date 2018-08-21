import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRecoveryComponent } from './login-recovery/login-recovery.component';
import {Error404Component} from '../error404/error404.component';

const LOGIN_ROUTES: Routes = [

/*  { path: 'error-404', component: Error404Component },
  {
    path: '**',
    redirectTo: 'error-404',
    pathMatch: 'full',
  },*/
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
