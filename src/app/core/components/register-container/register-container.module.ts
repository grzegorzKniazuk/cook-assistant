import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContainerComponent } from './register-container.component';
import { RegisterContainerRouteModule } from './register-container-route.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterModule,
    RegisterContainerRouteModule,
  ],
  declarations: [
    RegisterContainerComponent,
  ]
})
export class RegisterContainerModule { }
