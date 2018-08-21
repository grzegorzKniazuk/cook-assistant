import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
