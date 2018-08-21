import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import {AuthLoadGuard} from './guards/auth-load.guard';

const CORE_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'showcase', component: ShowcaseComponent },
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
