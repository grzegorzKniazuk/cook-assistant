import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { AuthLoadGuard } from './guards/auth-load.guard';

const CORE_ROUTES: Routes = [
  { path: 'login',
    loadChildren: './components/login-container/login-container.module#LoginContainerModule',
  },
  { path: 'register',
    loadChildren: './components/register-container/register-container.module#RegisterContainerModule',
  },
  {
    path: 'dashboard',
    loadChildren: './components/dashboard-container/dashboard-container.module#DashboardContainerModule',
    canLoad: [ AuthLoadGuard ],
  },
  {
    path: '404',
    loadChildren: './components/error404-container/error404-container.module#Error404ContainerModule',
  },
  { path: 'showcase',
    component: ShowcaseComponent,
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
