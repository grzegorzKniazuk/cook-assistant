import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerRouteModule } from './login-container-route.module';
import { LoginContainerComponent } from './login-container.component';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    LoginContainerRouteModule,
  ],
  declarations: [
    LoginContainerComponent,
  ]
})
export class LoginContainerModule { }
