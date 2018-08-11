import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {AuthGuard} from '../../guards/auth.guard';


const DASHBOARD_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
];

export const dashboardRoute = RouterModule.forChild(DASHBOARD_ROUTES);
