import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRecoveryComponent} from './login-recovery/login-recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginRouteModule } from './login-route.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
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
