import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './login-container.component';
import { LoginComponent } from './login/login.component';

const LOGIN_CONTAINER_ROUTES: Routes = [
  { path: '', component: LoginContainerComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LOGIN_CONTAINER_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class LoginContainerRouteModule { }
