import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRecoveryComponent} from './login-recovery/login-recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { LoginRouteModule } from './login-route.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRouteModule,
    RouterModule,
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginRecoveryComponent,
  ],
})
export class LoginModule { }
