import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterContainerComponent } from './register-container.component';
import { RegisterComponent } from './register/register.component';

const REGISTER_ROUTES: Routes = [
  { path: '', component: RegisterContainerComponent,
    children: [
      { path: '', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(REGISTER_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class RegisterContainerRouteModule { }
