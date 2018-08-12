import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthActivateGuard } from '../../guards/auth-activate.guard';

const DASHBOARD_CONTAINER_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardContainerComponent, canActivate: [ AuthActivateGuard ], children: [
      { path: '', component: DashboardComponent, canActivate: [ AuthActivateGuard ] }
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARD_CONTAINER_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class DashboardContainerRouteModule { }
