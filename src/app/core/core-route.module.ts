import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AuthLoadGuard } from './guards/auth-load.guard';
import {Error404Component} from './components/error404/error404.component';

const CORE_ROUTES: Routes = [
  { path: 'login',
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
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
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
export class CoreRouteModule {}
