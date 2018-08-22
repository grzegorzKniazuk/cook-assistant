import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './login-container.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginRecoveryComponent } from './login/login-recovery/login-recovery.component';

const LOGIN_CONTAINER_ROUTES: Routes = [
  { path: '', component: LoginContainerComponent, children: [
      { path: '', component: LoginComponent, children: [
          { path: '', component: LoginFormComponent },
          { path: 'password-recovery', component: LoginRecoveryComponent },
        ]
      }
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
