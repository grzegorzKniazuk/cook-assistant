import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AuthLoadGuard } from './guards/auth-load.guard';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { LoginRecoveryComponent } from './components/login/login-recovery/login-recovery.component';

const CORE_ROUTES: Routes = [
  { path: 'login', component: LoginComponent,
    children: [
      { path: '', component: LoginFormComponent},
      { path: 'password-recovery', component: LoginRecoveryComponent},
    ]
  },
  { path: 'register',
    loadChildren: './components/register-container/register-container.module#RegisterContainerModule',
  },
  { path: 'showcase',
    component: ShowcaseComponent,
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard-container/dashboard-container.module#DashboardContainerModule',
    canLoad: [ AuthLoadGuard ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(CORE_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class CoreRouteModule { }
