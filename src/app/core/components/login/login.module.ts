import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRecoveryComponent} from './login-recovery/login-recovery.component';
import { loginRouterModule } from './login-route.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    loginRouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginRecoveryComponent,
  ],
})
export class LoginModule { }
