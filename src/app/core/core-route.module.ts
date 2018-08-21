import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AuthLoadGuard } from './guards/auth-load.guard';
import { LoginComponent } from './components/login-container/login/login.component';

const CORE_ROUTES: Routes = [
  { path: 'login', component: LoginComponent,
    loadChildren: './components/login-container/login-container.module#LoginContainerModule',
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
