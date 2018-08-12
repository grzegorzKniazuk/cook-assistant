import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import {AuthLoadGuard} from './core/guards/auth-load.guard';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'dashboard',
    loadChildren: './core/components/dashboard-container/dashboard-container.module#DashboardContainerModule',
    canLoad: [ AuthLoadGuard ],
  },
  {
    path: '**',
    redirectTo: 'error-404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRouteModule { }
